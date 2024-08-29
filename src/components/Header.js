import { Link } from "react-router-dom"
import Logo from "../../images/logo.png"
const Header = () => {
    return <div className="headerContainer">
        <img className="headerLogo" src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" />
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
}

export default Header