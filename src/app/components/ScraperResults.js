'use client';
import { Briefcase, Building, ExternalLink } from 'lucide-react';

export default function ScraperResults({ results, loading, error }) {
  if (loading) {
    return (
<<<<<<< HEAD:src/app/components/ScraperResults.jsx
      <div role='loading' className="w-full max-w-3xl mt-8 flex justify-center">
=======
      <div role="loading" className="w-full max-w-3xl mt-8 flex justify-center">
>>>>>>> f7c69cd8c6792c17fc0e04ee6f2d787f46c958a8:src/app/components/ScraperResults.js
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-100 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-3xl mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mt-8">
      {results.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Scraped Job Listings
          </h2>
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                      {result.jobTitle}
                    </h3>
                    <p className="text-gray-600 mt-2 flex items-center gap-2">
                      <Building className="w-5 h-5 text-gray-400" />
                      {result.companyName}
                    </p>
                  </div>
                  {result.url && (
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-blue-600 transition"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}