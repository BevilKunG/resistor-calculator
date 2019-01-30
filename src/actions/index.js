import { SELECT_COLOR_ONE } from './types';
import { SELECT_COLOR_TWO } from './types';
import { SELECT_COLOR_THREE } from './types';

export const selectColorOne = (color) => {
  return {
    type: SELECT_COLOR_ONE,
    payload:color
  }
}

export const selectColorTwo = (color) => {
  return {
    type: SELECT_COLOR_TWO,
    payload:color
  }
}

export const selectColorThree = (color) => {
  return {
    type: SELECT_COLOR_THREE,
    payload:color
  }
}
