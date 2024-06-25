import './style.css'
import React, { useEffect } from 'react';

const DrumKeys = ({className, id, playAudio, text, audio}) => {
  return (
    <button className={className} id={id} onClick={() => playAudio(text, id)} >
    <audio className="clip" id={text} controls src={audio} preload='none'></audio>
    {text}
    </button>
  )
}

export default DrumKeys