import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Trophy } from 'lucide-react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const INITIAL_SNAKE: Position[] = [{ x: 10, y: 10 }];
const INITIAL_FOOD: Position = { x: 5, y: 5 };
const CELL_SIZE = 20;
const GAME_SPEED = 150;

export function DesktopGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('snakeHighScore');
    return saved ? parseInt(saved) : 0;
  });
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const foodEatenRef = useRef(false);
  const myHighScore = 43;

  const generateFood = useCallback((): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const checkCollision = useCallback((head: Position): boolean => {
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
  }, [snake]);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    setSnake(prevSnake => {
      const head = { ...prevSnake[0] };

      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      if (checkCollision(head)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [head, ...prevSnake];

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y && !foodEatenRef.current) {
        foodEatenRef.current = true;
        setScore(prev => prev + 1);
        setFood(generateFood());
        return newSnake; // Keep the tail when eating food
      }

      if (foodEatenRef.current) {
        foodEatenRef.current = false;
      } else {
        newSnake.pop(); // Remove tail if food wasn't eaten
      }

      return newSnake;
    });
  }, [direction, food, gameOver, checkCollision, generateFood]);

  const startGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    foodEatenRef.current = false;
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
      
      switch (e.key) {
        case 'ArrowUp':
          setDirection(prev => prev !== 'DOWN' ? 'UP' : prev);
          break;
        case 'ArrowDown':
          setDirection(prev => prev !== 'UP' ? 'DOWN' : prev);
          break;
        case 'ArrowLeft':
          setDirection(prev => prev !== 'RIGHT' ? 'LEFT' : prev);
          break;
        case 'ArrowRight':
          setDirection(prev => prev !== 'LEFT' ? 'RIGHT' : prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameLoop);
  }, [moveSnake]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('snakeHighScore', score.toString());
    }
  }, [score, highScore]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff';
    ctx.fillRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);

    // Draw snake body
    snake.forEach(({ x, y }, index) => {
      // Different colors for head and body
      if (index === 0) {
        ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#60a5fa' : '#2563eb';
      } else {
        ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#3b82f6' : '#3b82f6';
      }

      ctx.fillRect(
        x * CELL_SIZE,
        y * CELL_SIZE,
        CELL_SIZE - 1,
        CELL_SIZE - 1
      );
      
      // Draw snake eyes on head
      if (index === 0) {
        ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff';
        const eyeSize = CELL_SIZE / 6;
        const eyeOffset = CELL_SIZE / 4;
        
        ctx.fillRect(
          x * CELL_SIZE + eyeOffset,
          y * CELL_SIZE + eyeOffset,
          eyeSize,
          eyeSize
        );
        
        ctx.fillRect(
          x * CELL_SIZE + CELL_SIZE - eyeOffset - eyeSize,
          y * CELL_SIZE + eyeOffset,
          eyeSize,
          eyeSize
        );
      }
    });

    // Draw food
    ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#ef4444' : '#dc2626';
    ctx.beginPath();
    ctx.arc(
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE / 2 - 1,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }, [snake, food]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  return (
    <div className="flex flex-col items-center select-none">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-gray-600 dark:text-gray-300">Score: {score}</span>
        </div>
        <div className="text-gray-600 dark:text-gray-300">
          High Score: {Math.max(highScore, score)}
        </div>
      </div>

      <div className="relative border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg">
        <canvas
          ref={canvasRef}
          width={GRID_SIZE * CELL_SIZE}
          height={GRID_SIZE * CELL_SIZE}
          className="bg-white dark:bg-gray-800"
        />
        
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
              <p className="text-red-600 dark:text-red-400 font-semibold mb-2">Game Over!</p>
              {score > myHighScore && (
                <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                  🎉 New Record! You beat {myHighScore}! 🎉
                </p>
              )}
              <button
                onClick={startGame}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Use arrow keys to control the snake
      </p>
    </div>
  );
}