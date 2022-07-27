import React from "react";
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h5>My skills</h5>
            <h2>My experience</h2>
            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsFillCheckCircleFill className="experience_details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillCheckCircleFill className="experience_details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Basic/Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillCheckCircleFill className="experience_details-icon"/>
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillCheckCircleFill className="experience_details-icon"/>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Basic/Intermediate</small>
                            </div>
                            </article>
                        <article className="experience_details">
                            <BsFillCheckCircleFill className="experience_details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillCheckCircleFill className="experience_details-icon"/>
                            <div>
                                <h4>Sass</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience