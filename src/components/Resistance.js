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
  let point=0;
  if(mul<0){
     point = mul===-1?1:2;
  }
  return (
    <div>
      {`R = ${result.toFixed(point)} Ω`}
    </div>
  )
}

export default connect(state=>state)(Resistance);
