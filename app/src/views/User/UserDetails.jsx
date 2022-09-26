import { Fragment } from "react"
import { useLocation } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header"


const UserDetails = () => {

  const location = useLocation();
  console.log(location.state)

  return (
    <Fragment>
      <Header />
      <main className='User'>
        <section className='User-header'>
          <Avatar size='large' src={location.state?.image}/>
          <div className="User-details">
              <h1 className="User-name">{`${location.state?.name} ${location.state?.surname}`}</h1>
              <h2 className="User-email">{location.state?.email}</h2>
          </div>
        </section>
        <section className='User-main'>
          <p className="User-text">{location.state?.aboutMe}</p>
        </section>
      </main>
      <Footer />
    </Fragment>
  )
}

export default UserDetails