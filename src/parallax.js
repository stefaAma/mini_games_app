import React from 'react';

const ORIGINAL_POSITION_MAIN_TITLE = 10;
const PLANETS_BRIGHTNESS = 80;
const SUN_BRIGHTNESS = 90; 

export const Parallax = () => {
    let mainTitle = document.getElementsByClassName("main-title");
    // let galaxy = document.getElementsByClassName("galaxy-img");
    let earth = document.getElementsByClassName("earth-img");
    let mercury = document.getElementsByClassName("mercury-img");
    let jupiter = document.getElementsByClassName("jupiter-img");
    let neptune = document.getElementsByClassName("neptune-img");
    let sun = document.getElementsByClassName("sun-img");
    window.addEventListener("scroll", () => {
        let scroll_value = window.scrollY;
        mainTitle[0].style.top = ORIGINAL_POSITION_MAIN_TITLE + (scroll_value * 0.15) + "%";
        mainTitle[0].style.transform = "translateX(-50%) rotate(" + (scroll_value * 0.25) + "deg) scale(" + (1 - (scroll_value * 0.001)) + ","
        + (1 - (scroll_value * 0.001)) + ")";
        mainTitle[0].style.opacity = (1 - (scroll_value * 0.001));
        // galaxy[0].style.transform = "translateY(" + (scroll_value * 0.15) + "px)";
        sun[0].style.filter = "brightness(" + (SUN_BRIGHTNESS - scroll_value * 0.1) + "%)";
        earth[0].style.filter = "brightness(" + (PLANETS_BRIGHTNESS - scroll_value * 0.1) + "%)";
        mercury[0].style.filter = "brightness(" + (PLANETS_BRIGHTNESS - scroll_value * 0.1) + "%)";
        jupiter[0].style.filter = "brightness(" + (PLANETS_BRIGHTNESS - scroll_value * 0.1) + "%)";
        neptune[0].style.filter = "brightness(" + (PLANETS_BRIGHTNESS - scroll_value * 0.1) + "%)";
    });

    return (<section className = "parallax">
        <h1 className="main-title">Mini-Games</h1>
        <img className = "galaxy-img" src = "../images/galaxy_p1.jpg" alt = "Galaxy background"/>
        <img className = "moon-img" src = "../images/moon.png" alt = "Moon in foreground"/>
        <img className = "earth-img" src = "../images/earth.png" alt = "Earth in foreground"/>
        <img className = "mercury-img" src = "../images/mercury.png" alt = "Mercury in foreground"/>
        <img className = "sun-img" src = "../images/sun.png" alt = "Sun in foreground"/>
        <img className = "jupiter-img" src = "../images/jupiter.png" alt = "Jupiter in foreground"/>
        <img className = "neptune-img" src = "../images/neptune.png" alt = "Neptune in foreground"/>
    </section>);
}
