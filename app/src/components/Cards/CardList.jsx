import { useQuery } from '@tanstack/react-query'
import { getData} from "../../services/fetchData";
import Card from './Card';

const CardList = () => {
    const directusUrl = import.meta.env.VITE_DIRECTUS_URL;
    const { data: posts, isSuccess} = useQuery(["posts"], async () => await getData('posts')); 
    console.log(posts)
  return (
    <div className="CardList">
        <ul className="CardList-list">
        { isSuccess && 
            (
                posts.map(post => 
                    <Card 
                        key={post.id}
                        userId={post.user}
                        image={`${directusUrl}assets/${post.featured_image}`}
                        title={post.title}
                        body={post.body}
                        slug={post.slug}
                        color='primary'
                        buttonText={'Leer más'}
                    />
                )
            )
        }
        </ul>
    </div>
  )
}

export default CardList