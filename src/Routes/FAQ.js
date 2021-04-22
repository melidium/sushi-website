import React, { useEffect } from 'react'
import {Helmet} from 'react-helmet'

export default function FAQt() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="pagelandinganimation">
            <Helmet>
                <title>FAQ | Vic Sushi & Thai Cuisine</title>
                <meta name="description" content="Frequently Asked Question in our Restaurant" />
            </Helmet>
            <span className="separatorspace"> </span>
        </div>
    )
}
