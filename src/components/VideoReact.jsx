// File: VideoReact.jsx
import React from 'react';
import { Player } from 'video-react';
import "../components/video-react.css";

export default props => {
  return (
    <Player
        className='player'
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};

// eof
