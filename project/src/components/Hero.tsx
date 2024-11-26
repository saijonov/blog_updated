import React from 'react';
import { Github, Linkedin, Instagram, Youtube, Briefcase } from 'lucide-react';

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-full blur-xl opacity-50"></div>
        <img
          src="https://i.imgur.com/8a5J50t.jpeg"
          alt="Saidgani Dadajanov"
          className="relative rounded-full object-cover w-full h-full ring-4 ring-white dark:ring-gray-800 shadow-lg"
          style={{ objectPosition: 'center' }}
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Saidgani Dadajanov</h1>
      <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">Junior Full Stack Developer</p>
      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-6">
        <span className="text-base">Based in Uzbekistan</span>
      </div>
      
      <div className="flex space-x-4 sm:space-x-6 mb-8">
        <a 
          href="https://github.com/saijonov"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          title="GitHub"
        >
          <Github className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a 
          href="https://www.linkedin.com/in/saidgani-dadajanov/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a 
          href="https://www.instagram.com/sai_jonov/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          title="Instagram"
        >
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a 
          href="https://www.youtube.com/@sai_jonov"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          title="YouTube"
        >
          <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a 
          href="https://www.upwork.com/freelancers/~017dcbcff80af70a08?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          title="Upwork"
        >
          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>

      <div className="mt-4 max-w-2xl bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm">
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Full-stack developer with a passion for creating clean, efficient solutions. 
          Always eager to learn and tackle new challenges in the world of web development.
        </p>
      </div>
    </div>
  );
}