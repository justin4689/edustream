import React from 'react';

// Typage du composant pour correspondre aux données loguées
export type Video = {
  id: number;
  title: string;
  slug: string;
  category: string;
  thumbnail?: string | null;
  videoUrl: string;
  description?: string | null;
  createdAt?: string | null;
};

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="aspect-video mb-4">
        <iframe
          className="w-full h-full rounded"
          src={video.videoUrl}
          allowFullScreen
        />
      </div>
      <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
      <p className="text-gray-700 mb-2">{video.description}</p>
      <p className="text-sm text-gray-500">Catégorie : {video.category}</p>
    </div>
  );
};

export default VideoCard;
