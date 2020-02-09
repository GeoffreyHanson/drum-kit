import React from 'react';

const DrumPad = (props) => {
  const { key, letter, sound } = props;
  return (
  <div data-key={key} class="key">
    <kdb>{letter}</kdb>
    <span className="sound">{sound}</span>
  </div>
  );
};

const Display = () => {
  const placeholder;
  return (
  <div id="display">

  </div>
  );
};

const DrumMachine = () => {
  state = {
    keys: [
      {
        key: 65,
        letter: 'A',
        sound: 'clap',
      }
    ]
  }
  const placeholder;
  return (
    <div id="drum-machine" className="drum-machine">
      
    </div>
  );
}

export default DrumMachine;
