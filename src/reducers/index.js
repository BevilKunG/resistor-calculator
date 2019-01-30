import { combineReducers } from 'redux';
import colorOneReducer from './colorOneReducer';
import colorTwoReducer from './colorTwoReducer';
import colorThreeReducer from './colorThreeReducer';

export default combineReducers({
  colorOne:colorOneReducer,
  colorTwo:colorTwoReducer,
  colorThree:colorThreeReducer
});
