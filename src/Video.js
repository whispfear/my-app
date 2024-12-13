import React from 'react';

const Video = ({ video }) => (
    <div>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
    </div>
);

export default Video;
