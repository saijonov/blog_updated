import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { SnakeGame } from './components/SnakeGame';
import { Contact } from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="max-w-4xl mx-auto px-8 py-6">
        {currentPage === 'home' && <Hero />}
        {currentPage === 'about' && <About />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'bored' && <SnakeGame />}
      </main>
    </div>
  );
}

export default App;