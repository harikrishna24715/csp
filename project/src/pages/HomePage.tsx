import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, HelpCircle, AlertTriangle, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { isAllLessonsCompleted } = useAppContext();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Learn Road Safety</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Simple lessons to help you stay safe on and around roads in your community.
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/5538069/pexels-photo-5538069.jpeg" 
            alt="Road safety" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Road Safety Matters</h2>
              <p className="text-lg md:text-xl">
                Road accidents can be prevented with proper knowledge and caution.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          onClick={() => navigate('/lessons')}
        >
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-2">Start Learning</h3>
            <p className="text-center text-gray-600 mb-4">
              Simple lessons about road signs, crossing safely, and protective gear.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors">
                View Lessons
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          onClick={() => navigate('/quiz')}
        >
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 p-4 rounded-full">
                <HelpCircle className="h-12 w-12 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-2">Take the Quiz</h3>
            <p className="text-center text-gray-600 mb-4">
              Test your knowledge with simple questions about road safety.
            </p>
            <div className="flex justify-center">
              <button className="bg-yellow-500 text-blue-900 py-3 px-6 rounded-lg font-medium text-lg hover:bg-yellow-600 transition-colors">
                Start Quiz
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
            isAllLessonsCompleted() ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={() => isAllLessonsCompleted() && navigate('/games')}
        >
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <Gamepad2 className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-2">Play Games</h3>
            <p className="text-center text-gray-600 mb-4">
              Learn road safety through fun interactive games.
              {!isAllLessonsCompleted() && (
                <span className="block text-sm text-red-500 mt-2">
                  Complete all lessons to unlock games
                </span>
              )}
            </p>
            <div className="flex justify-center">
              <button 
                className={`py-3 px-6 rounded-lg font-medium text-lg transition-colors ${
                  isAllLessonsCompleted()
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-200 text-gray-500'
                }`}
                disabled={!isAllLessonsCompleted()}
              >
                Play Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="bg-blue-900 text-white rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-4 mb-4">
          <AlertTriangle className="h-8 w-8 text-yellow-400" />
          <h2 className="text-2xl font-bold">Did You Know?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-800 p-4 rounded-xl">
            <p className="text-xl font-medium">Road accidents are a leading cause of death worldwide</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-xl">
            <p className="text-xl font-medium">Wearing a helmet reduces head injury risk by up to 85%</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-xl">
            <p className="text-xl font-medium">Seatbelts save thousands of lives every year</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;