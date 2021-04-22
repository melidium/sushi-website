import React, {useState, useEffect} from 'react'
import {Helmet} from 'react-helmet'

function Menu() {
    
    let [count, setCount] = useState(() => {
        return 1
    })

    function minusCount () {
        if (count < 2) {return setCount(prevCount => prevCount = 1)}
        return setCount(prevCount => prevCount - 1)
    }

    function addCount () {
        if (count > 4) {return setCount(prevCount => prevCount = 5)}
        return setCount(prevCount => prevCount + 1)
    }
    
    useEffect(() => { 
        if (count === 1) { return (document.getElementById("menupage").src = "images/menupage-1.jpg")}
        if (count === 2) { return (document.getElementById("menupage").src = "images/menupage-2.jpg")}
        if (count === 3) { return (document.getElementById("menupage").src = "images/menupage-3.jpg")}
        if (count === 4) { return (document.getElementById("menupage").src = "images/menupage-5.jpg")}
        if (count === 5) { return (document.getElementById("menupage").src = "images/menupage-6.jpg")}
    }, [count]);
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="pagelandinganimation">
            <Helmet>
                <title>Menu | Vic Sushi & Thai Cuisine</title>
                <meta name="description" content="Browse our full menu and place an order for pick up!" />
            </Helmet> 
            <span className="separatorspace"> </span>   

            <div id="all-menu">
                <button className="switchbutton" onClick={minusCount}><span className="material-icons">arrow_back_ios</span></button>
                <img id="menupage" src="images/menupage-1.jpg" alt="page 1"/>
                <button className="switchbutton" onClick={addCount}><span className="material-icons">arrow_forward_ios</span></button>
            </div>
        </div>
    )
}

export default Menu;