'use client';

import { useState } from 'react';
import Image from 'next/image';
import SwipeCard from '../../components/SwipeCard';


export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [swipeCount, setSwipeCount] = useState(0);
  // Generate placeholder image identifier


  const getProfileText = (index: number) => {
    const names = ["Daisy, 27", "David, 28", "Gaby, 31", "Graham, 42", "Indigo, 28", "Jack, 30", "Joey, 42", "Leo, 30", "Meadow, 25", "Nicholas, 35", "Nick, 31", "Philip, 26"];
    return names[index % names.length];
  }
  
const getCardImage = (index: number) => {
  const profileName = getProfileText(index);
  return `/profiles/${encodeURIComponent(profileName)}.PNG`; 
};
 
  const handleSwipe = (direction: 'left' | 'right') => {
    console.log(`Swiped ${direction}`);
    if (currentImageIndex >= 11) {
      setSwipeCount(0);
      setCurrentImageIndex(0);
      return;
    }
    setSwipeCount(swipeCount + 1);
    setCurrentImageIndex(currentImageIndex + 1);
  };

  return (
    <div className="flex min-h-screen items-start pt-2 justify-center bg-gradient-to-br from-blue-50 to-pink-200">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-6">
        {/* App Header */}
        <div className="relative m-1 flex flex-col items-center">
        
          <Image
            src="/spark.png"
            alt="FELLAS Logo"
            width={100}
            height={50}
            
          />
        
        </div>

        {/* Card Container */}
        <div className="w-full aspect-[3/4] relative">
          <SwipeCard
            key={currentImageIndex}
            imageUrl={getCardImage(currentImageIndex)}
            profileText={getProfileText(currentImageIndex)}
            onSwipe={handleSwipe}
          />
        </div>
      

        {/* Action Buttons */}
        <div className="mt-6 flex gap-6">
          <button
            onClick={() => handleSwipe('left')}
            className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-red-500 text-2xl hover:scale-110 transition-transform active:scale-95"
            aria-label="Pass"
          >
            ✕
          </button>
          <button
            className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-teal-400 text-2xl hover:scale-110 transition-transform active:scale-95"
            aria-label="Star"
          >
            ★
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-green-500 text-2xl hover:scale-110 transition-transform active:scale-95"
            aria-label="Like"
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
}

