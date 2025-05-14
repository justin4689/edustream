import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const videos = sqliteTable('videos', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  category: text('category').notNull(),
  thumbnail: text('thumbnail'),
  videoUrl: text('video_url').notNull(),
  description: text('description'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});
