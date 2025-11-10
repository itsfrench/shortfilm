'use client';

import { useState } from 'react';
import SwipeCard from './components/SwipeCard';

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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4">
        {/* App Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            flame
          </h1>
          <p className="text-gray-600 mt-2">Swipe right to like, left to pass</p>
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
        <div className="mt-8 text-center text-gray-600">
          <p>Cards swiped: {swipeCount}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-6">
          <button
            onClick={() => handleSwipe('left')}
            className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-red-500 text-3xl hover:scale-110 transition-transform active:scale-95"
            aria-label="Pass"
          >
            ✕
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-green-500 text-3xl hover:scale-110 transition-transform active:scale-95"
            aria-label="Like"
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
}

