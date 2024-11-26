import React from 'react';
import { Mail, Send } from 'lucide-react';
import { Footer } from './Footer';

export function Contact() {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Get in Touch
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                <a 
                  href="mailto:saidganidadajonovsat@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 break-all"
                >
                  saidganidadajonovsat@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Send className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Telegram</h3>
                <a 
                  href="https://t.me/sai_jonov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Message on Telegram
                </a>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Telegram: @sai_jonov
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-600 dark:text-gray-300">
              I typically respond within 24 hours. Looking forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}