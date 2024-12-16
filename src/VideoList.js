import React from 'react';
import Video from './Video';

const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map(video => (
        <Video key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;