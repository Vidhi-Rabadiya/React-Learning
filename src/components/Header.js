import { Link } from "react-router-dom"
import Logo from "../../images/logo.png"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () => {
    return <div className="flex justify-between">
        <img className="w-16" src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" />
        <div className="flex items-center">
            <ul className="flex">
                <li className="px-4">Status: {useOnlineStatus() ? "✅" : "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About</Link></li>
                <li className="px-4"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
}

export default Header