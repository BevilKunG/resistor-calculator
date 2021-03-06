import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectColorTwo } from '../actions';

class SelectorTwo extends Component {
  onColorClick(color){
    this.props.selectColorTwo(color);
  }

  renderColorList(){
    const colors = ['black','brown','red','orange','yellow','olive','blue','violet','grey','white'];
    const selectedColor = this.props.colorTwo;
    return colors.map((color,index) => <div key={color} className={`${color} ${color===selectedColor?'selected':''} row`} onClick={() => this.onColorClick(color)}>{index}</div>)
  }

  render(){
    return(
      <div className="ui centered grid">
        {this.renderColorList()}
      </div>
    );
  }
}



export default connect(state => state,{selectColorTwo})(SelectorTwo);
