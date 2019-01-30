import { SELECT_COLOR_THREE } from '../actions/types';

export default (state='black',action) => {
    switch(action.type){
      case SELECT_COLOR_THREE:
        return action.payload;
      default:
        return state;
    }
}
