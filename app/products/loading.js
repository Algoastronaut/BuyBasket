'use client';

export default function Loading() {
  return (
    <div className="space-y-8">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8 animate-pulse">
        <div className="max-w-2xl mx-auto text-center">
          <div className="h-10 w-3/4 bg-white/20 rounded mb-4 mx-auto"></div>
          <div className="h-6 w-2/3 bg-white/20 rounded mx-auto"></div>
        </div>
      </div>

      {/* Categories Filter Skeleton */}
      <div className="flex overflow-x-auto pb-4 mb-6 gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="h-10 w-32 bg-gray-200 rounded-full animate-pulse"
          ></div>
        ))}
      </div>

      {/* Products Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse"
          >
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6 space-y-4">
              <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
              <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
              <div className="h-12 w-full bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 