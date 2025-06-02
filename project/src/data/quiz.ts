export type QuizQuestion = {
  id: number;
  question: string;
  image?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does this traffic signal indicate?",
    image: "https://images.pexels.com/photos/1727828/pexels-photo-1727828.jpeg",
    options: [
      "Keep driving",
      "Stop completely",
      "Slow down only",
      "Speed up to cross"
    ],
    correctAnswer: 1,
    explanation: "A red traffic light means you must stop completely and wait until it turns green."
  },
  {
    id: 2,
    question: "Where should pedestrians cross a busy road?",
    image: "https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg",
    options: [
      "Anywhere on the road",
      "At zebra crossing",
      "Between moving vehicles",
      "When traffic is less"
    ],
    correctAnswer: 1,
    explanation: "Always use zebra crossings to safely cross roads. Wait for vehicles to stop before crossing."
  },
  {
    id: 3,
    question: "What safety gear must two-wheeler riders wear?",
    image: "https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg",
    options: [
      "Cap",
      "ISI marked helmet",
      "Any helmet",
      "No helmet needed"
    ],
    correctAnswer: 1,
    explanation: "Always wear an ISI marked helmet while riding two-wheelers. It's both legal requirement and essential for safety."
  },
  {
    id: 4,
    question: "What does a yellow traffic light mean?",
    image: "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg",
    options: [
      "Speed up quickly",
      "Stop if safe to do so",
      "Keep driving normally",
      "Start your vehicle"
    ],
    correctAnswer: 1,
    explanation: "Yellow light means prepare to stop. Slow down and stop if it's safe to do so."
  },
  {
    id: 5,
    question: "What should you do at a railway crossing when the gate is closing?",
    image: "https://images.pexels.com/photos/208557/pexels-photo-208557.jpeg",
    options: [
      "Try to rush through quickly",
      "Wait behind the gate",
      "Go around the gate",
      "Honk continuously"
    ],
    correctAnswer: 1,
    explanation: "Never try to rush through or go around closing railway gates. Always wait patiently for the train to pass."
  },
  {
    id: 6,
    question: "When should you use high beam headlights in city areas?",
    image: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg",
    options: [
      "Always at night",
      "Never in city areas",
      "Only on weekends",
      "When no one is around"
    ],
    correctAnswer: 1,
    explanation: "Don't use high beam in city areas as it can blind other drivers. Use low beam instead."
  },
  {
    id: 7,
    question: "What does this road marking mean?",
    image: "https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg",
    options: [
      "Parking area",
      "No overtaking zone",
      "Speed up zone",
      "Construction ahead"
    ],
    correctAnswer: 1,
    explanation: "Solid lines indicate no overtaking zones. Wait until broken lines appear before overtaking."
  },
  {
    id: 8,
    question: "When should you use the horn in residential areas?",
    image: "https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg",
    options: [
      "Continuously",
      "Only when necessary",
      "Never",
      "All the time"
    ],
    correctAnswer: 1,
    explanation: "Use horn only when necessary to warn others. Avoid unnecessary honking in residential areas."
  },
  {
    id: 9,
    question: "What should pedestrians do if there's no footpath?",
    image: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg",
    options: [
      "Walk in the middle of the road",
      "Walk facing oncoming traffic",
      "Walk with traffic flow",
      "Run quickly across"
    ],
    correctAnswer: 1,
    explanation: "Walk facing oncoming traffic on the right side of the road so you can see approaching vehicles."
  },
  {
    id: 10,
    question: "What should you check before crossing a road?",
    image: "https://images.pexels.com/photos/1770734/pexels-photo-1770734.jpeg",
    options: [
      "Just look right",
      "Look left-right-left",
      "Only look left",
      "No need to look"
    ],
    correctAnswer: 1,
    explanation: "Always look left, then right, then left again before crossing. Keep watching while crossing."
  }
];