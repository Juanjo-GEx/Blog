import Button from '../Button'
const Card = (props) => {
    const {image, title, body, url, buttonText} = props;

    return (
        <article className="Card">
            <img src={image} width="385" height="385" alt="Testing blog" className="Card-image" />
            <div className="Card-container">
                <h2 className="Card-title">{title}</h2>
                <p className="Card-text">{body}</p>
                <a href={url}>
                    <Button color='primary'>{buttonText}</Button>
                </a>
            </div>
        </article>
    )
}

export default Card