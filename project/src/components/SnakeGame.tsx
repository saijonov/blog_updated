import React, { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { Gamepad } from 'lucide-react';
import { GameWindow } from './GameWindow';
import { DesktopGame } from './DesktopGame';

export function SnakeGame() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const myHighScore = 43;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center py-8 px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Gamepad className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Snake Game</h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">
              "I used to spend hours playing this game on my grandma's old Nokia phone. 
              Those were the days! 😊"
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My highest score is {myHighScore}. Think you can beat it?
            </p>

            {!isGameStarted && (
              <button
                onClick={() => setIsGameStarted(true)}
                className="px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Play Game
              </button>
            )}

            {isGameStarted && !isMobile && <DesktopGame />}
          </div>
        </div>
        <Footer />
      </div>

      {isGameStarted && isMobile && (
        <GameWindow onClose={() => setIsGameStarted(false)} />
      )}
    </>
  );
}