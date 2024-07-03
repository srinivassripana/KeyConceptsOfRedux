import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState,useContext } from "react";
import UserContext from "../utils/UserContext";
const Header = () =>{

    const [btnName , setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {LoggedInUser} = useContext(UserContext);


    return (
        <div className="flex justify-between shadow-md">
            <div className="w-24 ml-4 mt-1">
                <img className = " " src={LOGO_URL}></img>
            </div>
            <div className="p-2 text-xl">
                <ul className="flex p-10 space-x-9">
                    <li>onlineStatus : {onlineStatus ? "💚" : "❤️" }</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li class=""> <Link to="/about">About Us</Link></li>
                    <li> <Link to="/contact">Contact Us</Link></li>
                    <li> <Link to="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login-btn"onClick={()=>{
                        btnName === "Login" ? setBtnName("LogOut") :setBtnName("Login");
                    }} >{btnName}</button>
                    <li>{LoggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;