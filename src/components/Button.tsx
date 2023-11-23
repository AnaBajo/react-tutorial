interface Props {
  children: string;
  // ? means the prop is optional
  // color?: string;
  color?: 'primary' | 'secondary' | 'danger' | 'warning';
  onClick: () => void;
}
const Button = ({children, color = 'primary', onClick}: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}  >{children}</button>
  )
}

export default Button