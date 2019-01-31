import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectColorThree } from '../actions';

class SelectorThree extends Component {
  onColorClick(color){
    this.props.selectColorThree(color);
  }

  renderColorList(){
    const colors = ['black','brown','red','orange','yellow','olive','blue','violet','copper','silver'];
    const units = ['1','10','100','1K','10K','100K','1M','10M','0.1','0.01']
    const selectedColor = this.props.colorThree;

    return colors.map((color,index) => <div key={color} className={`${color} ${color===selectedColor?'selected':''} row`} onClick={() => this.onColorClick(color)}>{units[index]}</div>)
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
