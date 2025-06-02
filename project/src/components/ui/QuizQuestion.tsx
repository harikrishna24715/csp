import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { QuizQuestion as QuizQuestionType } from '../../data/quiz';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (isCorrect: boolean) => void;
  showResults: boolean;
  userAnswer: number | null;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  onAnswer, 
  showResults, 
  userAnswer 
}) => {
  const handleSelectOption = (index: number) => {
    if (showResults) return;
    onAnswer(index === question.correctAnswer);
  };
  
  const getOptionClass = (index: number) => {
    if (!showResults) {
      return userAnswer === index 
        ? "border-blue-500 bg-blue-50" 
        : "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
    }
    
    if (index === question.correctAnswer) {
      return "border-green-500 bg-green-50";
    }
    
    if (userAnswer === index && index !== question.correctAnswer) {
      return "border-red-500 bg-red-50";
    }
    
    return "border-gray-200";
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 my-6">
      <h3 className="text-xl font-bold text-blue-900 mb-4">{question.question}</h3>
      
      {question.image && (
        <img 
          src={question.image} 
          alt={question.question}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.98 }}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${getOptionClass(index)}`}
            onClick={() => handleSelectOption(index)}
          >
            <div className="flex items-center">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                userAnswer === index ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
              }`}>
                {userAnswer === index && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="text-lg">{option}</span>
              
              {showResults && index === question.correctAnswer && (
                <Check className="ml-auto text-green-500 h-6 w-6" />
              )}
              
              {showResults && userAnswer === index && index !== question.correctAnswer && (
                <X className="ml-auto text-red-500 h-6 w-6" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {showResults && (
        <div className={`mt-4 p-4 rounded-lg ${
          userAnswer === question.correctAnswer 
            ? "bg-green-100 border border-green-200" 
            : "bg-red-100 border border-red-200"
        }`}>
          <p className="font-medium">
            {userAnswer === question.correctAnswer 
              ? "Correct!" 
              : "Incorrect"
            }
          </p>
          <p className="mt-1">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion