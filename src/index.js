import React from 'react';
import { createRoot } from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import App from './App';
import VideoList from './VideoList';
import reportWebVitals from './reportWebVitals';

const containerRoot = document.getElementById('root'); 
const root = createRoot(containerRoot); 
root.render(<p>Just for test</p>);

const containerTest = document.getElementById('test'); 
const test = createRoot(containerTest); 
test.render(<ul>
<li>Text 1</li>
<li>Text 2</li>
<li>Text 3</li>
</ul>)

const containerVideo = document.getElementById('video');
const video = createRoot(containerVideo);
const videos = [
  { id: 1, title: 'First Video', description: 'This is the first video.', url: '/Green_Screen_Sample.mp4' },
  { id: 2, title: 'Second Video', description: 'This is the second video.', url: '/test_sample.mp4' }
];
video.render(<VideoList videos={videos} />);

reportWebVitals();
