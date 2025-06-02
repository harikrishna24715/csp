export type Lesson = {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: {
    sections: {
      title: string;
      text: string;
      image?: string;
    }[];
  };
};

export const lessons: Lesson[] = [
  {
    id: "traffic-signs",
    title: "Traffic Signs",
    description: "Learn important road signs to stay safe",
    icon: "traffic-sign",
    content: {
      sections: [
        {
          title: "Stop Sign",
          text: "Always stop completely at a stop sign. Look left, right, and left again before proceeding.",
          image: "https://images.pexels.com/photos/5538101/pexels-photo-5538101.jpeg"
        },
        {
          title: "Yield Sign",
          text: "Slow down and be prepared to stop. Give right of way to vehicles on the other road.",
          image: "https://images.pexels.com/photos/5538099/pexels-photo-5538099.jpeg"
        },
        {
          title: "No Entry Sign",
          text: "Do not enter this road. It may be one-way or closed to traffic.",
          image: "https://images.pexels.com/photos/5538097/pexels-photo-5538097.jpeg"
        },
        {
          title: "Speed Limit Sign",
          text: "This shows the maximum speed allowed on this road. Never drive faster than this limit.",
          image: "https://images.pexels.com/photos/5538095/pexels-photo-5538095.jpeg"
        }
      ]
    }
  },
  {
    id: "pedestrian-safety",
    title: "Pedestrian Safety",
    description: "How to walk safely near roads",
    icon: "walking",
    content: {
      sections: [
        {
          title: "Use Sidewalks",
          text: "Always walk on sidewalks when available. If there is no sidewalk, walk facing traffic as far to the left as possible.",
          image: "https://images.pexels.com/photos/5538093/pexels-photo-5538093.jpeg"
        },
        {
          title: "Crossing Roads",
          text: "Use crosswalks when available. Look left, right, and left again before crossing.",
          image: "https://images.pexels.com/photos/5538091/pexels-photo-5538091.jpeg"
        },
        {
          title: "Be Visible",
          text: "Wear bright or reflective clothing, especially at night. Carry a flashlight in darkness.",
          image: "https://images.pexels.com/photos/5538089/pexels-photo-5538089.jpeg"
        },
        {
          title: "Stay Alert",
          text: "Avoid using phones or headphones while walking near roads. Pay attention to traffic.",
          image: "https://images.pexels.com/photos/5538087/pexels-photo-5538087.jpeg"
        }
      ]
    }
  },
  {
    id: "safety-gear",
    title: "Safety Gear",
    description: "Helmets and seatbelts save lives",
    icon: "helmet",
    content: {
      sections: [
        {
          title: "Wear a Helmet",
          text: "Always wear a helmet when riding a bicycle or motorcycle. It protects your head in case of an accident.",
          image: "https://images.pexels.com/photos/5538085/pexels-photo-5538085.jpeg"
        },
        {
          title: "Seatbelts Save Lives",
          text: "Always wear a seatbelt in a car, even for short trips. Make sure all passengers wear seatbelts too.",
          image: "https://images.pexels.com/photos/5538083/pexels-photo-5538083.jpeg"
        },
        {
          title: "Child Safety",
          text: "Children should use proper car seats or booster seats based on their age, weight, and height.",
          image: "https://images.pexels.com/photos/5538081/pexels-photo-5538081.jpeg"
        },
        {
          title: "Reflective Gear",
          text: "Use reflective clothing or accessories when walking or cycling at night to be more visible to drivers.",
          image: "https://images.pexels.com/photos/5538079/pexels-photo-5538079.jpeg"
        }
      ]
    }
  },
  {
    id: "road-crossing",
    title: "Crossing Roads",
    description: "Learn to cross roads safely",
    icon: "crossroad",
    content: {
      sections: [
        {
          title: "Use Crosswalks",
          text: "Always use crosswalks, pedestrian bridges, or underpasses when available.",
          image: "https://images.pexels.com/photos/5538077/pexels-photo-5538077.jpeg"
        },
        {
          title: "Look Both Ways",
          text: "Look left, right, and left again before crossing any road. Make sure all vehicles have stopped.",
          image: "https://images.pexels.com/photos/5538075/pexels-photo-5538075.jpeg"
        },
        {
          title: "Traffic Signals",
          text: "Only cross when the pedestrian signal shows it's safe to walk. Don't cross on a red light.",
          image: "https://images.pexels.com/photos/5538073/pexels-photo-5538073.jpeg"
        },
        {
          title: "Rural Roads",
          text: "When crossing rural roads with no crosswalks, find a straight stretch with good visibility in both directions.",
          image: "https://images.pexels.com/photos/5538071/pexels-photo-5538071.jpeg"
        }
      ]
    }
  }
];