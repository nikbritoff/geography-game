import {
  ActionType,
  AddSelected,
  RemoveSelected,
  ClearSelected,
  SetWrong,
  UpdatePlayList
 } from '../types/action';

export const addSelectedAction = (name: string): AddSelected => ({
  type: ActionType.AddSelected,
  payload: name,
});

export const removeSelectedAction = (name: string): RemoveSelected => ({
  type: ActionType.RemoveSelected,
  payload: name,
});

export const clearSelectedAction = (): ClearSelected => ({
  type: ActionType.ClearSelected,
});

export const setWrongAction = (): SetWrong => ({
  type: ActionType.SetWrong,
});

export const updatePlayListAction = (list: string[]): UpdatePlayList => ({
  type: ActionType.UpdatePlayList,
  payload: list,
});