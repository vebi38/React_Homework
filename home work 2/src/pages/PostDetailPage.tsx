import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { posts } = useBlog();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <main style={{ padding: '1rem' }}>
        <h1>Post Not Found</h1>
        <Link to="/">Back to Posts</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: '1rem' }}>
      <h1>{post.title}</h1>
      <p><em>By {post.author} on {post.createdAt.toLocaleDateString()}</em></p>
      <article>{post.content}</article>
      <Link to="/">← Back to Posts</Link>
    </main>
  );
}
