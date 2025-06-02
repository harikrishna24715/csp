import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, BookOpen, User, Loader as Road, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  isCompleted: boolean;
}

const LessonCard: React.FC<LessonCardProps> = ({ id, title, description, icon, isCompleted }) => {
  const navigate = useNavigate();
  
  const getIcon = () => {
    switch (icon) {
      case 'traffic-sign':
        return <AlertTriangle className="h-10 w-10 text-red-500" />;
      case 'walking':
        return <User className="h-10 w-10 text-blue-500" />;
      case 'helmet':
        return <AlertTriangle className="h-10 w-10 text-green-500" />;
      case 'crossroad':
        return <Road className="h-10 w-10 text-purple-500" />;
      default:
        return <BookOpen className="h-10 w-10 text-yellow-500" />;
    }
  };
  
  const handleClick = () => {
    navigate(`/lessons/${id}`);
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer border-2 ${
        isCompleted ? 'border-green-500' : 'border-transparent'
      }`}
      onClick={handleClick}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="bg-blue-100 p-3 rounded-2xl">
            {getIcon()}
          </div>
          {isCompleted && (
            <div className="bg-green-100 p-2 rounded-full">
              <Check className="h-6 w-6 text-green-600" />
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold mt-4 text-blue-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        
        <div className="mt-6">
          <span 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg text-lg hover:bg-blue-700 transition-colors"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Begin Lesson
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LessonCard;