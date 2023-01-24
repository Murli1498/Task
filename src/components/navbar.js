import { Link} from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
             <Link to="/contact">Contact</Link>
             <Link to="/">Logout</Link>
        </div>
    )
}
export default NavBar;