import React from 'react';
import SelectorOne from './SelectorOne';
import SelectorTwo from './SelectorTwo';
import SelectorThree from './SelectorThree';
import './ColorSelector.css';

const ColorSelector = () => {
  return (
    <div className="ui centered grid">
      <div className="four wide column"><SelectorOne/></div>
      <div className="four wide column"><SelectorTwo/></div>
      <div className="four wide column"><SelectorThree/></div>
    </div>
  );
}

export default ColorSelector;
