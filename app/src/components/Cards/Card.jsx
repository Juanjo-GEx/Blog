import { Link } from "react-router-dom"
import Button from '../Button'
const Card = (props) => {
    const {image, title, body, slug, userId, color, buttonText} = props;

    return (
        <article className="Card">
            <img src={image} width="385" height="385" alt="Testing blog" className="Card-image" />
            <div className="Card-container">
                <h2 className="Card-title">{title}</h2>
                <p className="Card-text">{body}</p>
                <Link 
                    to={`/posts/${slug}`}
                    state={{
                        userId,
                        image,
                        title,
                        body,
                    }}
                >
                    <Button color={color}>{buttonText}</Button>
                </Link>
            </div>
        </article>
    )
}

export default Card