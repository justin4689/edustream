// app/page.tsx

import db from '../db';
import { videos } from '../db/schema';
import HomeClient from './HomeClient';

export default async function Home() {
  const videoList = await db.select().from(videos);
  return <HomeClient videoList={videoList} />;
}
