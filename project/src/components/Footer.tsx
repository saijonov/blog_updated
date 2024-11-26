import React from 'react';
import { Github, Linkedin, Instagram, Youtube, Briefcase } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 mt-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a 
              href="https://github.com/saijonov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/saidgani-dadajanov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/sai_jonov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@sai_jonov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~017dcbcff80af70a08?mp_source=share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="Upwork"
            >
              <Briefcase className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Saidgani Dadajanov. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
            Available for freelance projects on{' '}
            <a 
              href="https://www.upwork.com/freelancers/~017dcbcff80af70a08?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Upwork
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}