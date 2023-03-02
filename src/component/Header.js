import { Link } from "react-router-dom";
import Popup from "./Popup";

const Header = () => {
    return(
        <>
            <header className="header-area">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                        <Link to="index.html" className="logo">
                            <h4>Spac<span>Dyna</span></h4>
                        </Link>
                        <ul className="nav">
                            <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                            <li className="scroll-to-section"><Link to="about">About Us</Link></li>
                            <li className="scroll-to-section"><Link to="service">Services</Link></li>
                            <li className="scroll-to-section"><Link to="/">Portfolio</Link></li>
                            <li className="scroll-to-section"><Link to="blog">Blog</Link></li> 
                            <li className="scroll-to-section"><Link to="contact">Message Us</Link></li> 
                            <li className="scroll-to-section"><Popup btnVal="Contact Now" classVal="main-red-button"/></li> 
                        </ul>        
                        <Link className="menu-trigger">
                            <span>Menu</span>
                        </Link>
                        </nav>
                    </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;