import { useQuery } from '@tanstack/react-query';
import { Link } from "react-router-dom";
import { getData, getFile } from "../../services/fetchData";


const Header = () => {

    const directusUrl = import.meta.env.VITE_DIRECTUS_URL;

    const { data: files, isSuccess: isSuccessFiles} = useQuery(["files"], async () => await getFile('f8e248aa-ead4-4119-87a9-65c6fdca0925', ['id'])); 
    const { data: menus, isSuccess: isSuccessMenus} = useQuery(["menus"], async () => await getData('menus')); 

    return (
        <header className="Header">
            <div className="Header-menu">
                <Link to="/">
                    { isSuccessFiles  
                        ? (<img 
                            className="Header-img" 
                            src={`${directusUrl}assets/${files.id}`} 
                            alt="Logotipo Global Exchange" 
                            title="Logotipo Global Exchange" />
                        )
                        : (<p>Error al procesar la imagen</p>)
                    }  
                </Link>                             
                <nav>
                    <ul className="Header-nav">
                        { isSuccessMenus && 
                            (
                                menus.find(menu => menu.title === 'header')
                                    .menu_items.map(itemMenu => 
                                        <li className="Header-item" key={itemMenu.key}>{itemMenu.text}</li>)
                                )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header