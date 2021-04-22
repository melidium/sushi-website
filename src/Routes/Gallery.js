import React, { useEffect } from 'react'
import {Helmet} from 'react-helmet'

export default function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="pagelandinganimation">
            <Helmet>
                <title>Gallery | Vic Sushi & Thai Cuisine</title>
                <meta name="description" content="Check out our food gallery!" />
            </Helmet>
            <span className="separatorspace"> </span>
            <h1 id="galleryh1" className="h1stylesep">Gallery</h1>
            <div id="gallerycontainer">
                <img id="gallery1" src="images/gallery1.jpg" alt="cannotload" />
                <img id="gallery2" src="images/gallery2.jpg" alt="cannotload" />
                <img id="gallery3" src="images/gallery3.jpg" alt="cannotload" />
                <img id="gallery4" src="images/gallery4.jpg" alt="cannotload" />
                <img id="gallery5" src="images/gallery5.jpg" alt="cannotload" />
                <img id="gallery6" src="images/gallery6.jpg" alt="cannotload" />
                <img id="gallery7" src="images/gallery7.jpg" alt="cannotload" />
                <img id="gallery8" src="images/gallery8.jpg" alt="cannotload" />
                <img id="gallery9" src="images/gallery9.jpg" alt="cannotload" />
                
            </div>

        </div>
    )
}
