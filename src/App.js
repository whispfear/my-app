import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/HomePage';
import VideoList from './components/VideoList';
import Footer from './components/Footer';

const App = () => {
  const videos = [
    { id: 1, 
      title: 'First Video', 
      description: 'This is the first video.', 
      url: '/videos/Green_Screen_Sample.mp4' },
    { id: 2, 
      title: 'Second Video', 
      description: 'This is the second video.', 
      url: '/videos/test_sample.mp4' },
    { id: 3, 
      title: 'Third Video', 
      description: 'This is the third video.', 
      url: '/videos/test.mp4' },
    { id: 4, 
      title: 'Video from Youtube', 
      description: 'Learn React JS - Full Beginners Tutorial (2024) & Practice Projects', 
      url: 'https://www.youtube.com/watch?v=x4rFhThSX04' }
  ];

  return (
    <Router>
      <div>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<VideoList videos={videos} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;