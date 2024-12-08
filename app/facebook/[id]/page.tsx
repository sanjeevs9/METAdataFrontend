
import { getServerSession } from 'next-auth';
import type { PageDetail } from '@/lib/types';
import { getPageDetail } from '@/lib/functions';
import { authOptions } from '@/app/api/auth/config';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PageDetail({ params }: PageProps) {
  const session=getServerSession(authOptions);
 
  const {id}  = await params;
  const pageDetail = await getPageDetail(id);
  
  if (!session) {
    return <></>;
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center">
              <img
                src={pageDetail.profile_picture_url}
                alt={pageDetail.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">{pageDetail.name}</h1>
                <p className="text-gray-600">@{pageDetail.username}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">{pageDetail.biography}</p>
            <div className="flex gap-4 mt-4 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                {pageDetail.followers_count.toLocaleString()} followers
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                {pageDetail.follows_count.toLocaleString()} following
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                {pageDetail.media_count.toLocaleString()} posts
              </div>
            </div>
          </div>
        </div>

        {/* Stories Section */}
        {pageDetail.stories.length > 0 && (
          <div className="bg-white shadow rounded-lg mb-6 p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Stories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {pageDetail.stories.map((story) => (
                <div key={story.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                  <div className="relative aspect-square">
                    <img
                      src={story.media_url}
                      alt=""
                    />
                  </div>
                  <div className="p-2 flex justify-between text-xs">
                    
                      <div className="flex items-center">
                        <svg className="w-3 h-3 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                        {story.impressions_count.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                        {story.like_count.toLocaleString()}
                      </div>
                   
              
                      <div className="flex items-center">
                        <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        {story.comments_count.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
                        {story.shares_count.toLocaleString()}
                      </div>
                 
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Media Grid */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Posts</h2>
          <div className="grid grid-cols-1 gap-6">
            {pageDetail.media.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm">
                <div className="relative aspect-video">
                  {item.media_type === 'VIDEO' ? (
                    <div className="relative" style={{ paddingBottom: '150%' }}>
                    <video controls className="absolute top-0 left-0 w-full h-full object-cover">
                      <source className='object-contain' src={item.media_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  ) : (
                    <img
                      src={item.media_url}
                      alt={item.caption || ''}
                    />
                  )}
                </div>
                <div className="p-4">
                  {item.caption && (
                    <p className="text-gray-700 mb-4 whitespace-pre-line">
                      {item.caption}
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 pl-2 pb-1">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                    {item.likes_count.toLocaleString()} likes
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    {item.comments_count.toLocaleString()} comments
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
                    {item.shares_count.toLocaleString()} shares
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                    {item.reach_count.toLocaleString()} reach
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm0 1v10h10V5H5z"></path><path d="M4 12h12v2H4v-2z"></path></svg>
                    {item.saved_count.toLocaleString()} saved
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
