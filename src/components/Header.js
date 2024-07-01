import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const onlineStatus = useOnlineStatus();
    return (
        <div className="mainheader ">
            <div className="logoheader">
                <img className = "logo" src={LOGO_URL}></img>
            </div>
            <div className="navlist">
                <ul>
                    <li>onlineStatus : {onlineStatus ? "💚" : "❤️" }</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li> <Link to="/contact">Contact Us</Link></li>
                    <li> <Link to="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login-btn">login</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;