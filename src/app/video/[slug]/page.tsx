    // app/video/[slug]/page.tsx
import React from 'react';
import db from '../../../db';
import { videos } from '../../../db/schema';
import { eq } from 'drizzle-orm';

import Link from 'next/link';
import VideoCard, { Video } from '../../../../components/VideoCard';

export default async function VideoPage({ params }: { params: { slug: string } }) {
  // Récupère la vidéo principale
  const result = await db.select().from(videos).where(eq(videos.slug, params.slug));
  const video = result[0];

  if (!video) {
    return <div className="p-6">Video not found</div>;
  }

  // Récupère les vidéos de la même catégorie (hors vidéo courante)
  const suggestions = await db
    .select()
    .from(videos)
    .where(eq(videos.category, video.category));
  const relatedVideos: Video[] = suggestions.filter(v => v.slug !== video.slug);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Partie principale */}
      <div className="flex-1 min-w-0">
        <div className="aspect-video rounded overflow-hidden shadow mb-4 bg-black">
          <iframe
            className="w-full h-full"
            src={video.videoUrl}
            allowFullScreen
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
        <p className="text-gray-700 mb-4">{video.description}</p>
        <p className="text-sm text-gray-500 mb-2">Catégorie : {video.category}</p>
      </div>
      {/* Suggestions */}
      <aside className="w-full md:w-80 flex-shrink-0">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Vidéos similaires</h2>
        <div className="flex flex-col gap-4">
          {relatedVideos.length === 0 && (
            <div className="text-gray-400 text-sm">Aucune autre vidéo dans cette catégorie.</div>
          )}
          {relatedVideos.map(v => (
            <Link key={v.id} href={`/video/${v.slug}`} className="flex gap-3 items-center rounded hover:bg-gray-100 transition p-2">
              {v.thumbnail && (
                <iframe src={v.videoUrl} className="w-24 h-14 object-cover rounded" />
              )}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{v.title}</div>
                <div className="text-xs text-gray-500 truncate">{v.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}

