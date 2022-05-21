import State from '../types/state';

export const getSelected = (state: State): string[] => state.selected;
export const getPlayList = (state: State): string[] => state.playList;
export const getPairs = (state: State): string[][] => state.pairs;
export const getIsWrong = (state: State): boolean => state.isWrong;
