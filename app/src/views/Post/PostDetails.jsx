import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { filterData } from "../../services/filterData";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Avatar from "../../components/Avatar"

const PostDetails = () => {
    const location = useLocation();
    const backgroundStyle = {
      'backgroundImage': `linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.75) 100%), url(${location.state?.image})`
    }

    const directusUrl = import.meta.env.VITE_DIRECTUS_URL;
    const { data: user, isSuccess} = useQuery(["users"], async () => await filterData('users', location.state?.userId)); 
    console.log(user)

    return (
      <Fragment>
        <Header />
        { isSuccess && 
          <main className="Post">
            <div className="Post-image" style={backgroundStyle}>
              <h1 className="Post-title">Blog</h1>
            </div>
            <div className="Post-main">
              <section className="Post-author">
                <Link 
                    to={`/users/${user.slug}`}
                    state={{                        
                        image: `${directusUrl}assets/${user.avatar_image}`,
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        aboutMe: user.about_me
                    }}
                >
                  <Avatar size='small' src={`${directusUrl}assets/${user.avatar_image}`}/>
                </Link>
                <div className="Post-authorDetails">
                  <p>{`${user.name} ${user.surname}`}</p>
                  <p>{`${user.email}`}</p>
                </div>
              </section>
              <section className="Post-container">
                <h2 className="Post-subtitle">{ location.state?.title }</h2>
                <p className="Post-text">{ location.state?.body }</p>
              </section>
            </div>
          </main>
        }        
        <Footer />
      </Fragment>
      
    )
}

export default PostDetails