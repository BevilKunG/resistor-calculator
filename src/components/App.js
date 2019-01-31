import React from 'react';
import ColorSelector from './ColorSelector';
import Resistance from './Resistance';
import Resistor from './Resistor';

const App = () => {
  return (
    <div className="ui container">
      <Resistor/>
      <Resistance/>
      <ColorSelector/>
    </div>
  );
}

export default App;
