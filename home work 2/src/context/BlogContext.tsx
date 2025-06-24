import React, { createContext, useContext, ReactNode } from 'react';

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

interface BlogContextType {
  posts: Post[];
}

const initialPosts: Post[] = [
  {
    id: '1',
    title: 'First Post',
    content: 'Content of the first post...',
    author: 'Alice',
    createdAt: new Date('2025-06-20'),
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'Content of second post...',
    author: 'Bob',
    createdAt: new Date('2025-06-22'),
  },
  {
    id: '3',
    title: 'Third Post',
    content: 'Content of third post...',
    author: 'Carol',
    createdAt: new Date('2025-06-23'),
  },
];

const BlogContext = createContext<BlogContextType>({ posts: [] });

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BlogContext.Provider value={{ posts: initialPosts }}>
      {children}
    </BlogContext.Provider>
  );
};
