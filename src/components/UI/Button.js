import s from './Button.module.css'
function Button(props) {
  const { onClick, children, title, disabled = false } = props
  return (
    <button
      {...props}
      className={s.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
export default Button
