import { SELECT_COLOR_THREE } from '../actions/types';

export default (state=null,action) => {
    switch(action.type){
      case SELECT_COLOR_THREE:
        return action.payload;
      default:
        return state;
    }
}
