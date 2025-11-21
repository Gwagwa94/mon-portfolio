import React from 'react';
import Link from 'next/link'; // Import the Link component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      {/* Using bg-nightBlueLight from tailwind.config.js */}
      <header className="bg-nightBlueLight p-4 shadow-lg rounded-b-lg mx-auto w-11/11 md:w-4/5 lg:w-3/4 mt-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Site Title / Logo */}
          {/* Using text-coralMain from tailwind.config.js */}
          <h1 className="text-3xl font-bold text-auroraGreen rounded-md p-2">
            <Link href="/"> {/* Link to homepage */}
              Grégoire Baumann
            </Link>
          </h1>
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6">
              {/* Using text-auroraGreen for hover effect from tailwind.config.js */}
              <li><Link href="/" className="text-white hover:text-auroraGreen transition-colors duration-300">Home</Link></li>
              <li><Link href="/projects" className="text-white hover:text-auroraGreen transition-colors duration-300">Projects</Link></li>
              <li><Link href="/skills" className="text-white hover:text-auroraGreen transition-colors duration-300">Skills</Link></li>
              <li><Link href="/contact" className="text-white hover:text-auroraGreen transition-colors duration-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-8 flex items-center justify-center">
        {children} {/* This is where your page content will be rendered */}
      </main>

      {/* Footer Section */}
      {/* Using bg-nightBlueLight from tailwind.config.js */}
      <footer className="bg-nightBlueLight p-4 text-center text-gray-400 rounded-t-lg mx-auto w-11/12 md:w-4/5 lg:w-3/4 mb-4">
        <div className="container mx-auto">
          <p>&copy; 2025 Grégoire Baumann. All rights reserved.</p>
          <p className="mt-2">
            {/* Using text-auroraGreen for links from tailwind.config.js */}
            <a href="https://linkedin.com/in/gregoire-baumann" target="_blank" className="text-auroraGreen hover:underline">
              LinkedIn
            </a> | <a href="https://github.com/Gwagwa94" target="_blank" className="text-auroraGreen hover:underline">
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
