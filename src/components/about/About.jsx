import React from "react";
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaFolder} from 'react-icons/fa'
import IMG from '../../assets/a.jpg'

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-img">
                        <img src={IMG} alt="img" className="me_img" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>11</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className="about_icon"/>
                            <h5>Clients</h5>
                            <small>11</small>
                        </article>
                        <article className="about_card">
                            <FaFolder className="about_icon"/>
                            <h5>Projects</h5>
                            <small>+4</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam quae rem, aspernatur esse exercitationem quo voluptate odio. Commodi deserunt nam sunt eius, voluptatem odit obcaecati expedita odio quae porro.</p>
                    <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default About