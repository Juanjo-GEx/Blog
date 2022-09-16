import { Fragment } from "react"
import { Outlet } from 'react-router-dom'

const App = () => {

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

export default App
