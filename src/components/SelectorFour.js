import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectColorFour } from '../actions';

class SelectorFour extends Component {
  onColorClick(color){
    this.props.selectColorFour(color);
  }

  renderColorList(){
    const colors = ['black','brown','red','olive','blue','violet','grey','copper','silver'];
    const tol = ['±0%','±1%','±2%','±0.5%','±0.25%','±0.10%','±0.05%','±5%','±10%'];
    const selectedColor = this.props.colorFour;
    return colors.map((color,index) => <div key={color} className={`${color} ${color===selectedColor?'selected':''} row`} onClick={() => this.onColorClick(color)}>{tol[index]}</div>)
  }

  render(){
    return(
      <div className="ui centered eight row grid">
        {this.renderColorList()}
      </div>
    );
  }
}



export default connect(state => state,{selectColorFour})(SelectorFour);
