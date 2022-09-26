const Avatar = (props) => {
  
  const {size = 'medium', src, ...rest} = props;
  
  return (
    <img className={`Avatar Avatar-${size}`} src={src} {...rest} />
  )
}

export default Avatar