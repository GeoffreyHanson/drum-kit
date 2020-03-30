import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const DrumPad = (props) => {
  const {
    letter, sound, audio, setDisplayKey,
  } = props;

  const audioRef = useRef(null);

  return (
    <div className="drum-pad">
      <KeyboardEventHandler
        handleKeys={[letter]}
        onKeyEvent={() => {
          setDisplayKey(sound);
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }}
      />
      <div>{letter}</div>
      <span className="sound">{sound}</span>
      <audio
        className="clip"
        id={letter}
        src={audio}
        ref={audioRef}
      />
    </div>
  );
};

DrumPad.propTypes = {
  letter: PropTypes.string,
  sound: PropTypes.string,
  audio: PropTypes.string,
  setDisplayKey: PropTypes.func,
};

DrumPad.defaultProps = {
  letter: '',
  sound: '',
  audio: '',
  setDisplayKey: null,
};

export default DrumPad;
