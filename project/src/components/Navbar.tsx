import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handlePageChange('home')}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300">
              SD
            </div>
            <span className="ml-3 text-xl font-medium text-gray-900 dark:text-white">Said's Blog</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handlePageChange('about')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              About Me
            </button>
            <button 
              onClick={() => handlePageChange('projects')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'projects' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => handlePageChange('contact')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'contact' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Contact
            </button>
            <button 
              onClick={() => handlePageChange('bored')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'bored' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              I Feel Bored
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => handlePageChange('about')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                currentPage === 'about'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => handlePageChange('projects')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                currentPage === 'projects'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => handlePageChange('contact')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                currentPage === 'contact'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => handlePageChange('bored')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                currentPage === 'bored'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              I Feel Bored
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}