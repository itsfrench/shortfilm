import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            FELLAS Film App
          </h1>
          <p className="text-gray-600">
            Directory for film assets. 
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/swipe"
            className="block w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-4 px-6 rounded-lg text-center transition duration-200 shadow-md"
          >
            Swipe
          </Link>

          <Link
            href="/profile"
            className="block w-full bg-purple-400 hover:bg-purple-500 text-white font-semibold py-4 px-6 rounded-lg text-center transition duration-200 shadow-md"
          >
            Profile
          </Link>

          <Link
            href="/xxx"
            className="block w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-lg text-center transition duration-200 shadow-md"
          >
            XXX
          </Link>
        </div>
      </div>
    </div>
  );
}