import { LocalStoragaNames } from '../const';
import State from '../types/state';

type Data = {
  [key: string]: string,
};

export const getRandomOrder = (data: Data): string[] => {
  let namesList = Object.values(data).concat(Object.keys(data));

  const randomNamesList = [];

  while (namesList.length > 0) {
    const index = Math.floor(Math.random() * namesList.length);

    randomNamesList.push(namesList[index]);

    namesList = [...namesList.slice(0, index), ...namesList.slice(index + 1)];
  }

  return randomNamesList;
}

export const initLocalStorage = (state: State): void => {
  localStorage.setItem(
    LocalStoragaNames.State,
    JSON.stringify(state),
  )
}
