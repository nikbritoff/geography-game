import { useCallback, useEffect } from 'react';
import Button from '../button/button';
import Message from '../message/message';
import { useSelector, useDispatch } from 'react-redux';
import { LocalStoragaNames } from '../../const';
import styles from './app.module.css';
import {
  addSelectedAction,
  clearSelectedAction,
  removeSelectedAction,
  setWrongAction,
  updatePlayListAction,
} from '../../store/action';
import { getIsWrong, getPairs, getPlayList, getSelected } from '../../store/selectors';

function App() {
  const selected = useSelector(getSelected);
  const playList = useSelector(getPlayList);
  const pairs = useSelector(getPairs);
  const isWrong = useSelector(getIsWrong);

  const dispatch = useDispatch();
  const addSelected = (name: string) => dispatch(addSelectedAction(name));
  const removeSelected = (name: string) => dispatch(removeSelectedAction(name));
  const clearSelected = useCallback(() => {
    dispatch(clearSelectedAction())
  }, [dispatch]);

  const handleClick = (name: string) => {
    if (selected.includes(name)) {
      removeSelected(name);

      return;
    }

    if (selected.length >= 2) {
      clearSelected();
    }

    addSelected(name);
  }

  useEffect(() => {
    const setWrong = () => dispatch(setWrongAction());
    const updatePlayList = (list: string[]) => dispatch(updatePlayListAction(list));
    const checkAnswer = () => {
      let isCorrect = false;

      pairs.forEach((pair) => {
        if (selected.includes(pair[0]) && selected.includes(pair[1])) {
          isCorrect = true;
        }
      });

      if (isCorrect) {
        updatePlayList(playList.filter((element: string) => element !== selected[0] && element !== selected[1]));
        clearSelected();
      } else {
        setWrong();
      }
    }

    if (selected.length === 2) {
      checkAnswer();
    }
  }, [clearSelected, dispatch, pairs, playList, selected]);

  useEffect(() => {
    if (playList.length === 0) {
      localStorage.removeItem(LocalStoragaNames.State);
    } else {
      localStorage.setItem(
        LocalStoragaNames.State,
        JSON.stringify({
          playList,
          selected,
          pairs,
          isWrong,
        }));
    }
  }, [isWrong, pairs, playList, selected]);

  return (
    <div className={styles.app}>
      {playList.length !== 0 && <div className={styles.list}>
        {playList.map((name: string) => (
          <Button
            key={name}
            name={name}
            handleClick={handleClick}
            selected={selected}
            isWrong={isWrong}
          />
        ))}
      </div>}
      {playList.length === 0 && <Message />}
    </div>
  );
}

export default App;
