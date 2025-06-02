import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, AlertTriangle, Gamepad2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAllLessonsCompleted, quizScore } = useAppContext();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const linkClass = ({ isActive }: { isActive: boolean }) => 
    `block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
      isActive 
        ? 'bg-blue-600 text-white' 
        : 'text-blue-900 hover:bg-blue-100'
    }`;

  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center" onClick={closeMenu}>
            <AlertTriangle className="h-8 w-8 text-blue-900 mr-2" />
            <span className="text-2xl font-bold text-blue-900">SafetySteps</span>
          </NavLink>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/lessons" className={linkClass}>Lessons</NavLink>
            {isAllLessonsCompleted() && (
              <NavLink to="/games" className={linkClass}>
                <span className="flex items-center">
                  <Gamepad2 className="h-5 w-5 mr-2" />
                  Games
                </span>
              </NavLink>
            )}
            <NavLink to="/quiz" className={linkClass}>Quiz</NavLink>
            {(quizScore !== null) && (
              <NavLink to="/certificate" className={linkClass}>Certificate</NavLink>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-lg text-blue-900 hover:bg-yellow-300 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-yellow-50 rounded-lg shadow-lg absolute top-16 left-4 right-4 z-10">
            <div className="flex flex-col space-y-2 p-2">
              <NavLink to="/" className={linkClass} onClick={closeMenu} end>Home</NavLink>
              <NavLink to="/lessons" className={linkClass} onClick={closeMenu}>Lessons</NavLink>
              {isAllLessonsCompleted() && (
                <NavLink to="/games" className={linkClass} onClick={closeMenu}>
                  <span className="flex items-center">
                    <Gamepad2 className="h-5 w-5 mr-2" />
                    Games
                  </span>
                </NavLink>
              )}
              <NavLink to="/quiz" className={linkClass} onClick={closeMenu}>Quiz</NavLink>
              {(quizScore !== null) && (
                <NavLink to="/certificate" className={linkClass} onClick={closeMenu}>Certificate</NavLink>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar