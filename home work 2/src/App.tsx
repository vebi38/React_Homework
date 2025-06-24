import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <BlogProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BlogProvider>
    </BrowserRouter>
  );
}

export default App;
