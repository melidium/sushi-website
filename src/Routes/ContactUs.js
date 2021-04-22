import React, { useEffect } from 'react'
import {Helmet} from 'react-helmet'
import Iframe from 'react-iframe'

export default function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="pagelandinganimation">
            <Helmet>
                <title>Contact Us | Vic Sushi & Thai Cuisine</title>
                <meta name="description" content="Visit Vic Sushi and Thai now! We provide good quality sushi that will suit your taste and thai cuisine!" />
            </Helmet>
            
            <span className="separatorspace"> </span>
        
            <div id="contactus-container">

                <section className="container openhourscontainer">
                    <h2 className="h1style2sep">OPEN HOURS</h2>
                    <div id="openhour">
                        <ul id="date">
                            <li>Monday</li>
                            <li>Tuesday</li>
                            <li>Wednesday</li>
                            <li>Thursday</li>
                            <li>Friday</li>
                            <li>Saturday</li>
                            <li>Sunday</li>
                        </ul>
                        <ul id="hours">
                            <li>11:30 AM – 9:30 PM</li>
                            <li>Closed</li>
                            <li>11:30 AM – 9:30 PM</li>
                            <li>11:30 AM – 9:30 PM</li>
                            <li>11:30 AM – 10:30 PM</li>
                            <li>12:00 PM – 10:00 PM</li>
                            <li>12:30 PM – 9:30 PM</li>
                        </ul>
                    </div>
                </section>
 

                <section className="container info">
                <h2 className="h1style2sep">Contact Us</h2>
                    <div id="contactus-information">
                    
                        <ul>
                            <li><span className="material-icons">place</span> 2720 Easton Road, Willow grove, PA .19090</li>
                            <li><span className="material-icons">call</span> 215-675-3993/ 215-675-3660</li>
                        </ul>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d671.8031342411372!2d-122.3143398!3d47.6608674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6afc3d9d7c943%3A0x809fdfefdd6b63f3!2sVic%20sushi%20%26%20Thai!5e0!3m2!1sen!2sus!4v1618045705460!5m2!1sen!2sus" 
                        width="300" 
                        height="300" 
                        allowfullscreen="" 
                        loading="lazy"> </Iframe>
                    </div>
                </section>
            </div>

        </div>
    )
}
