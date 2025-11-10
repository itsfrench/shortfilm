'use client';

import { useState, useRef, useEffect } from 'react';

interface SwipeCardProps {
  imageUrl: string;
  onSwipe: (direction: 'left' | 'right') => void;
}

export default function SwipeCard({ imageUrl, onSwipe }: SwipeCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [showIcon, setShowIcon] = useState<'heart' | 'x' | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const SWIPE_THRESHOLD = 100; // pixels from center to trigger swipe

  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setStartPos({ x: clientX - position.x, y: clientY - position.y });
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;

    const newX = clientX - startPos.x;
    const newY = clientY - startPos.y;
    
    setPosition({ x: newX, y: newY });

    // Show icon when past threshold
    if (Math.abs(newX) > SWIPE_THRESHOLD) {
      setShowIcon(newX > 0 ? 'heart' : 'x');
    } else {
      setShowIcon(null);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);

    // Check if swipe was completed
    if (Math.abs(position.x) > SWIPE_THRESHOLD) {
      const direction = position.x > 0 ? 'right' : 'left';
      
      // Animate card off screen
      setPosition({ 
        x: position.x > 0 ? 1000 : -1000, 
        y: position.y 
      });

      // Call onSwipe after animation
      setTimeout(() => {
        onSwipe(direction);
        setPosition({ x: 0, y: 0 });
        setShowIcon(null);
      }, 300);
    } else {
      // Reset position if swipe not completed
      setPosition({ x: 0, y: 0 });
      setShowIcon(null);
    }
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX, e.clientY);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        const newX = e.clientX - startPos.x;
        const newY = e.clientY - startPos.y;
        
        setPosition({ x: newX, y: newY });

        // Show icon when past threshold
        if (Math.abs(newX) > SWIPE_THRESHOLD) {
          setShowIcon(newX > 0 ? 'heart' : 'x');
        } else {
          setShowIcon(null);
        }
      };

      const handleGlobalMouseUp = () => {
        setIsDragging(false);

        // Check if swipe was completed
        setPosition((currentPosition) => {
          if (Math.abs(currentPosition.x) > SWIPE_THRESHOLD) {
            const direction = currentPosition.x > 0 ? 'right' : 'left';
            
            // Animate card off screen
            const newPos = { 
              x: currentPosition.x > 0 ? 1000 : -1000, 
              y: currentPosition.y 
            };

            // Call onSwipe after animation
            setTimeout(() => {
              onSwipe(direction);
              setPosition({ x: 0, y: 0 });
              setShowIcon(null);
            }, 300);

            return newPos;
          } else {
            // Reset position if swipe not completed
            setShowIcon(null);
            return { x: 0, y: 0 };
          }
        });
      };

      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleGlobalMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove);
        window.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [isDragging, startPos, onSwipe]);

  const rotation = position.x * 0.1; // Slight rotation based on horizontal position

  return (
    <div
      ref={cardRef}
      className="relative w-full h-full cursor-grab active:cursor-grabbing touch-none select-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
        transition: isDragging ? 'none' : 'transform 0.3s ease-out',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Card */}
      <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center relative">
          {/* Placeholder image */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            {imageUrl}
          </div>
        </div>
      </div>

      {/* Overlay icons */}
      {showIcon === 'heart' && (
        <div className="absolute top-8 right-8 bg-green-500 text-white p-6 rounded-full text-5xl font-bold border-4 border-white shadow-lg transform rotate-12">
          ❤️
        </div>
      )}
      {showIcon === 'x' && (
        <div className="absolute top-8 left-8 bg-red-500 text-white p-6 rounded-full text-5xl font-bold border-4 border-white shadow-lg transform -rotate-12">
          ✕
        </div>
      )}
    </div>
  );
}
