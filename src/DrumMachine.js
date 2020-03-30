import React, { useState } from 'react';
import './DrumMachine.css';
import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.wav';
import openhat from './sounds/openhat.wav';
import boom from './sounds/boom.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tom from './sounds/tom.wav';
import tink from './sounds/tink.wav';

import Display from './components/Display/Display';
import DrumPad from './components/DrumPad/DrumPad';

const DrumMachine = () => {
  const [displayKey, setDisplayKey] = useState(null);
  const keys = [
    {
      letter: 'Q', // For display on each key
      sound: 'clap', // For identifying/displaying the sound
      audio: clap,
    },
    {
      letter: 'W',
      sound: 'hihat',
      audio: hihat,
    },
    {
      letter: 'E',
      sound: 'kick',
      audio: kick,
    },
    {
      letter: 'A',
      sound: 'openhat',
      audio: openhat,
    },
    {
      letter: 'S',
      sound: 'boom',
      audio: boom,
    },
    {
      letter: 'D',
      sound: 'ride',
      audio: ride,
    },
    {
      letter: 'Z',
      sound: 'snare',
      audio: snare,
    },
    {
      letter: 'X',
      sound: 'tom',
      audio: tom,
    },
    {
      letter: 'C',
      sound: 'tink',
      audio: tink,
    },
  ];

  return (
    <div id="drum-machine" className="drum-machine">
      <Display
        displayKey={displayKey}
      />
      <div className="drum-pads">
        {keys.map((key) => {
          const { letter, sound, audio } = key;
          return (
          // Deconstruct further?
            <DrumPad
              key={letter}
              letter={letter}
              sound={sound}
              audio={audio}
              setDisplayKey={setDisplayKey}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DrumMachine;
