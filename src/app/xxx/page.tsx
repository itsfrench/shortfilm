import Image from 'next/image';

const suggestedVideos = [
  {
    id: 0,
    title: "Roommates Get a Little Too Cozy on Movie Night",
  },
  {
    id: 1,
    title: "Sunbathing Beauty Knows Everyone’s Watching Her",
  },
  {
    id: 2,
    title: "Private Spa Session Turns... Extremely Relaxing",
  },
  {
    id: 3,
    title: "Co-Op Mode Gets Heated When the Bet Gets Spicy",
  },
  {
    id: 4,
    title: "Flexible Girl Shows Off More Than Just Yoga Skills",
  },
  {
    id: 5,
    title: "Vacation Heatwave: Beach Make-Out Session Goes Too Far",
  },
];


export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <header className="bg-red-600 border-b border-gray-700 p-4">
        <div className="max-w-[1800px] mx-auto flex items-center gap-4">
          {/* Hamburger Menu */}
          <button className="p-2 hover:bg-gray-700 rounded">
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
          
          {/* Logo */}
          <div className="w-24 h-8 relative">
            <Image 
              src="/Exxed/logo.png" 
              alt="Logo" 
              fill 
              className="object-contain"
            />
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-700 text-white px-4 py-2 pr-12 rounded-full border border-gray-600 focus:outline-none focus:border-red-900"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-600 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="flex gap-6">
          {/* Left Section - Video and Details (2/3) */}
          <div className="flex-[2]">
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden mb-4">
              <video controls playsInline className="w-full rounded" poster="/Exxed/thumbnails/brazthumb.png">
  <source src="https://whvsmd2xl0klgnqw.public.blob.vercel-storage.com/braz.mp4" type="video/mp4" />
</video>
            </div>

            {/* Video Title */}
            <h1 className="text-2xl font-semibold mb-2">Apartment Fix Turns Surprise F*ck With Ex-Girlfriend Lily Tiger</h1>

            {/* Comments Section */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Comments</h2>
              
              <div className="space-y-6">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
                  <div>
  <p className="font-semibold">DeepFocus99 <span className="text-gray-400 font-normal text-sm">2 days ago</span></p>
  <p className="text-gray-300 mt-1">man she is unreal… couldn’t look away for a second</p>
</div>
</div>

<div className="flex gap-3">
  <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
  <div>
    <p className="font-semibold">ThirstLord <span className="text-gray-400 font-normal text-sm">1 week ago</span></p>
    <p className="text-gray-300 mt-1">her body is insane, i replayed this like five times</p>
  </div>
</div>

<div className="flex gap-3">
  <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
  <div>
    <p className="font-semibold">LateNightWatcher <span className="text-gray-400 font-normal text-sm">3 weeks ago</span></p>
    <p className="text-gray-300 mt-1">whoever cast her knew exactly what they were doing, she’s too damn hot</p>
  </div>
</div>

              </div>
            </div>
          </div>
{/* Right Section - Suggested Videos (1/3) */}
<div className="flex-[1]">
  <h2 className="text-lg font-semibold mb-4">Suggested Videos</h2>
  <div className="space-y-3">
    {suggestedVideos.map((video) => (
      <div
        key={video.id}
        className="flex gap-2 cursor-pointer hover:bg-gray-800 p-2 rounded"
      >
        <div className="w-40 h-24 bg-gray-700 rounded flex-shrink-0 overflow-hidden">
          <Image
  src={`/Exxed/thumbnails/${video.id}.jpg`}
  alt={video.title}
  width={160}
  height={96}
  className="w-full h-full object-cover"
/>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm line-clamp-2 mb-1">
            {video.title}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  );
}