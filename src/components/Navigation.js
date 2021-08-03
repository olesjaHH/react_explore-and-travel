import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <nav className="navigation">
            <img src="./img/logo.png " alt="Logo" />
            <div>
                <ul>
                    <li><NavLink activeStyle={{ color: '#202336'}} to="/" exact>Home</NavLink></li>
                    <li><NavLink activeStyle={{ color: '#202336'}} to="/destination">Destinations</NavLink></li>
                    <li><NavLink activeStyle={{ color: '#202336'}} to="/about">About</NavLink></li>
                    <li><NavLink activeStyle={{ color: '#202336'}} to="/partner">Partner</NavLink></li>
                </ul>
                <input type="button" value="Login" />
                <input type="button" value="Register" />
            </div>
        </nav>
     );
}
 
export default Navigation;