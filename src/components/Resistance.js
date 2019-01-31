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
  const tolPersent = {
                  black: 0,
                  brown: 1,
                  red: 2,
                  olive: 0.5,
                  blue: 0.25,
                  violet:0.10,
                  grey:0.05,
                  copper:5,
                  silver:10
                }
  const one = number[props.colorOne];
  const two = number[props.colorTwo];
  const mul = number[props.colorThree];
  const tol = tolPersent[props.colorFour];
  const result = ((one*10)+two)*(10**mul);
  const lowerBound = result - (result * (tol/100));
  const upperBound = result + (result * (tol/100));
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
      <div className="centered row">{`R = ${R.toFixed(point)} ${k>0?'K':''}${m>0?'M':''}Ω ${tol!==0?`±${tol}%`:''}`}</div>
      {tol!==0&&R>0?<div className="centered row">{`${lowerBound} - ${upperBound}`}</div>:null}
    </div>
  )
}

const mapStateToProps = ({ colorOne, colorTwo, colorThree, colorFour }) => {
  return { colorOne, colorTwo, colorThree, colorFour };
}

export default connect(mapStateToProps)(Resistance);
