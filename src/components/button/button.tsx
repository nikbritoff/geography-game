import styles from './button.module.css';
import cn from 'classnames';

type ButtonProps = {
  name: string,
  handleClick: (name: string) => void,
  selected: string[],
  isWrong: boolean,
}

function Button({ name, handleClick, selected, isWrong }: ButtonProps): JSX.Element {
  return (
    <button
      className={
        cn(
          styles.button,
          selected.includes(name) && styles.selected,
          isWrong && selected.includes(name) && styles.error,
        )}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  )
}

export default Button;
