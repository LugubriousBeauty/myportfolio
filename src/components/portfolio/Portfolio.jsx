import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/phonebook.jpg'
import IMG2 from '../../assets/VT.jpg'
import IMG3 from '../../assets/WT.jpg'


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My recent work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt="image1" />
                    </div>
                    <h3>Phonebook</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/LugubriousBeauty/phonebook" className="btn" target='_blank'>Github</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG2} alt="image1" />
                    </div>
                    <h3>Anecdote voting system</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/LugubriousBeauty/anecdotevoting" className="btn" target='_blank'>Github</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG3} alt="image1" />
                    </div>
                    <h3>Countries' data reacher</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com/LugubriousBeauty/countriesdata" className="btn" target='_blank'>Github</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio