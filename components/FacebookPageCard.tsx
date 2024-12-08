'use client';

import { useRouter } from 'next/navigation';

type FacebookPageProps = {
  name: string;
  category: string;
  id: string;
};

export default function FacebookPageCard({ name, category, id }: FacebookPageProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/facebook/${id}`)}
      className="w-96 bg-white/80  rounded-xl overflow-hidden
        shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
        hover:shadow-lg hover:scale-[1.02] hover:bg-blue-50/30
        cursor-pointer transition-all duration-300 
        transform group"
    >
      {/* Card Header with Icon */}
      <div className="p-8 pb-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{category}</p>
          </div>
          <svg
            className="w-10 h-10 text-blue-500 opacity-70 group-hover:opacity-100 transition-opacity"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="currentColor"
              d="M25.638 48H2.65A2.65 2.65 0 0 1 0 45.35V2.65A2.649 2.649 0 0 1 2.65 0H45.35A2.649 2.649 0 0 1 48 2.65v42.7A2.65 2.65 0 0 1 45.35 48H33.119V29.412h6.24l.934-7.244h-7.174v-4.625c0-2.098.583-3.527 3.59-3.527l3.836-.002V7.535c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.255v7.244h6.255V48Z"
            />
          </svg>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-8 bg-gradient-to-br from-white/50 via-white/30 to-blue-50/30">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Page Details</p>
            <p className="text-base text-gray-700 mt-1">ID: {id}</p>
          </div>
        </div>

        {/* View Details Button */}
        <div className="mt-8">
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg 
            hover:bg-blue-700 
            transition-all duration-300 text-sm font-semibold
            hover:shadow-md"
          >
            View Page Details →
          </button>
        </div>
      </div>
    </div>
  );
}