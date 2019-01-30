import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectColorThree } from '../actions';

class SelectorThree extends Component {
  onColorClick(color){
    this.props.selectColorThree(color);
  }

  renderColorList(){
    const colors = ['black','brown','red','orange','yellow','olive','blue','copper','silver'];
    const selectedColor = this.props.colorThree;

    return colors.map(color => <div key={color} className={`${color} ${color===selectedColor?'selected':''} row`} onClick={() => this.onColorClick(color)}>{color}</div>)
  }

  render(){
    return(
      <div className="ui centered grid">
        {this.renderColorList()}
      </div>
    );
  }
}



export default connect(state => state,{selectColorThree})(SelectorThree);
