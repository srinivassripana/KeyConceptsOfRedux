import {LOGO_URL} from "../utils/constants";
const Header = () =>{
    return (
        <div className="mainheader ">
            <div className="logoheader">
                <img className = "logo" src={LOGO_URL}></img>
            </div>
            <div className="navlist">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>FeedBack</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;