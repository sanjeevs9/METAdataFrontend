'use client';

import { useSession } from "next-auth/react";
import FacebookPageCard from "../../components/FacebookPageCard";
import { useEffect, useState } from "react";
import { fetchPages } from "@/lib/functions";
import type { FacebookPage } from "@/lib/types";



export default function FacebookPage() {
  const { data: session, status } = useSession();
  const [pages, setPages] = useState<FacebookPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session) {
      fetchPages(setPages, setError, setLoading);
    }
  }, [session]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-12 bg-white/50 backdrop-blur-sm rounded-xl px-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading pages...</p>
            </div>
      </div>
    );
  }

  if (!session) {
    return <>null</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#3b82f6_1px,transparent_0)] [background-size:40px_40px]" />
      </div>
  
      <div className="max-w-7xl mx-auto p-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Your Facebook Pages</h1>
          <p className="text-lg text-gray-600">Select a page to view more details</p>
        </div>
  
        <div className="flex items-center justify-center min-h-[50vh]">
          {loading ? (
            <div className="text-center py-12 bg-white/50 backdrop-blur-sm rounded-xl px-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading pages...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 bg-white/50 backdrop-blur-sm rounded-xl px-8">
              <p className="text-red-500">{error}</p>
            </div>
          ) : pages.length === 0 ? (
            <div className="text-center py-12 bg-white/50 backdrop-blur-sm rounded-xl px-8">
              <p className="text-gray-500">No Facebook pages found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {pages.map((page: FacebookPage) => (
                <FacebookPageCard
                  key={page.id}
                  {...page}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}