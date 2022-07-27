import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../assets/yop.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello, I'm</h5>
                <h1>Lucía Vidal</h1>
                <div className="text-light">Frontend Developer</div>
                <CTA />
                <HeaderSocials/>

                <div className="me">
                    <div className="about_me_image">
                        <img src={ME} alt="me" className="me_img"></img>
                    </div>
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
                

            </div>
        </header>
    )
}

export default Header