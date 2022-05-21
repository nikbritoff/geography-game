import { LocalStoragaNames } from '../const';
import State from '../types/state';

type Data = {
  [key: string]: string,
};

const getRandomIntInclusive = (): number => {
  const MIN = -1;
  const MAX = 1;

  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}

export const getRandomOrder = (data: Data): string[] => {
  const list = [];

  for (let key in data) {
    list.push(key, data[key]);
  }

  list.sort(getRandomIntInclusive);

  return list;
}

export const initLocalStorage = (state: State): void => {
  localStorage.setItem(
    LocalStoragaNames.State,
    JSON.stringify(state),
  )
}
