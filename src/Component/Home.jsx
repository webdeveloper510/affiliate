import React from 'react';
import Icofont from 'react-icofont';
import { useLocation } from 'react-router-dom';
import growimage1 from '../assets/coontent.webp';
import growimage2 from '../assets/market.webp';
import growimage3 from '../assets/online.webp';
import growimage4 from '../assets/grow5.png';
import feature1 from '../assets/Group1.avif';
import feature2 from '../assets/Group2.avif';
import feature3 from '../assets/Group3.avif';
import feature4 from '../assets/Group4.avif';
import feature5 from '../assets/Group5.avif';
import heroimage from '../assets/top-image.png';
import growimage6 from '../assets/grow6.webp';
import  Testimonial from './Testimonial';
import  Accordian from './Accordian';
import  Footer from './Footer';

function Home (){
    return (
        <>
        <div className="hero-area style-1">
        <div className="hero-content-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="hero-content text-start">
                  <h1>Your Risk Free <br></br> Influencer Marketing <br></br>Platform</h1>
                  <p>Contact and expand your reach with the right content creators from different categories including: Fashion, Beauty, Health, Fitness, Travel</p>
                  <a className="buttonfx angleindouble color-1 mb-2" href="/">
                   <i className="icofont-airplane-alt"></i>Start For Free </a>
                  <a className="starting" href="/">Watch a Demo Video</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hero-right">
                  {/* <div className="hero-discount">
                    <h1>25 <sup>%</sup>
                      <span>OFF</span>
                    </h1>
                    <p>ONLY THIS WEEK</p>
                  </div> */}

                  <img src={heroimage} alt="hero-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="feature-area pt-110pb-68" id="features">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="section-title width-80" data-aos="fade-up">
          <h2>HOW IT WORKS</h2>
          <p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="single-feature animation-1 d-flex flex-column justify-content-start align-items-start" data-aos="fade-right">
              <img src={feature1}  alt="feature" />
              <h3>Pick one or more influencers</h3>
              <p>Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-feature animation-1 d-flex flex-column justify-content-start align-items-start" data-aos="fade-right">
            <img src={feature2} alt="feature" />
              <h3>Fill out your store and product info</h3>
              <p>Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="single-feature d-flex flex-column justify-content-start align-items-start" data-aos="fade-up">
            <img src={feature3} alt="feature"/>
              <h3>Request <br></br>Campaign</h3>
              <p>Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-feature d-flex flex-column justify-content-start align-items-start" data-aos="fade-down">
            <img src={feature4} alt="feature"/>
              <h3>Once accepted, Share the tracking coupon to the influencer</h3>
              <p>Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="single-feature  d-flex flex-column justify-content-start align-items-start" data-aos="fade-up">
            <img src={feature5} alt="feature"/>
              <h3>Watch your sales grow</h3>
              <p>Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


            <div id="video" className="video-area"  data-aos="fade-up">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-8">
                <div className="section-title white text-center">
                    <h2>OVERVIEW </h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12">
                <div className="video">
                  
                  <img src={growimage2} alt="markte place video"/>          
                   
                </div>
                </div>
            </div>
            </div>
            </div>




            <div className="notification-area pt-120pb-115">
  <div className="container">
  <div className="section-title white text-center custom-color">
                    <h2>HOW TO GROW </h2>
                    <p>It is a long established fact that a reader will be distracted <br/> by the readable content of a page when looking at its layout.</p>
                </div>
    <div className="row mb-60">
      <div className="col-md-6">
        <div className="notification-img">
          <img src={growimage1} alt="notification" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="notification-content" data-aos="fade-up">
          <h3>Reach Influencers</h3>
          <p>Hand pick content creators to promote your products with just a few clicks</p>
         
          <a className="buttonfx angleindouble color-2" href="/">
          <i className="icofont-read-book-alt"></i> Learn More </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="notification-content" data-aos="fade-right">
          <h3>For Marketplace</h3>
          <p>Increase your revenue stream to your business collect recurring fees from stors who use affeli in your Market place.</p>
          
          <a className="buttonfx angleindouble color-2" href="/">
          <i className="icofont-read-book-alt"></i> Learn More </a>
        </div>
      </div>
      <div className="col-md-6">
        <div className="notification-img">
          <img src={growimage2} alt="notification" />
        </div>
      </div>
    </div>
    <div className="row mb-60">
      <div className="col-md-6">
        <div className="notification-img">
          <img src={growimage3} alt="notification" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="notification-content" data-aos="fade-up">
          <h3>For Vendor</h3>
          <p>With our partners smart payment solutions, you will get instant payouts!</p>
          
          <a className="buttonfx angleindouble color-2" href="/cart">
          <i className="icofont-read-book-alt"></i> Learn More </a>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="faq-area pt-115pb-100" data-aos="fade-up">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="section-title white text-center">
          <h2>Get started quickly</h2>
          <p> Begin building on day one. Airtable's pre-made templates and intuitive design help you tackle even your most complex needs, right away.</p>
        </div>
      </div>
    </div>


    <div className="row">
      <div className="col-lg-6">
     <Accordian />
      </div>
      <div className="col-lg-6">
      <img src={growimage6} alt="notification" />
        </div>

    </div>
  </div>
</div>

<Testimonial />


<section className="google-assistant pt-120 pb-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title text-center">
        <h2>CORE VALUES</h2>
        <p>Delay rapid joy share allow age manor six. Went why far saw many knew.<br></br> Exquisite excellent son gentleman acuteness her.</p>
        </div>
      </div>
    </div>
    <div className="row text-center">
   
      <div className="col-lg-6 align-self-center">
        <div className="content-part">
          <div className="google-icon">
            <div className="image-wrapper">
            <i class="icofont-hand-drag1"></i>
            </div>
            <p>EASY TO USE</p>
          </div>
          <div className="google-icon">
            <div className="image-wrapper">
            <i class="icofont-tick-boxed"></i>
            </div>
            <p>RELIABLE</p>
          </div>
          <div className="google-icon">
            <div className="image-wrapper">
            <i class="icofont-dart"></i>
            </div>
            <p>ACCURATE</p>
          </div>
          <div className="google-icon">
            <div className="image-wrapper">
            <i class="icofont-database"></i>
            </div>
            <p>CUSTOMIZABLE</p>
          </div>
          <div className="google-icon">
            <div className="image-wrapper">
            <i class="icofont-unique-idea"></i>
            </div>
            <p>INNOVATIVE</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="img-wrap">
        <img src={growimage4} alt="notification" />
        </div>
      </div>
    </div>
  </div>
</section>


<Footer/>
</>

    ) ;
}
  
export default Home;