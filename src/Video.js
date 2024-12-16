import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ video }) => {
  const isYouTube = ReactPlayer.canPlay(video.url);

  return (
    <div className="video-container">
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      {isYouTube ? (
        <ReactPlayer url={video.url} controls width="600px" />
      ) : (
        <video controls width="600">
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Video;