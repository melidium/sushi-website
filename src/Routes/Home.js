import React, {useEffect, useState} from 'react'
import {Helmet} from 'react-helmet';
import Iframe from 'react-iframe'


export default function Home() {
    //Slideshow
    
    let [count, setCount] = useState (() => {
        return 1
    })

    function slideOne () {
        setCount(prevCount => prevCount = 1)
        console.log(count)
    }
    function slideTwo () { 
        setCount(prevCount => prevCount = 2)
        console.log(count)
    }
    function slideThree () { 
        setCount(prevCount => prevCount = 3)
        console.log(count)
    }

    useEffect (() => {
        const dotOne = document.getElementById("dot1")
        const dotTwo = document.getElementById("dot2")
        const dotThree = document.getElementById("dot3")
        const slidePicOne = document.getElementById("slidepic1")
        const slidePicTwo = document.getElementById("slidepic2")
        const slidePicThree = document.getElementById("slidepic3")
        const showcaseTitle = document.getElementById("showcasetitle")
        const showcaseDescription = document.getElementById("showcasedescription")
        slidePicOne.style.display = "none";
        slidePicTwo.style.display = "none";
        slidePicThree.style.display = "none";
        dotOne.style.opacity = ".5";
        dotTwo.style.opacity = ".5";
        dotThree.style.opacity = ".5";
        

        if (count === 1) {
            dotOne.style.opacity = "1";
            slidePicOne.style.display = "block";
            showcaseTitle.innerText ="love sushi?";
            showcaseDescription.innerText = "We make fresh and high quality sushi at vic restaurant";
        }
        if (count === 2) {
            dotTwo.style.opacity = "1";
            slidePicTwo.style.display = "block";
            showcaseTitle.innerText ="Party Ready";
            showcaseDescription.innerText = "Huge portion of sushi on the go, Order now!";
        }
        if (count === 3) {
            dotThree.style.opacity = "1";
            slidePicThree.style.display = "block";
            showcaseTitle.innerText ="Order Online";
            showcaseDescription.innerText = "Pick up at our restaurant";
        }
    },[count]);

    //scroll to top

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    //Recommendation Page Scroll

    let [page, setPage] = useState (() => {
        return 1
    })

    function plusPage () {
        if (page >= 2) {return ( page = 2 )}
        setPage(prevPage => prevPage + 1)
        console.log(page)
    }

    function minusPage () {
        if (page <= 1) {return ( page = 1 )}
        setPage(prevPage => prevPage - 1)
        console.log(page)
    }

    useEffect (() => {
        const switchPicture = document.getElementById("recommendationpic")
        const dishName = document.getElementById("recommendationtitle")
        const dishPrice = document.getElementById("recommendationprice")
        const dishDescription = document.getElementById("recommendationdescription")

        if (page === 1 ) { 
            switchPicture.src= "images/bluefintoro.jpg"
            dishName.innerText = "Bluefin Toro"
            dishPrice.innerText = "$7.95"
            dishDescription.innerText = "Fresh Bluefin Tuna Belly! It will melt in your mouth"
        }
        if (page === 2 ) { 
            switchPicture.src= "images/Chirashi.jpg"
            dishName.innerText = "Chirashi"
            dishPrice.innerText = "$21.95"
            dishDescription.innerText = "10 pcs of sushi over rice, delicious fresh fish"
        }
    })


    return(
            <div>
                <Helmet>
                    <title>Vic Sushi & Thai Cuisine in Willow Grove, PA</title>
                    <meta name="description" content="Vic Sushi and Thai Restaurant, online ordering, explore our menu, and check out our sushi gallery | We located on: 2720 Easton Road, Willow Grove, PA 19090" />
                </Helmet>
                <div className="pagelandinganimation">
                    <section className="showcase">
                        <img className="slidepic" id="slidepic1" src="images/showcase_1.jpg" alt='cannot display'/>
                        <img className="slidepic" id="slidepic2" src="images/showcase_2.jpg" alt='cannot display'/>
                        <img className="slidepic" id="slidepic3" src="images/showcase_3.jpg" alt='cannot display'/>
                        <div className="showcaseheader">
                        <h2 id="showcasetitle">Love sushi?</h2>
                        <h4 id="showcasedescription">We make fresh and high quality sushi and sashimi at VIC</h4>
                        </div>
                        <div id="slidedots">
                            <span className="slidedot" id="dot1" onClick={slideOne}></span>
                            <span className="slidedot" id="dot2" onClick={slideTwo}></span>
                            <span className="slidedot" id="dot3" onClick={slideThree}></span>
                        </div>
                    </section> 

                    <span className="contentsep">  </span>
                    
                    <h1 className="h1stylesep">Chef's Recommendation:</h1>

                    <section className="chefchoice">
                        <button onClick={minusPage} className="switchbutton"><span className="material-icons">arrow_back_ios</span></button>
                        <div className="dish">
                            <img id="recommendationpic" src='images/bluefintoro.jpg' alt='dish1IMG' />
                        </div>
                        
                        <div className="chefchoice-description">
                            <div id="chefdish-title">
                                <h2 id="recommendationtitle">Bluefin Toro</h2>
                                <h4 id="recommendationprice">7.95$</h4>
                            </div>
                            <p id="recommendationdescription">
                                Fresh Bluefin Tuna Belly!<br></br> It will melt in your mouth!
                            </p>
                            <button><a href="https://order.mealkeyway.com/merchant/5a2f4a366533493050374d4b6a50566c4551613561513d3d/main" rel="noreferrer" target="_blank">Order Now</a></button>
                        </div>
                        <button onClick={plusPage} className="switchbutton"><span className="material-icons">arrow_forward_ios</span></button>
                    </section>

                    <br></br>
                    <br></br>
                    <h1 className="h1stylesep">Our Services:</h1>
                    <section className="container">
                        <p id="serviceParagraph"> 
                        Welcome to Vic Sushi and Thai Cuisine Website. The restaurant has been open since 2012. It located on Easton Road by the turnpike. (Between WaWa and Dunkin Donuts). We are providing high quality sushi and very friendly service. Feel free to bring your own bottle and enjoy it at this B.Y.O.B. Sushi Jewel.
                        you are having a party, try our great tasting and reasonably priced party platters.
                        </p>
                    </section>

                    <br></br>
                    <br></br>
                    <h1 className="h1stylesep">Our location:</h1>
                    <section className="container">
                        <Iframe id="map" url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d671.8031342411372!2d-122.3143398!3d47.6608674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6afc3d9d7c943%3A0x809fdfefdd6b63f3!2sVic%20sushi%20%26%20Thai!5e0!3m2!1sen!2sus!4v1618045705460!5m2!1sen!2sus" 
                        width="600" 
                        height="300" 
                        allowfullscreen="" 
                        loading="lazy"> </Iframe>
                    </section>

                </div>
            </div>
                

            );
}

