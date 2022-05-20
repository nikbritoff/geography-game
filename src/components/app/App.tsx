import { useEffect } from 'react';
import Button from '../button/button';
import Message from '../message/message';
import State from '../../types/state';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Actions } from '../../types/action';
import { LocalStoragaNames } from '../../const';
import { addSelectedAction, clearSelectedAction, removeSelectedAction, setWrongAction, updatePlayListAction } from '../../store/action';

const mapStateToProps = ({ playList, selected, pairs, isWrong }: State) => ({
  playList,
  selected,
  pairs,
  isWrong,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  addSelected: (name: string) => dispatch(addSelectedAction(name)),
  removeSelected: (name: string) => dispatch(removeSelectedAction(name)),
  clearSelected: () => dispatch(clearSelectedAction()),
  setWrong: () => dispatch(setWrongAction()),
  updatePlayList: (list: string[]) => dispatch(updatePlayListAction(list)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux;

function App({
  playList,
  selected,
  pairs,
  isWrong,
  addSelected,
  removeSelected,
  clearSelected,
  setWrong,
  updatePlayList,
}: ConnectedComponentProps) {

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
  }, [clearSelected, pairs, playList, selected, setWrong, updatePlayList]);

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
    <div className='App'>
      {playList.length !== 0 && <div className='list'>
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

export { App };
export default connector(App);
