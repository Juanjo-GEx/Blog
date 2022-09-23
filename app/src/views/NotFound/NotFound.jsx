import { Fragment } from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <Fragment>
        <div>NotFound</div>
        <Link to="/" >Ir a la página principal</Link>
    </Fragment>
  )
}

export default NotFound