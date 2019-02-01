import React from 'react';
import { connect } from 'react-redux';
import './Resistor.css';

const Resistor = (props) => {
  return (
    <div className="ui grid container space">
      <div className="four wide grey column"></div>
      <div className="eight wide column">
        <div className="ui nine column grid">
          <div className="two wide body column left"></div>

          <div className={`one wide ${props.colorOne} column`}></div>

          <div className="one wide body column"></div>

          <div className={`one wide ${props.colorTwo} column`}></div>

          <div className="one wide body column"></div>

          <div className={`one wide ${props.colorThree} column`}></div>

          <div className="six wide body column"></div>

          <div className={`one wide ${props.colorFour} column`}></div>

          <div className="two wide body column right"></div>
        </div>
      </div>
      <div className="four wide grey column"></div>
    </div>
  );
}

const mapStateToProps = ({ colorOne, colorTwo, colorThree, colorFour }) => {
  return { colorOne, colorTwo, colorThree, colorFour };
}

export default connect(mapStateToProps)(Resistor);
