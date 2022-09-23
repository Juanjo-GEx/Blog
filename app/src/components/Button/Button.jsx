const Button = (props) => {
  
  const {color = 'primary', children, ...rest} = props;

  return (
    <button className={`Button Button-${color}`} {...rest}>
      {children}
    </button>
  )
}

export default Button