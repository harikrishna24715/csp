import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Sign = {
  id: number;
  image: string;
  meaning: string;
};

const signs: Sign[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1727828/pexels-photo-1727828.jpeg',
    meaning: 'Stop completely and check for traffic'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg',
    meaning: 'Pedestrian crossing ahead'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/208557/pexels-photo-208557.jpeg',
    meaning: 'Railway crossing ahead'
  }
];

export default function SignMatchGame() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Match the Traffic Signs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {signs.map((sign) => (
          <motion.div
            key={sign.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={sign.image}
              alt="Traffic Sign"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-800">{sign.meaning}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}