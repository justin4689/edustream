"use client";
import React, { useState } from "react";
import Header from "../../components/Header";
import VideoCard from "../../components/VideoCard";
import Link from "next/link";

interface HomeClientProps {
  videoList: any[];
}

const VIDEOS_PER_PAGE = 6;

const HomeClient: React.FC<HomeClientProps> = ({ videoList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const filteredVideos = videoList.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);
  const startIdx = (page - 1) * VIDEOS_PER_PAGE;
  const endIdx = startIdx + VIDEOS_PER_PAGE;
  const paginatedVideos = filteredVideos.slice(startIdx, endIdx);

  // Reset to page 1 if searchTerm changes
  React.useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  return (
    <>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 min-h-[400px]">
        {paginatedVideos.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-lg mt-10">
            Aucune vidéo trouvée.
          </div>
        ) : (
          paginatedVideos.map((video) => (
            <Link
              href={`/video/${video.slug}`}
              key={video.id}
              className="hover:scale-105 transition-transform"
            >
              <VideoCard key={video.id} video={video} />
            </Link>
          ))
        )}
      </main>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Précédent
          </button>
          <span className="text-gray-700">
            Page {page} sur {totalPages}
          </span>
          <button
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Suivant
          </button>
        </div>
      )}
    </>
  );
};

export default HomeClient;
