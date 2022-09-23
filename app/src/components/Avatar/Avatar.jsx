const Avatar = (props) => {
  
  const {size = 'medium', url, ...rest} = props;
  
  return (
    <img className={`Avatar Avatar-${size}`} src={url} {...rest} />
  )
}

export default Avatar