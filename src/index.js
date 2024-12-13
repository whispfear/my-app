import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VideoList from './VideoList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const test = ReactDOM.createRoot(document.getElementById('test'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
const videos = [
    { id: 1, title: 'First Video', description: 'This is the first video.', url: '../public/Green_Screen_Sample.mp4' },
    { id: 2, title: 'Second Video', description: 'This is the second video.', url: '../public/test_sample.mp4' }
];

ReactDOM.render(<VideoList videos={videos} emptyHeading="No videos available" />, document.getElementById('video'));
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
