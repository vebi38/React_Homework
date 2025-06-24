import React from 'react';
import { useBlog } from '../context/BlogContext';
import PostPreview from '../components/PostPreview';

export default function HomePage() {
  const { posts } = useBlog();
  return (
    <main style={{ padding: '1rem' }}>
      <h1>All Posts</h1>
      {posts.map(p => <PostPreview key={p.id} post={p} />)}
    </main>
  );
}
