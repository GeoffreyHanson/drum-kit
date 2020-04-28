import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import styles from './DrumPad.module.css';

// Logic for individual pads on the drum kit.
const DrumPad = (props) => {
  const {
    letter, sound, audio, setDisplayKey,
  } = props;

  // Ref for playing sounds
  const audioRef = useRef(null);

  return (
    <div
      className={styles.drumpad}
    >
      {/* Attaching a keyboard event handler component for each element. */}
      <KeyboardEventHandler
        handleKeys={[letter]}
        onKeyEvent={() => {
          setDisplayKey(sound);
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }}
      />
      <div className={styles.key}>{letter}</div>
      <div className="sound">{sound}</div>
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
