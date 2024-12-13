import React from 'react';

const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map(video => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <video width="320" height="240" controls>
            <source src={process.env.PUBLIC_URL + video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoList;