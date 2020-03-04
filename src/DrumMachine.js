import React, { useState, useRef } from 'react';
import './DrumMachine.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.wav';
import openhat from './sounds/openhat.wav';
import boom from './sounds/boom.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tom from './sounds/tom.wav';
import tink from './sounds/tink.wav';

const DrumPad = (props) => {
  const {
    datakey, letter, sound, audio,
  } = props;

  const audioRef = useRef(null);

  // Playing audio

  // Restart audio clip?

  // play audio
  // audio.play();

  return (
    <div data-key={datakey} className="drum-pad">
      <KeyboardEventHandler
        handleKeys={[letter]}
        onKeyEvent={() => {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }}
      />
      <div>{letter}</div>
      <span className="sound">{sound}</span>
      <audio
        className="clip"
        id={letter}
        data-key={datakey}
        src={audio}
        ref={audioRef}
      />
    </div>
  );
};

const Display = ({ displayKey }) => (
  <div id="display">
    Display
    {displayKey}
  </div>
);
const DrumMachine = () => {
  const [displayKey, setDisplayKey] = useState(null);
  const keys = [
    {
      letter: 'Q', // For display on each key
      datakey: 81, // For identifying the key for the computer
      sound: 'clap', // For identifying/displaying the sound
      audio: clap,
    },
    {
      letter: 'W',
      datakey: 87,
      sound: 'hihat',
      audio: hihat,
    },
    {
      letter: 'E',
      datakey: 69,
      sound: 'kick',
      audio: kick,
    },
    {
      letter: 'A',
      datakey: 65,
      sound: 'openhat',
      audio: openhat,
    },
    {
      letter: 'S',
      datakey: 83,
      sound: 'boom',
      audio: boom,
    },
    {
      letter: 'D',
      datakey: 68,
      sound: 'ride',
      audio: ride,
    },
    {
      letter: 'Z',
      datakey: 90,
      sound: 'snare',
      audio: snare,
    },
    {
      letter: 'X',
      datakey: 88,
      sound: 'tom',
      audio: tom,
    },
    {
      letter: 'C',
      datakey: 67,
      sound: 'tink',
      audio: tink,
    },
  ];

  function playSound(key, e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
  }

  return (
    <div id="drum-machine" className="drum-machine">
      <KeyboardEventHandler
        handleKeys={[
          'Q', 'W', 'E',
          'A', 'S', 'D',
          'Z', 'X', 'C',
        ]}
        // handleKeys={[...'QWEASDZXC']}
      />
      <Display
        displayKey={displayKey}
      />
      <div className="drum-pads">
        {keys.map((key) => (
        // Deconstruct further?
        // let { letter, datakey, sound } = key;
          <DrumPad
            key={key.letter}
            letter={key.letter}
            datakey={key.datakey}
            sound={key.sound}
            audio={key.audio}
          />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
