export enum ActionType {
  AddSelected = 'selected/add',
  RemoveSelected = 'selected/remove',
  ClearSelected = 'selected/clear',
  SetWrong = 'isWrong/set',
  UpdatePlayList = 'playlist/update',
}

export type AddSelected = {
  type: ActionType.AddSelected,
  payload: string,
}

export type RemoveSelected = {
  type: ActionType.RemoveSelected,
  payload: string,
}

export type ClearSelected = {
  type: ActionType.ClearSelected,
}

export type SetWrong = {
  type: ActionType.SetWrong,
}

export type UpdatePlayList = {
  type: ActionType.UpdatePlayList,
  payload: string[],
}

export type Actions = AddSelected
  | RemoveSelected
  | ClearSelected
  | SetWrong
  | UpdatePlayList;
