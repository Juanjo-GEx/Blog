import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { getData} from "../../services/fetchData";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Avatar from "../../components/Avatar"
import Comment from "../../components/Comments"

const PostDetails = () => {
    const location = useLocation();     
    const backgroundStyle = {
      'backgroundImage': `linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.75) 100%), url(${location.state?.image})`
    }
    
    const directusUrl = import.meta.env.VITE_DIRECTUS_URL;    
    const { data: users, isSuccess} = useQuery(["users"], async () => await getData('users')); 
    let author = {};
    if (isSuccess) {
      author = users.filter(user => user.id === location.state?.userId);      
    }
    
    const handleEditorAvatar = (comment) => {  
      let users = location.state?.users;               
      users.forEach(user => {
        if (comment.user === user.id){           
          return user.avatar_image
        }
      });
    }

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
                    to={`/users/${author[0].slug}`}
                    state={{                        
                        image: `${directusUrl}assets/${author[0].avatar_image}`,
                        name: author[0].name,
                        surname: author[0].surname,
                        email: author[0].email,
                        aboutMe: author[0].about_me
                    }}
                >
                  <Avatar size='small' src={`${directusUrl}assets/${author[0].avatar_image}`}/>
                </Link>
                <div className="Post-authorDetails">
                  <p>{`${author[0].name} ${author[0].surname}`}</p>
                  <p>{`${author[0].email}`}</p>
                </div>
              </section>
              <section className="Post-container">
                <h2 className="Post-subtitle">{ location.state?.title }</h2>
                <p className="Post-text">{ location.state?.body }</p>
              </section>              
              <section className="Comments">
                {
                  (location.state?.comments.length !== 0) && 
                    location.state?.comments.map(comment => 
                        <Comment 
                          key={comment.id}
                          title={comment.title}
                          text={comment.comment}
                          userId={comment.user}
                        />                      
                    )              
                }
              </section>
            </div>
          </main>
        }        
        <Footer />
      </Fragment>
      
    )
}

export default PostDetails