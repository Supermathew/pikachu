import React from 'react'
import buy from '../images/How To Buy_.png'
import dots from '../images/dots.svg'
import ProfilePic from '../images/ProfilePic1.svg'
import pikachucoin from '../images/PicachuCoin.svg'
import icon1 from '../images/icon1.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.svg'
import icon4 from '../images/icon4.svg'

const Buy = () => {
  return (
    <>
    <section className='buy'>
        <div className='tweets'>
          <div className='tweet'>
            <div className='tweet-left'>
              <div className='tweet-img'>
                <img src={ProfilePic} alt='' />
              </div>
              <div className='username'>
                <div className='username-top'>
                  <h4>Pikachu</h4>
                  <img src={pikachucoin} alt='' />
                </div>
                <p className='usernam'>@pikachu_guide</p>
              </div>
            </div>
            <div className='tweet-right'>
              <img src={dots} alt='' />
            </div>
          </div>
          <div className='tweet-content'>
            <h4>Create a Wallet</h4>
            <p>Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.</p>
            <div className='timing'>
              <p>8:46 AM Oct 25,2018</p>
            </div>
            <div className='share-buttons'>
              <img src={icon1} alt='' />
              <img src={icon2} alt='' />
              <img src={icon3} alt='' />
              <img src={icon4} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Buy