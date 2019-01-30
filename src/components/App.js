import React from 'react';
import ColorSelector from './ColorSelector';
import Resistance from './Resistance';

const App = () => {
  return (
    <div className="ui container">
      <Resistance/>
      <ColorSelector/>
    </div>
  );
}

export default App;
