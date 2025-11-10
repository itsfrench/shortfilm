'use client';

import { useState } from 'react';
import Image from 'next/image';
import SwipeCard from '../../components/SwipeCard';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [swipeCount, setSwipeCount] = useState(0);
  // Generate placeholder image identifier
  const getPlaceholderImage = (index: number) => {
    return `Photo ${index + 1}`;
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    console.log(`Swiped ${direction}`);
    setSwipeCount(swipeCount + 1);
    setCurrentImageIndex(currentImageIndex + 1);
  };

  return (
    <div className="flex min-h-screen items-start pt-2 justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
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
            imageUrl={getPlaceholderImage(currentImageIndex)}
            onSwipe={handleSwipe}
          />
        </div>

        {/* Stats */}
{/*         
        <div className="mt-8 text-center text-gray-600">
          <p>Cards swiped: {swipeCount}</p>
        </div> */}
      

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

