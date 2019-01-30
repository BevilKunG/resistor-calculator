import { SELECT_COLOR_ONE } from '../actions/types';

export default (state='black',action) => {
    switch(action.type){
      case SELECT_COLOR_ONE:
        return action.payload;
      default:
        return state;
    }
}
