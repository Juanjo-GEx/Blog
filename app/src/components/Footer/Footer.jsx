import { useQuery } from '@tanstack/react-query'
import { getData } from "../../services/fetchData";
import parse from 'html-react-parser';

const Footer = () => {
    
    const { data: texts, isSuccess} = useQuery(["texts"], async () => await getData('texts')); 

    console.log(texts)
    return (
        <footer className="Footer">
            { isSuccess && 
                (
                    texts.find(text => text.title === 'Footer')
                        .text.blocks.map(itemText => 
                            <p className="Footer-text" key={itemText.id}>{parse(itemText.data.text)}</p>
                        )
                )
            }
        </footer>
    )
}

export default Footer