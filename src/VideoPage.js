import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import VideoList from './VideoList';
import Footer from './Footer';

const HomePage = () => {
  const videos = [
    { id: 1, title: 'First Video', description: 'This is the first video.', url: '/videos/Green_Screen_Sample.mp4' },
    { id: 2, title: 'Second Video', description: 'This is the second video.', url: '/videos/test_sample.mp4' },
    { id: 3, title: 'Third Video', description: 'This is the third video.', url: '/videos/test.mp4' }
  ];

  return (
    <Router>
      <div>
        <Header />
        <main className="container">
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

export default HomePage;
