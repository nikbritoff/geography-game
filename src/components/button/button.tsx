import cn from 'classnames';

type ButtonProps = {
  name: string,
  handleClick: (name: string) => void,
  selected: string[],
  isWrong: boolean,
}

function Button({ name, handleClick, selected, isWrong }: ButtonProps) {
  return (
    <button
      className={
        cn(
          'button',
          selected.includes(name) && 'button--selected',
          isWrong && selected.includes(name) && 'button--error',
        )}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  )
}

export default Button;
