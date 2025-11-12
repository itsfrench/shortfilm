'use client';
import { useState } from 'react';
import Image from 'next/image';



export default function ProfilePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample data - replace with actual user data
  const images = [
    '/Jenna/0.jpeg',
    '/Jenna/1.jpeg',
    '/Jenna/2.jpeg',
    '/Jenna/3.jpeg',
    '/Jenna/4.jpeg',
  ];

  const name = 'Jenna';
  const age = 28;
  const bio1 =
    `Sagittarius`
  const bio2 = `   
    Social justice, matcha, bell hooks :)`
  const bio3 = `
    Dating apps are cringe but maybe you can be the Zohran to my Rama? 👏`;

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (direction === 'right' && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Image Section - Top Half */}
      <div 
        className="relative h-[50vh] bg-gray-200 touch-pan-y"
        onTouchStart={(e) => {
          const touchStart = e.touches[0].clientX;
          e.currentTarget.dataset.touchStart = touchStart.toString();
        }}
        onTouchEnd={(e) => {
          const touchStart = parseFloat(e.currentTarget.dataset.touchStart || '0');
          const touchEnd = e.changedTouches[0].clientX;
          const diff = touchStart - touchEnd;
          
          // Swipe threshold of 50px
          if (Math.abs(diff) > 50) {
            if (diff > 0) {
              // Swiped left, go to next image
              handleSwipe('right');
            } else {
              // Swiped right, go to previous image
              handleSwipe('left');
            }
          }
        }}
      >
        <Image
          src={images[currentImageIndex]}
          alt={`Profile photo ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          priority
        />

        {/* Swipe Buttons */}
        <button
          onClick={() => handleSwipe('left')}
          disabled={currentImageIndex === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 shadow-lg ${
            currentImageIndex === 0 ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={() => handleSwipe('right')}
          disabled={currentImageIndex === images.length - 1}
          className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 shadow-lg ${
            currentImageIndex === images.length - 1
              ? 'opacity-70 cursor-not-allowed'
              : 'hover:bg-gray-100'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Profile Info Section - Bottom Half */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {name}, {age}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span className="text-sm text-gray-500">Upper West Side, NY</span>
        </div>
        <div className="mt-3 mb-3 h-px bg-gray-300"></div>
        <p className="mt-4 pt-2 text-gray-700 leading-relaxed">{bio1}</p>
        <p className="mt-2 pt-0.5 text-gray-700 leading-relaxed">{bio2}</p>
        <p className="mt-2 pt-0.5 text-gray-700 leading-relaxed">{bio3 }</p>
      </div>
    </div>
  );
}