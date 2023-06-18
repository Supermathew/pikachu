import React from 'react'
import technoimg from '../images/Group 543.svg'
import elonmusk from '../images/elonmusk.jpg'
import verified from '../images/Certified.svg'
import pikachucoin from '../images/PicachuCoin.svg'
import icon1 from '../images/Message.svg'
import icon2 from '../images//Retweet.svg'
import icon3 from '../images/Vector.svg'
import icon4 from '../images/upload.svg'


const Techo = () => {
    return (
        <>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='techno-left'>
                            <h5>Tokenomics</h5>
                            <h4 className='price'>320,000,000,000</h4>
                            <div className='tweet-card border-half border-cards'>
                                <div className='profile'>
                                    <div className='profile-img'>
                                        <img src={elonmusk} alt='' />
                                    </div>
                                    <div className='profile-card'>
                                        <div className='profil-name'>
                                            <p>Elon Musk</p>
                                            <img src={verified} alt='' />
                                            <img src={pikachucoin} alt='' />
                                        </div>
                                        <div className='username'><p>@elonmusk</p></div>
                                    </div>
                                </div>
                                <div className='tweet-cont'>
                                    <p>No Taxes, No Bullshit. It’s that simple.</p><br></br>
                                    <p>91.1% of the tokens were sent to the liquidity pool, LP tokens were burnt, and contract is renounced. The remaining 8.9% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools. This wallet is easily trackable with the ENS name “pepecexwallet.eth”</p>
                                </div>
                                <div className='tweet-icon'>
                                    <img src={icon1} alt='' />
                                    <img src={icon2} alt='' />
                                    <img src={icon3} alt='' />
                                    <img src={icon4} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='techmoimg'>
                            <img src={technoimg} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Techo