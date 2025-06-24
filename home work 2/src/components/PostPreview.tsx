import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../context/BlogContext';

export default function PostPreview({ post }: { post: Post }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Link to={\`/posts/\${post.id}\`}><h2>{post.title}</h2></Link>
      <small>By {post.author}</small>
    </div>
  );
}
