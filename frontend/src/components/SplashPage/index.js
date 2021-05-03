// import { Navigation } from "./Navigation";

//TODO: Make the splash page.
//TODO: This page will consist of 3 main parts.
//? #1 The header, which contains the navigation bar and all the links
//? #2 The main body, which will have a series of images transitioning
//? #3 The footer with all the social media links


//* HOMEPAGE COMPONENT *//
import './SplashPage.css'
import Footer from "../Footer/index"
import images from "./images"
// import Navigation from "../Navigation"

//todo: import all the necessary hooks and actions
import React from 'react';
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";


function HomePage() {



let index = 2;
// let opacity = 0;
let currentState = "inner";

const outerDiv = useRef();
const innerDiv = useRef();

const handleFade = (timeout) => {


            if (currentState === "inner") {
                if (index > images.length - 1) {
                        index = 0;
                }
                currentState = "outer"
                innerDiv.current.style.opacity = 1
                timeout = setTimeout(() => {
                    outerDiv.current.style.backgroundImage = `url(${images[index].image_path})`
                    index += 1
                }, 3000)
                return timeout;
            } else {
                if (index > images.length - 1) {
                    index = 0;
                }
                currentState = "inner";
                innerDiv.current.style.opacity = 0;
                 timeout = setTimeout(() => {
                    innerDiv.current.style.backgroundImage = `url(${images[index].image_path})`
                    index += 1
                }, 3000)
                return timeout;
            }

}

useEffect(() => {

    let interval;
    let timeout;

    if (outerDiv && innerDiv) {
        interval = setInterval(() => {
       timeout = handleFade(timeout)
    //    console.log(timeout);
        }, 4000)
    }
    return () => {
        clearInterval(interval)
        clearTimeout(timeout)

    }
}, [outerDiv, innerDiv])

    return (
        <div>
            {/* <Navigation /> */}
        <div id="hp-master-container">
                <div
                className="bg-img-outer"
                ref={outerDiv}>
                    <div
                    className="bg-img-inner"
                    ref={innerDiv}>

                    </div>
                </div>
                <div id="welcome-div">
                <h1 id="welcome-msg">Welcome to Spacr!</h1>
                <p id="welcome-msg-p"><div className="action-call">Fuel your fascination.</div>
                <br /> — Join the Spacr community —
                <br />A home to all those intrigued by the wonders of space.
                <br />Join us and share your story.</p>
                <button id="hp-pg__sign-up-btn"><Link key="h-pg__sign-up-btn" to="/signup">Sign up, Space Cowboy</Link></button>
                </div>
        </div>
    <Footer />
</div>
    )
}

export default HomePage;
