import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import logo from './logo.svg';
import VideoList from './VideoList';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './header';

const containerHeader = document.getElementById('header');
if (containerHeader) { // Check if the container exists
  const header = createRoot(containerHeader);
  header.render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  );
} else {
  console.error('Element with ID "header" not found.');
}

createRoot(document.getElementById('root')).render(
  <section>
    <img src={logo} alt="logo" />
    <p>Just for test</p>
    <ul>
      <li>転ぜクば社題ば達全リケ閣壊ヤマヱ相楽</li>
      <li>せぽ俳部ヒケチ社郎表討賢コネナ専用ウオイ高飛士ふねちよ</li>
      <li>厚集もほきす読2抗設連びゅの増材</li>
    </ul>
  </section>
)

createRoot(document.getElementById('test')).render(
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>30</td>
        <td>New York</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>25</td>
        <td>Los Angeles</td>
      </tr>
      <tr>
        <td>Sam Brown</td>
        <td>22</td>
        <td>Chicago</td>
      </tr>
    </tbody>
  </table>
)

const containerVideo = document.getElementById('video');
const video = createRoot(containerVideo);
const videos = [
  { id: 1, title: 'First Video', description: 'This is the first video.', url: '/videos/Green_Screen_Sample.mp4' },
  { id: 2, title: 'Second Video', description: 'This is the second video.', url: '/videos/test_sample.mp4' }
];
video.render(<VideoList videos={videos} />);

reportWebVitals();
