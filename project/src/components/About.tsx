import React from 'react';
import { Footer } from './Footer';

export function About() {
  return (
    <>
      <section id="about" className="py-4">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">About Me</h2>
          <div className="flex flex-col gap-4">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                Hi, I'm Saidgani
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a 21-year-old junior full stack developer based in the historic city of Samarkand, Uzbekistan. 
                My journey in programming began with a deep fascination for technology and its potential to create 
                meaningful solutions.
              </p>
              <img
                src="https://i.imgur.com/5Qptw7K.jpeg"
                alt="Programming setup"
                className="w-full rounded-lg shadow-md"
              />
            </div>

            <div className="space-y-3 mt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently, I'm pursuing my education at School 21, the premier IT school in Samarkand, known for its 
                innovative approach to technology education. Additionally, I'm enrolled at TUIT (Tashkent University 
                of Information Technologies) Samarkand branch, where I'm expanding my theoretical and practical 
                knowledge in computer science.
              </p>
              <img
                src="https://i.imgur.com/0hbuwDg.jpeg"
                alt="Education"
                className="w-full rounded-lg shadow-md"
              />
            </div>

            <div className="space-y-3 mt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">Coding Challenges</h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                One of my favorite ways to sharpen my programming skills is by solving algorithmic challenges on platforms 
                like CodeWars and LeetCode. These platforms help me think critically and improve my problem-solving abilities 
                while learning new programming concepts and techniques.
              </p>
              <img
                src="https://i.imgur.com/Lq3Y402.jpeg"
                alt="Coding challenges"
                className="w-full rounded-lg shadow-md"
              />
            </div>

            <div className="text-center mt-8">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 italic">
                Now you know the basic information about me and my journey in the world of programming!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}