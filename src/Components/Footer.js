import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <br></br> <br></br>
            <footer id="footer">
                <div id="contactusfooter">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Phone: 215-6753993 or 215-675-3663</li>
                        <li>Location: 2720 Easton Road, Willow grove, PA 19090</li>
                    </ul>
                </div>

                <div id="navbarfooter" className="container">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                    </ul>
                </div>
            </footer>
            <div id="copyright">
                    <h2>Copyright &copy; Vic Restaurant 2021 All Right Reserved </h2>
                </div>
        </div>
    )
}
