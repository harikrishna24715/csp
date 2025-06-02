import React from 'react';
import { Info, Home, Gamepad2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Info size={20} /> About SafetySteps
            </h3>
            <p>
              SafetySteps is a road safety education platform designed for rural communities.
              Our mission is to reduce road accidents through accessible education.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Home size={20} /> Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-300 transition-colors">Home</a></li>
              <li><a href="/lessons" className="hover:text-yellow-300 transition-colors">Lessons</a></li>
              <li><a href="/games" className="hover:text-yellow-300 transition-colors">Games</a></li>
              <li><a href="/quiz" className="hover:text-yellow-300 transition-colors">Quiz</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-6 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} SafetySteps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer