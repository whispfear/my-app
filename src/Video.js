import React from 'react';

const Video = ({ video }) => (
    <div className="video-container">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <video controls width="600">
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
);

export default Video;
