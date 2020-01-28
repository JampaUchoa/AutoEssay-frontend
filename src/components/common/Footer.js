import React from 'react';
import {FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiPhone} from 'react-icons/fi'
import './footer.scss'

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="social-icons">
                    <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FiInstagram/>
                    </a>
                    <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FiFacebook/>
                    </a>

                    <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <FiTwitter/>
                    </a>

                    <a href="#" aria-label="Youtube" target="_blank" rel="noopener noreferrer">
                        <FiYoutube/>
                    </a>
                
                    <a href="#" aria-label="Whatsapp" target="_blank" rel="noopener noreferrer">
                        <FiPhone/>
                    </a>    
                </div>
            </div>
        </footer>
    )
}