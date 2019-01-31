import { SELECT_COLOR_FOUR } from '../actions/types';

export default (state='black',action) => {
    switch(action.type){
      case SELECT_COLOR_FOUR:
        return action.payload;
      default:
        return state;
    }
}
