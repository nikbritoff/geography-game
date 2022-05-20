import { getRandomOrder, initLocalStorage } from '../utils/utils'
import { DATA } from '../const'
import State from '../types/state';
import { Actions, ActionType } from '../types/action';

const defaultState: State = {
  selected: [],
  playList: getRandomOrder(DATA),
  pairs: Object.entries(DATA),
  isWrong: false,
};

const dataFromLocalStorage = localStorage.getItem('state');

const initialState = dataFromLocalStorage !== null ? JSON.parse(dataFromLocalStorage) : defaultState;
initLocalStorage(initialState);

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.AddSelected:
      return {
        ...state,
        selected: [...state.selected, action.payload],
        isWrong: false,
      }
    case ActionType.RemoveSelected:
      return {
        ...state,
        selected: state.selected.filter(element => element !== action.payload),
        isWrong: false,
      }
    case ActionType.ClearSelected: {
      return { ...state, selected: [] }
    }
    case ActionType.UpdatePlayList: {
      return {
        ...state,
        playList: action.payload,
      }
    }
    case ActionType.SetWrong: {
      return {
        ...state,
        isWrong: true,
      }
    }

    default:
      return state;
  }
}

export { reducer };