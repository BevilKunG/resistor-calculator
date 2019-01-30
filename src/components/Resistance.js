import React from 'react';
import { connect } from 'react-redux';

const Resistance = (props) => {
  const number = {
                  black: 0,
                  brown: 1,
                  red: 2,
                  orange: 3,
                  yellow: 4,
                  olive: 5,
                  blue: 6,
                  violet:7,
                  grey:8,
                  copper:-1,
                  silver: -2
                }
  const one = number[props.colorOne];
  const two = number[props.colorTwo];
  const mul = number[props.colorThree];
  const result = ((one*10)+two)*(10**mul);
  return (
    <div>
      {`R = ${result}`}
    </div>
  )
}

export default connect(state=>state)(Resistance);
