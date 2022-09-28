import { useQuery } from '@tanstack/react-query';
import { Link } from "react-router-dom";
import { getData} from "../../services/fetchData";
import Avatar from "../../components/Avatar"

const Comment = (props) => {
  const {title, text, userId} = props;
  const directusUrl = import.meta.env.VITE_DIRECTUS_URL;
  const { data: users, isSuccess} = useQuery(["users"], async () => await getData('users')); 
  let author = {};
  if (isSuccess) {
    author = users.filter(user => user.id === userId);      
  }
  return (
    <article className="Comments-article">  
      { isSuccess &&
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
      } 
      <div className="Comments-comment">
        <h3 className="Comments-title">{title}</h3>
        <p className="Comments-text">{text}</p>
      </div>
    </article>
  )
}

export default Comment