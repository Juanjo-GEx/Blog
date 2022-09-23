import { useEffect, Fragment } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

const Users = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {        
        if (location.pathname === '/users' || location.pathname === '/users/') {
            navigate(-1);
        }
    }, []);

    return (
        <Fragment>
          <Outlet />
        </Fragment>
    )
}

export default Users