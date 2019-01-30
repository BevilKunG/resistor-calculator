import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectColorTwo } from '../actions';

class SelectorTwo extends Component {
  onColorClick(color){
    this.props.selectColorTwo(color);
  }

  renderColorList(){
    const colors = ['black','brown','red','orange','yellow','olive','blue','violet','grey'];

    return colors.map(color => <div onClick={() => this.onColorClick(color)}>{color}</div>)
  }

  render(){
    console.log(this.props.colorTwo);
    return(
      <div>
        {this.renderColorList()}
      </div>
    );
  }
}



export default connect(state => state,{selectColorTwo})(SelectorTwo);
