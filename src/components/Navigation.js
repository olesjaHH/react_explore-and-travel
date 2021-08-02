import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <nav className="navigation">
            <img src="./img/logo.png " alt="Logo" />
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/destination">Destinations</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/partner">Partner</Link></li>
                </ul>
                <input type="button" value="Login" />
                <input type="button" value="Register" />
            </div>
        </nav>
     );
}
 
export default Navigation;