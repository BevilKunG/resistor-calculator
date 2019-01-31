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
                  white:9,
                  copper:-1,
                  silver: -2
                }
  const one = number[props.colorOne];
  const two = number[props.colorTwo];
  const mul = number[props.colorThree];
  const result = ((one*10)+two)*(10**mul);
  let R = result;
  let k=0,m=0;
  let point=0;
  if(result>=1000){
    R = result / (result>=1000000?1000000:1000);
    result>=1000000?m++:k++;
  }else if(result > 0){
    if((mul===2||mul===5)&&two>0){
      point= one>0?1:0;
    }else if(mul<0){
       point = mul===-1?1:2;
    }
  }


  return (
    <div className="ui grid">
      <div className="centered row">{`R = ${R.toFixed(point)} ${k>0?'K':''}${m>0?'M':''}Ω`}</div>
    </div>
  )
}

const mapStateToProps = ({ colorOne, colorTwo, colorThree }) => {
  return { colorOne, colorTwo, colorThree };
}

export default connect(mapStateToProps)(Resistance);
