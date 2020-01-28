import React from 'react';
import {FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiPhone} from 'react-icons/fi'
import './footer.scss'

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="social-icons">
                    <a href="https://www.instagram.com/livoxapp/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FiInstagram/>
                    </a>
                    <a href="https://www.facebook.com/livoxtablet/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FiFacebook/>
                    </a>

                    <a href="https://twitter.com/livoxtablet/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <FiTwitter/>
                    </a>

                    <a href="https://www.youtube.com/channel/UCLjj9TZsQ-RVA3xe3_Moi9A/" aria-label="Youtube" target="_blank" rel="noopener noreferrer">
                        <FiYoutube/>
                    </a>
                
                    <a href="https://api.whatsapp.com/send?phone=5531984596650&text=Ola!%20gostaria%20de%20tirar%20uma%20duvida" aria-label="Whatsapp" target="_blank" rel="noopener noreferrer">
                        <FiPhone/>
                    </a>    
                </div>
            </div>
        </footer>
    )
}