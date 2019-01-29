import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectColorOne } from '../actions';

class SelectorOne extends Component {
  onColorClick(color){
    this.props.selectColorOne(color);
  }

  renderColorList(){
    const colors = ['black','brown','red','orange','yellow','olive','blue','violet','grey'];

    return colors.map(color => <div onClick={() => this.onColorClick(color)}>{color}</div>)
  }

  render(){
    console.log(this.props.colorOne);
    return(
      <div>
        {this.renderColorList()}
      </div>
    );
  }
}



export default connect(state => state,{selectColorOne})(SelectorOne);
