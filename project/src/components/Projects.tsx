import React from 'react';
import { Github } from 'lucide-react';
import { Footer } from './Footer';

export function Projects() {
  const projects = [
    {
      title: 'CRM System',
      description: 'A comprehensive Customer Relationship Management system built with modern web technologies. This project demonstrates the implementation of essential CRM functionalities for business management.',
      github: 'https://github.com/saijonov/CRM',
      tech: ['Django', 'Python', 'Web Development'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'News Site Project',
      description: 'A dynamic news website that delivers current events and articles. Features a responsive design and intuitive content management system for easy news updates and management.',
      github: 'https://github.com/saijonov/news_site_project',
      tech: ['Django', 'Python', 'Content Management'],
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'String.h Library Implementation',
      description: 'A custom implementation of the C string.h library, showcasing low-level programming skills and deep understanding of string manipulation functions in C.',
      github: 'https://github.com/saijonov/string.h-library-in-C-implementation',
      tech: ['C', 'System Programming', 'Data Structures'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <>
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                  <div className="lg:w-2/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                        title="View on GitHub"
                      >
                        <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                      </a>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}