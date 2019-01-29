import { SELECT_COLOR_ONE } from './types';

export const selectColorOne = (color) => {
  return {
    type: SELECT_COLOR_ONE,
    payload:color
  }
}
