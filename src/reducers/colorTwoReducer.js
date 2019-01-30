import { SELECT_COLOR_TWO } from '../actions/types';

export default (state='black',action) => {
    switch(action.type){
      case SELECT_COLOR_TWO:
        return action.payload;
      default:
        return state;
    }
}
