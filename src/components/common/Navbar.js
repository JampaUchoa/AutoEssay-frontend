import React, { useState } from 'react';
import './navbar.scss';


export default function Navbar() {
    

    const [navStyle, setStyle] = useState("dark");
    const scrollFunction = () => {
        if (window.scrollY > 20) {
            setStyle("normal");
        } else {
            setStyle("dark");
        }
    }


    window.addEventListener('scroll', scrollFunction);
    return (
            <div className={`navbar ${navStyle}`}>

            </div>
    )

}