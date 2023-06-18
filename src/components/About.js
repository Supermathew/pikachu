import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import pikachuabout from '../images/Ellipse 91.svg'
import vector from '../images/Vector (2).svg'
import icon1 from '../images/icon1.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.svg'
import icon4 from '../images/icon4.svg'
import icon5 from '../images/icon5.svg'
import icon6 from '../images/icon6.svg'
import about from '../images/About.png'


const About = () => {
    return (
        <> 
        <section className="home-about">
            <div className='about-heading text-center'>
                <img src={about} alt='' className='px-2'/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-6 p-5'>
                        <div className='abt-right'>
                            <div className='abt-img'>
                                <img src={pikachuabout} alt='' />
                                <h4>About</h4>
                            </div>
                            <div className='abt-content'>
                                <p>
                                    Pikachu is tired of watching everyone play hot potato with the endless derivative Shiba Cum GMEl on Kishu Turbo Ass FlokiMoon Inu coins. The Inu’s have had their day. It’s time for the most recognizable meme in the world to take his reign as king of the memes.</p>
                                <p>Pikachu is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced, $PIKACHU is a coin for the people, forever. Fueled by pure memetic power, let $PIKACHU show you the way.</p>
                                <div className='reply'>
                                    <img src={vector} alt='' />
                                    <p>Everyone can reply</p>
                                </div>
                            </div>
                            <div className='abt-icons'>
                                <div className='icons-left'>
                                    <img src={icon1} alt='' />
                                    <img src={icon2} alt='' />
                                    <img src={icon3} alt='' />
                                    <img src={icon4} alt='' />
                                    <img src={icon5} alt='' />
                                </div>
                                <div className='icons-right'>
                                    <img src={icon6} alt='' />
                                    <Link to=''>Share</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About