export default function Loading() {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto">
         
          <div className="bg-white shadow rounded-lg mb-6 p-4">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse" />
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4" />
                <div className="h-3 bg-gray-200 rounded animate-pulse w-1/5" />
                <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
              </div>
            </div>
            <div className="flex gap-4 mt-4 text-sm">
              <div className="h-3 bg-gray-200 rounded animate-pulse w-24" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-24" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-24" />
            </div>
          </div>
  
         
          <div className="bg-white shadow rounded-lg mb-6 p-4">
            <div className="h-5 bg-gray-200 rounded animate-pulse w-24 mb-4" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
                  <div className="flex justify-between">
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-8" />
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-8" />
                  </div>
                  <div className="flex justify-between">
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-8" />
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
  
        
          <div className="bg-white shadow rounded-lg p-4">
            <div className="h-5 bg-gray-200 rounded animate-pulse w-24 mb-4" />
            <div className="space-y-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-video bg-gray-200 rounded-lg animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4" />
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-2 bg-gray-200 rounded animate-pulse w-16" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}