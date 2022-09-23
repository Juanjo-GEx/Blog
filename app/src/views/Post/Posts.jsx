import { useEffect, Fragment } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

const Posts = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {  
        if (location.pathname === '/posts' || location.pathname === '/posts/') {
            navigate(-1);
        }
    }, []);

    return (
        <Fragment>
          <Outlet />
        </Fragment>
    )
}

export default Posts