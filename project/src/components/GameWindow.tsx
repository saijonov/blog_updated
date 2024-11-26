import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, Trophy } from 'lucide-react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

interface GameWindowProps {
  onClose: () => void;
}

const GRID_SIZE = 20;
const INITIAL_POSITION = { x: 10, y: 10 };
const INITIAL_FOOD = { x: 5, y: 5 };

export function GameWindow({ onClose }: GameWindowProps) {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(() => {
    const saved = localStorage.getItem('snakeHighScore');
    return saved ? parseInt(saved) : 0;
  });
  const [snake, setSnake] = useState<Position[]>([INITIAL_POSITION]);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [speed] = useState(120);
  const [cellSize, setCellSize] = useState(20);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const touchStartRef = useRef<Position>({ x: 0, y: 0 });
  const myHighScore = 43;

  useEffect(() => {
    const updateCellSize = () => {
      const maxSize = Math.min(window.innerWidth - 32, window.innerHeight - 200);
      setCellSize(Math.floor(maxSize / GRID_SIZE));
    };

    updateCellSize();
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const generateFood = useCallback((): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const startGame = useCallback(() => {
    setSnake([INITIAL_POSITION]);
    setFood(INITIAL_FOOD);
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
  }, []);

  const checkCollision = useCallback((head: Position): boolean => {
    return (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE ||
      snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    );
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
      
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 1);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, checkCollision, generateFood]);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };

    const dx = touchEnd.x - touchStartRef.current.x;
    const dy = touchEnd.y - touchStartRef.current.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      setDirection(prev => {
        if (dx > 0 && prev !== 'LEFT') return 'RIGHT';
        if (dx < 0 && prev !== 'RIGHT') return 'LEFT';
        return prev;
      });
    } else {
      setDirection(prev => {
        if (dy > 0 && prev !== 'UP') return 'DOWN';
        if (dy < 0 && prev !== 'DOWN') return 'UP';
        return prev;
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with dark background in dark mode
    ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#1f2937' : 'white';
    ctx.fillRect(0, 0, GRID_SIZE * cellSize, GRID_SIZE * cellSize);

    // Draw snake with adjusted colors for dark mode
    ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#60a5fa' : '#2563eb';
    snake.forEach(({ x, y }) => {
      ctx.fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1);
    });

    if (!snake.some(segment => segment.x === food.x && segment.y === food.y)) {
      ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#ef4444' : '#dc2626';
      ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize - 1, cellSize - 1);
    } else {
      setFood(generateFood());
    }
  }, [snake, food, generateFood, cellSize]);

  useEffect(() => {
    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [moveSnake, speed]);

  useEffect(() => {
    if (score > highestScore) {
      setHighestScore(score);
      localStorage.setItem('snakeHighScore', score.toString());
    }
  }, [score, highestScore]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 w-full max-w-lg mx-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-600 dark:text-gray-300">Score: {score}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div 
          className="relative border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden touch-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <canvas
            ref={canvasRef}
            width={GRID_SIZE * cellSize}
            height={GRID_SIZE * cellSize}
            className="touch-none"
          />
        </div>

        {gameOver && (
          <div className="mt-4 text-center">
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
        )}

        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Swipe in any direction to control the snake
        </p>
      </div>
    </div>
  );
}