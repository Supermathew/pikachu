import React from 'react'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import './home.css'
import elonmusk from '../images/elonmusk.jpg'
import tweetimg from '../images/tweetimg.png'
import rightimg from '../images/Trends.svg'
import setting from '../images/Gear Settings.svg'
import down from '../images/down.svg'
import verified from '../images/Certified.svg'
import pikachucoin from '../images/PicachuCoin.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import message from '../images/Message.svg'
import retweet from '../images/Retweet.svg'
import like from '../images/Vector.svg'
import upload from '../images/upload.svg'
import roadcard1 from '../images/roadcard1.svg'
import about from '../images/About.png'
import buy from '../images/How To Buy_.png'
import Buy from '../components/Buy'
import Techo from '../components/Techo'
import techno from '../images/Tokenomics.png'
import roadmap from '../images/Roadmap.png'
import RoadMap from '../components/RoadMap'
import About from '../components/About'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pikachu</title>
        <meta property="og:title" content="Pikachu" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <div className="home-container01">
          <div>
            <img alt="image" src="/group%20548-200h.png" className="nav-logo" />
          </div>
          <div className="home-container03">
            <nav className="navbar">
              <a href="https://example.com" className="nav-link">
                Home
              </a>
              <a href="https://example.com" className="nav-link">
                <span>Token</span>
                <br></br>
              </a>
              <a href="https://example.com" className="nav-link">
                <span>How to buy</span>
                <br></br>
              </a>
              <a href="https://example.com" className="nav-link">
                Metaverse
              </a>
              <a href="https://example.com" className="nav-link-end nav-link">
                Roadmap
              </a>
            </nav>
            <button className="button button-warning btn-buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </header>
      <section className="home-hero">
        <div className="home-container04">
          <div className="home-grid">
            <div className="home-grid-start">
              <div className="home-grid-wrapper">
                <div className="home-container05">
                  <img
                    alt="image"
                    src="/picachucoin03%204-200h.png"
                    className="home-image01"
                  />
                </div>
                <div>
                  <ul className="list list-social">
                    <li className="list-social-item">
                      <img
                        alt="image"
                        src="/image%2032-200h.png"
                        className="list-social-icon"
                      />
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="list-social-text"
                      >
                        Twitter
                      </a>
                    </li>
                    <li className="list-social-item">
                      <img
                        alt="image"
                        src="/image%2036-200h.png"
                        className="list-social-icon"
                      />
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="list-social-text"
                      >
                        Telegram
                      </a>
                    </li>
                    <li className="list-social-item">
                      <img
                        alt="image"
                        src="/image%2033-200h.png"
                        className="list-social-icon"
                      />
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="list-social-text"
                      >
                        Dextools
                      </a>
                    </li>
                    <li className="list-social-item">
                      <img
                        alt="image"
                        src="/image%2034-200h.png"
                        className="list-social-icon"
                      />
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="list-social-text"
                      >
                        Etherscan
                      </a>
                    </li>
                    <li className="list-social-item">
                      <img
                        alt="image"
                        src="/image%2035-200h.png"
                        className="list-social-icon"
                      />
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="list-social-text"
                      >
                        Uniswap
                      </a>
                    </li>
                    <li className="list-social-item">
                      <img
                        alt="image"
                        src="/image%2029-200h.png"
                        className="list-social-icon"
                      />
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="list-social-text"
                      >
                        Coinmarket
                      </a>
                    </li>
                    <li className="list-social-item-end list-social-item">
                      <img
                        alt="image"
                        src="/image%2032-200h.png"
                        className="list-social-icon"
                      />
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="list-social-text"
                      >
                        More
                      </a>
                    </li>
                  </ul>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link12 button button-warning"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="home-grid-center">
              <div className='twitter-card-top'>
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
              </div>
              <div className='card-content'>
                <p>How'd they know!?</p>
              </div>
              <div className='cardmaincontent'>
                <p>Horoscope: You're probably<br></br> breathing right now</p>
                <p className='secnond'>People:</p>
              </div>
              <div className='top-card-image'>
                <img src={tweetimg} alt='' />
              </div>
              <div className='timming'>
                <p>8:46 AM Oct 25,2018</p>
              </div>
              <div className='tweet-icons'>
                <Link to='#'>
                  <img src={message} alt='message' title='message' />
                </Link>
                <Link to='#'>
                  <img src={retweet} alt='retweet' title='retweet' />
                </Link>
                <Link to='#'>
                  <img src={like} alt='like' title='like' />
                </Link>
                <Link to='#'>
                  <img src={upload} alt='upload' title='upload' />
                </Link>
              </div>
            </div>
            <div className="home-grid-end">
              <div className='rightsidecard'>
                <img src={rightimg} alt='' />
              </div>
              <div className='twitter-trends'>
                <div className='twitter-head'>
                  <p>Twitter Trends</p>
                  <div className='setting-img'>
                    <img src={setting} alt='' />
                  </div>
                </div>
                <div className='trending-tweet'>
                  <div className='trending-left'>
                    <p>1. trending</p>
                    <p className='mainhead'>#CryptoPikachu</p>
                    <p>456k tweets</p>
                  </div>
                  <div className='trending-right'>
                    <img src={down} alt='' />
                  </div>
                </div>
                <div className='trending-tweet'>
                  <div className='trending-left'>
                    <p>1. trending</p>
                    <p className='mainhead'>#CryptoPikachu</p>
                    <p>456k tweets</p>
                  </div>
                  <div className='trending-right'>
                    <img src={down} alt='' />
                  </div>
                </div> <div className='trending-tweet'>
                  <div className='trending-left'>
                    <p>1. trending</p>
                    <p className='mainhead'>#CryptoPikachu</p>
                    <p>456k tweets</p>
                  </div>
                  <div className='trending-right'>
                    <img src={down} alt='' />
                  </div>
                </div>
                <div className='trending-tweet'>
                  <div className='trending-left'>
                    <p>1. trending</p>
                    <p className='mainhead'>#CryptoPikachu</p>
                    <p>456k tweets</p>
                  </div>
                  <div className='trending-right'>
                    <img src={down} alt='' />
                  </div>
                </div>
                <div className='show text-primary text-center'>
                  <Link to="#" className=''>Show more</Link>
                </div>
              </div>

              <div className='twitter-trends'>
                <div className='twitter-head'>
                  <p>Twitter Trends</p>
                </div>
                <div className='profiles'>
                  <div className='profile-left'>
                    <div className='profile-img'>
                      <img src={elonmusk} alt='' />
                    </div>
                    <div className='profile-username'>
                      <div className='profil-name'>
                        <p className='mainhead'>McFly</p>
                        <img src={verified} />
                      </div>
                      <p>@lavremcfly</p>
                    </div>
                  </div>
                  <div className='icon'>
                    <Link to="#">Follow</Link>
                  </div>
                </div>
                <div className='profiles'>
                  <div className='profile-left'>
                    <div className='profile-img'>
                      <img src={elonmusk} alt='' />
                    </div>
                    <div className='profile-username'>
                      <div className='profil-name'>
                        <p className='mainhead'>McFly</p>
                        <img src={verified} />
                      </div>
                      <p>@lavremcfly</p>
                    </div>
                  </div>
                  <div className='icon'>
                    <Link to="#">Follow</Link>
                  </div>
                </div>
                <div className='profiles'>
                  <div className='profile-left'>
                    <div className='profile-img'>
                      <img src={elonmusk} alt='' />
                    </div>
                    <div className='profile-username'>
                      <div className='profil-name'>
                        <p className='mainhead'>McFly</p>
                        <img src={verified} />
                      </div>
                      <p>@lavremcfly</p>
                    </div>
                  </div>
                  <div className='icon'>
                    <Link to="#">Follow</Link>
                  </div>
                </div>
                <div className='show text-primary text-center'>
                  <Link to="#" className=''>Show more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <About />
      <section className='buy-section pt-5'>
        <div className='about-heading text-center p-4'>
          <img src={buy} alt='' />
        </div>
        <Buy />
        <Buy />
        <Buy />
        <div className='buy-button text-center'>
          <Link to=''>Buy Now</Link>
        </div>
      </section>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='about-heading text-center p-5'>
              <img src={techno} alt='' className='width-30percent'/>
            </div>
          </div>
        </div>
      </div>
      <Techo />
      <div className='container p-5'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='about-heading text-center p-5'>
              <img src={roadmap} alt='' className='width-30percent'/>
            </div>
          </div>
        </div>
      </div>
      <RoadMap cardimg={roadcard1}/>
      <section className="home-contact-us">
        <div className="home-contact-wrapper">
          <div className='about-heading text-center'>
            <img
              alt="image"
              src="/contact%20us-200h.png"
              className="home-image10"
            />
          </div>
          <div className="home-logo">
            <img
              alt="image"
              src="/group%20548-200h.png"
              className="home-image11"
            />
          </div>
          <div className="home-social-buttons">
            <ul className="home-list1 list btns-social">
              <li className="btns-social-item">
                <img
                  alt="image"
                  src="/external/image%2032-200h-200h.png"
                  className="btns-social-icon"
                />
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btns-social-text"
                >
                  Twitter
                </a>
              </li>
              <li className="btns-social-item">
                <img
                  alt="image"
                  src="/external/image%2036-200h-200h.png"
                  className="btns-social-icon"
                />
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btns-social-text"
                >
                  Telegram
                </a>
              </li>
              <li className="btns-social-item">
                <img
                  alt="image"
                  src="/discord-200h.png"
                  className="btns-social-icon object-contain"
                />
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btns-social-text"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div className="home-tweet-container">
            <div className="card-tweet">
              <div className="card-tweet-head">
                <div className='profilesss'>
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
              </div>
              <div className="card-tweet-body">
                <p className="home-text4"> Hehe</p>
                <div className="home-container09">
                  <img
                    alt="image"
                    src="/telegram-cloud-photo-size-2-5210739742273031385-x%201-1500w.png"
                    className="img"
                  />
                </div>
              </div>
              <div className="card-tweet-foot">
                <p className="card-tweet-time">8:46 AM · Oct 25, 2018</p>
                <div className="card-tweet-foot-wrapper">
                  <div className="card-tweet-foot-icon">
                    <Script
                      html={`<span class="card-tweet-foot-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.53477 0.681328L6.42377 0.673828H6.42227C3.14177 0.673828 0.572266 3.24408 0.572266 6.52533C0.572266 9.59883 2.96177 11.9298 6.17102 12.0528V14.9238C6.17102 15.0048 6.20402 15.1383 6.26102 15.2261C6.36752 15.3948 6.54902 15.4863 6.73502 15.4863C6.83852 15.4863 6.94277 15.4578 7.03652 15.3978C7.23452 15.2718 11.8913 12.2928 13.1025 11.2683C14.529 10.0608 15.3825 8.29083 15.3848 6.53433V6.52158C15.3803 3.24633 12.8123 0.681328 9.53477 0.680578V0.681328ZM12.375 10.4103C11.5245 11.1303 8.72852 12.9641 7.29602 13.8926V11.5023C7.29602 11.1918 7.04477 10.9398 6.73352 10.9398H6.43652C3.69152 10.9398 1.69802 9.08283 1.69802 6.52533C1.69802 3.87483 3.77402 1.79883 6.42302 1.79883L9.53327 1.80633H9.53477C12.1838 1.80633 14.2598 3.88083 14.2613 6.52833C14.259 7.96083 13.5548 9.41133 12.3758 10.4103H12.375Z" fill="#828282"/>
</svg></span>
`}
                    ></Script>
                  </div>
                  <div className="card-tweet-foot-icon">
                    <Script
                      html={`<span class="card-tweet-foot-icon"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8277 9.7525C17.6087 9.53275 17.2524 9.53275 17.0327 9.7525L15.3677 11.4175V3.7375C15.3677 2.1865 14.1054 0.924997 12.5552 0.924997H8.16766C7.85716 0.924997 7.60516 1.177 7.60516 1.4875C7.60516 1.798 7.85716 2.05 8.16766 2.05H12.5552C13.4852 2.05 14.2427 2.8075 14.2427 3.7375V11.4175L12.5777 9.7525C12.3579 9.53275 12.0017 9.53275 11.7827 9.7525C11.5637 9.97225 11.5622 10.3285 11.7827 10.5475L14.4077 13.1725C14.5164 13.2827 14.6604 13.3375 14.8052 13.3375C14.9499 13.3375 15.0924 13.2835 15.2027 13.1725L17.8277 10.5475C18.0482 10.3285 18.0482 9.97225 17.8277 9.7525ZM9.83266 12.2125H5.44516C4.51516 12.2125 3.75766 11.455 3.75766 10.525V2.845L5.42266 4.51C5.53366 4.62025 5.67766 4.675 5.82166 4.675C5.96566 4.675 6.10966 4.62025 6.21916 4.51C6.43891 4.29025 6.43891 3.934 6.21916 3.715L3.59416 1.09C3.37441 0.869497 3.01816 0.869497 2.79916 1.09L0.174164 3.715C-0.0463359 3.934 -0.0463359 4.29025 0.174164 4.51C0.394664 4.72975 0.749414 4.72975 0.969164 4.51L2.63416 2.845V10.525C2.63416 12.076 3.89641 13.3375 5.44666 13.3375H9.83416C10.1447 13.3375 10.3967 13.0855 10.3967 12.775C10.3967 12.4645 10.1439 12.2125 9.83416 12.2125H9.83266Z" fill="#828282"/>
</svg>
</span>
`}
                    ></Script>
                  </div>
                  <div className="card-tweet-foot-icon">
                    <Script
                      html={`<span class="card-tweet-foot-icon"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00039 14.2285H7.98989C6.05264 14.1925 0.462891 9.14197 0.462891 4.35847C0.462891 2.06047 2.35664 0.0429688 4.51514 0.0429688C6.23264 0.0429688 7.38764 1.22797 7.99964 2.09047C8.61014 1.22947 9.76514 0.0429688 11.4834 0.0429688C13.6434 0.0429688 15.5364 2.06047 15.5364 4.35922C15.5364 9.14122 9.94589 14.1917 8.00864 14.227H8.00039V14.2285ZM4.51589 1.16872C2.95589 1.16872 1.58864 2.65972 1.58864 4.35997C1.58864 8.66497 6.86414 13.057 8.00114 13.1035C9.13964 13.057 14.4136 8.66572 14.4136 4.35997C14.4136 2.65972 13.0464 1.16872 11.4864 1.16872C9.59039 1.16872 8.53139 3.37072 8.52239 3.39247C8.34989 3.81397 7.65539 3.81397 7.48214 3.39247C7.47164 3.36997 6.41339 1.16872 4.51664 1.16872H4.51589Z" fill="#828282"/>
</svg>
</span>
`}
                    ></Script>
                  </div>
                  <div className="card-tweet-foot-icon">
                    <Script
                      html={`<span class="card-tweet-foot-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1479 4.6025L8.39788 0.852496C8.17813 0.632746 7.82188 0.632746 7.60288 0.852496L3.85288 4.6025C3.63237 4.82225 3.63237 5.17849 3.85288 5.3975C4.07338 5.6165 4.42813 5.618 4.64788 5.3975L7.43788 2.6075V10.25C7.43788 10.5605 7.68988 10.8125 8.00038 10.8125C8.31088 10.8125 8.56288 10.5605 8.56288 10.25V2.6075L11.3529 5.3975C11.4624 5.50775 11.6064 5.5625 11.7504 5.5625C11.8944 5.5625 12.0384 5.5085 12.1479 5.3975C12.3676 5.17775 12.3676 4.82225 12.1479 4.6025Z" fill="#828282"/>
<path d="M13.781 15.458H2.219C1.271 15.458 0.5 14.687 0.5 13.739V9.5C0.5 9.1895 0.752 8.9375 1.0625 8.9375C1.373 8.9375 1.625 9.1895 1.625 9.5V13.739C1.625 14.0668 1.89125 14.333 2.219 14.333H13.781C14.1088 14.333 14.375 14.0668 14.375 13.739V9.5C14.375 9.1895 14.627 8.9375 14.9375 8.9375C15.248 8.9375 15.5 9.1895 15.5 9.5V13.739C15.5 14.687 14.729 15.458 13.781 15.458Z" fill="#828282"/>
</svg>
</span>
`}
                    ></Script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-footer-wrapper">
          <p className="text-copyright">
            © 2023 by Pikachu. All rights reserved!
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
