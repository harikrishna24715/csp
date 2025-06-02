import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Gamepad2, Trophy } from 'lucide-react';
import CrossingGame from '../components/games/CrossingGame';
import SignMatchGame from '../components/games/SignMatchGame';

const GamesPage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  
  const games = [
    {
      id: 'crossing',
      title: 'Safe Crossing',
      description: 'Help the character cross the road safely while following traffic rules',
      icon: <Car className="h-12 w-12 text-blue-500" />,
      component: CrossingGame
    },
    {
      id: 'signs',
      title: 'Traffic Sign Match',
      description: 'Match the traffic signs with their correct meanings',
      icon: <Trophy className="h-12 w-12 text-yellow-500" />,
      component: SignMatchGame
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Road Safety Games</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Learn road safety rules through fun and interactive games!
        </p>
      </div>

      {!selectedGame ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game) => (
            <motion.div
              key={game.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedGame(game.id)}
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    {game.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-blue-900 mb-2">{game.title}</h3>
                <p className="text-center text-gray-600 mb-4">{game.description}</p>
                <div className="flex justify-center">
                  <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors">
                    Play Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedGame(null)}
            className="mb-6 inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Gamepad2 className="h-5 w-5 mr-2" />
            Back to Games
          </button>
          
          {games.find(game => game.id === selectedGame)?.component && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {React.createElement(games.find(game => game.id === selectedGame)!.component)}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default GamesPage;