import React from 'react'
import {Link} from 'react-router-dom'



export default function Header() {
    return (
        <header id="headerall">
            <div id="logo">
            <Link to="/"><h2>Vic</h2></Link>
            <Link to="/"><h4>Sushi & Thai Cuisine </h4></Link>
            </div>
            <input type="checkbox" id="navtoggle" />
            <nav className="Navbar">
            <ul className="Navlink">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
            <a id="order" rel="noreferrer" href="https://order.mealkeyway.com/merchant/5a2f4a366533493050374d4b6a50566c4551613561513d3d/main" target="_blank"><span className="material-icons">store</span></a>   
            </nav>
            <a id="order2" rel="noreferrer" href="https://order.mealkeyway.com/merchant/5a2f4a366533493050374d4b6a50566c4551613561513d3d/main" target="_blank"><span className="material-icons">store</span></a>
            <label htmlFor="navtoggle" id="navtoggle-label">
                <span id="hamburger"></span>     
            </label>
            <a rel="noreferrer" href="https://www.facebook.com/vicsushi.willowgrove" target="_blank"> <span id="facebook" className="material-icons">facebook</span></a>
        </header>
    )
}
