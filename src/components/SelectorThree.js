import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectColorThree } from '../actions';

class SelectorThree extends Component {
  onColorClick(color){
    this.props.selectColorThree(color);
  }

  renderColorList(){
    const colors = ['black','brown','red','orange','yellow','olive','blue','violet','grey'];

    return colors.map(color => <div onClick={() => this.onColorClick(color)}>{color}</div>)
  }

  render(){
    console.log(this.props.colorThree);
    return(
      <div>
        {this.renderColorList()}
      </div>
    );
  }
}



export default connect(state => state,{selectColorThree})(SelectorThree);
