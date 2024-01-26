import React, { useState, useEffect } from 'react';
// import Icofont from 'react-icofont';
// import { useLocation } from 'react-router-dom';
import Howitwork from './Howitwork';
import growimage1 from '../assets/coontent.webp';
import getstarted from '../assets/getstarted.png'
import growimage2 from '../assets/market.webp';
import growimage3 from '../assets/online.webp';
import growimage4 from '../assets/grow5.png';
import feature1 from '../assets/Group1.avif';
import feature2 from '../assets/Group2.avif';
import feature3 from '../assets/Group3.avif';
import feature4 from '../assets/Group4.avif';
import feature5 from '../assets/Group5.avif';
import heroimage from '../assets/left-side.webp';
import growimage6 from '../assets/grow6.webp';
import arrowbtn from '../assets/btn-img.png';
import influ1 from '../assets/influ1.png';
import workimg from '../assets/workimg.png';
import watch from '../assets/watch.png';
import facebook from '../assets/socail (1).png';
import play from '../assets/play.png'
import insta from '../assets/socail (2).png';
import youtube from '../assets/socail (3).png';
import cam1 from '../assets/cam1.png'
import overviwpinkk from '../assets/overviwpinkk.png'
import extraimage from '../assets/bg-1.png';
import filter from '../assets/filter (2).png';
import over1 from '../assets/over1.png';
import over2 from '../assets/over2.png';
import over3 from '../assets/over3.png';
import ser from '../assets/ser.png'
import Testimonial from './Testimonial';
import Accordian from './Accordian';
import SliderTestimonial from './Slidertest';
import Footer from './Footer';
import axios from 'axios';

function Home() {
  const [influencer, setInfluencer] = useState([]);
  const fetchData = async () => {
    try {
      const apiUrl = `https://api.myrefera.com/campaign/inflwebsitelist/`;
      const response = await axios.get(apiUrl);
      // setInfluencer(response.data.data)
      const slicedData = response.data.data.slice(0, 3);
        setInfluencer(slicedData);
      console.log("get data =====>>", response.data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
      <div className="top-section">
        <div className="hero-section-content">
          <div className="container">
            <div className="row align-center">
              <div className="col-md-6">
                <div className="hero-content text-start">
                <h1 className="color-black">Your risk free <br></br> Influencer <span className="add-before colro-sky">Marketing</span> <br></br><span className="colro-sky">Platform</span></h1>
                  <p>Contact and expand your reach with the right content creators from different categories including: Fashion, Beauty, Health, Fitness, Travel</p>
				   <div className="row align-center">
				     <div className="col-md-6">
                  <a className="buttonfx angleindouble color-1 mb-2 free-button" href="/">
                    start For Free <img src={arrowbtn}></img> </a>
					</div>
					  <div className="col-md-6 ">
                  <a className=" video-watch" href="/">Watch a Video<span className="circle-img"><img src={watch}></img></span></a>
				  </div>
				  </div>
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
      <div className='img-extra'>
        <img src={extraimage}>

        </img>

      </div>

<div className='how-it-work'>
<div className="container">
  <div className='girl-image'>
  <div className='how-work-bg'>
    <div className='row align-center'>
<div className='col-md-4'>
<img src={workimg}></img>
<h1>How it <span className=' colro-sky'>Works</span></h1>
<p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
</div>
<div className='col-md-1'>
<div className='border-di'></div>
</div>
<div className='col-md-7'>
<Howitwork></Howitwork>
</div>
    </div>
    </div>
  </div>
  </div>
</div>
<div className='find-infulancer'>
<div className="container">
<div className='infulancer-bg'>
  <div className='row'>
    <div className="col-md-8">
    <h1 className='font-equal'>Find your Perfect<br></br>
<span className=' colro-sky'>Influencers </span></h1>
    </div>
    <div className="col-md-4">
    <div className='bg-white-search c'>
     <a href="#"> <img src={ser}></img></a>
      <input type="text"placeholder='Search Influencers'/>
    </div>
    <div class="filter-image">
<a href="">
  <img src={filter}>

  </img>
</a>
    </div>
    </div>
  </div>

</div>
</div>
<div className='influncer-info'>
<div className="container">
<div className='row'>
  <div className='col-md-3'>
    <div className='influncer-info-with orangebox'>
<div className='img-infulcer'>
<img src={influ1}></img>
</div>
<div className='name-influ'>Chiara Ferragni</div>
<div className='border-influ'></div>
<div className='count-flowers'>5.4M Followers</div>
<div className='soacial-media'>
<ul className='social-icon'>
  <li>
<a href=""><img src={facebook}></img></a>
  </li>
  <li>
<a href=""><img src={insta}></img></a>
  </li>
  <li>
  <a href=""><img src={youtube}></img></a>
  </li>
</ul>
</div>
    </div>

  </div>
  <div className='col-md-3'>
    <div className='influncer-info-with sky'>
<div className='img-infulcer'>
<img src={influ1}></img>
</div>
<div className='name-influ'>Chiara Ferragni</div>
<div className='border-influ'></div>
<div className='count-flowers'>5.4M Followers</div>
<div className='soacial-media'>
<ul className='social-icon'>
  <li>
<a href=""><img src={facebook}></img></a>
  </li>
  <li>
<a href=""><img src={insta}></img></a>
  </li>
  <li>
  <a href=""><img src={youtube}></img></a>
  </li>
</ul>
</div>
    </div>

  </div>

  <div className='col-md-3'>
    <div className='influncer-info-with pinkbox'>
<div className='img-infulcer'>
<img src={influ1}></img>
</div>
<div className='name-influ'>Chiara Ferragni</div>
<div className='border-influ'></div>
<div className='count-flowers'>5.4M Followers</div>
<div className='soacial-media'>
<ul className='social-icon'>
  <li>
<a href=""><img src={facebook}></img></a>
  </li>
  <li>
<a href=""><img src={insta}></img></a>
  </li>
  <li>
  <a href=""><img src={youtube}></img></a>
  </li>
</ul>
</div>
    </div>

  </div>

  <div className='col-md-3 '>
    <div className='influncer-info-with yellowbox'>
<div className='img-infulcer'>
<img src={influ1}></img>
</div>
<div className='name-influ'>Chiara Ferragni</div>
<div className='border-influ'></div>
<div className='count-flowers'>5.4M Followers</div>
<div className='soacial-media'>
<ul className='social-icon'>
  <li>
<a href=""><img src={facebook}></img></a>
  </li>
  <li>
<a href=""><img src={insta}></img></a>
  </li>
  <li>
  <a href=""><img src={youtube}></img></a>
  </li>
</ul>
</div>
    </div>

  </div>
<div className='all-influcer'>
<a className="buttonfx angleindouble color-1 mb-2 free-button" href="/">
View all Influencers</a>

</div>
  </div>
</div>
</div>

</div>
<div className='Campaigns'>
<div className="container">
    <div className='sec-heading'>
      <h2>Campaigns</h2>
<p>It is a long established fact that a reader will be distractedby the <br></br>readable content of a page when looking at its layout.</p>
    </div>
    <div className="container">
<div className='row'>
  <div className='col-md-3'>
    <div className='cam-outer'>
      
    <div className='camp-image'>
      <img src={cam1}>

      </img>

    </div>
    <div className='infor-cam'>
    <div className='camp-name'>
    Tea Herbal TH
    </div>
    <div className='sub-cam'>
    Rick Bewell
    </div>
<div className='cat-cam'>
Herbal Tea
  </div>
  <div class="cam-price">
  $89.00
  </div>
  </div>
  </div>
  </div>
  <div className='col-md-3'>
    <div className='cam-outer'>
      
    <div className='camp-image'>
      <img src={cam1}>

      </img>

    </div>
    <div className='infor-cam'>
    <div className='camp-name'>
    Tea Herbal TH
    </div>
    <div className='sub-cam'>
    Rick Bewell
    </div>
<div className='cat-cam'>
Herbal Tea
  </div>
  <div class="cam-price">
  $89.00
  </div>
  </div>
  </div>
  </div>
  <div className='col-md-3'>
    <div className='cam-outer'>
      
    <div className='camp-image'>
      <img src={cam1}>

      </img>

    </div>
    <div className='infor-cam'>
    <div className='camp-name'>
    Tea Herbal TH
    </div>
    <div className='sub-cam'>
    Rick Bewell
    </div>
<div className='cat-cam'>
Herbal Tea
  </div>
  <div class="cam-price">
  $89.00
  </div>
  </div>
  </div>
  </div>
  <div className='col-md-3'>
    <div className='cam-outer'>
      
    <div className='camp-image'>
      <img src={cam1}>

      </img>

    </div>
    <div className='infor-cam'>
    <div className='camp-name'>
    Tea Herbal TH
    </div>
    <div className='sub-cam'>
    Rick Bewell
    </div>
<div className='cat-cam'>
Herbal Tea
  </div>
  <div class="cam-price">
  $89.00
  </div>
  </div>
  </div>
  </div>
  </div>
</div>
  </div>

</div>


<div className='Overview'>
  <div className='Overview-outer'>

<div className="container">
  <div class="row">
    <div className='col-md-4'>
      <img src={overviwpinkk} className='img-top'>

      </img>

    </div>
    <div className='col-md-1'>

    </div>
<div className='col-md-7'>
<div className='overview-content'>
  <div className='Overview-heading'>
  Overview
  <p>It is a long established fact that a reader will be distractedby the <br></br>readable content of a page when looking at its layout.</p>
  </div>
<div className='play-img'>
<img src={play}></img>
</div>
</div>
</div>
  </div>
  </div>
  </div>

</div>


<div className='how-itgrow'>
<div className="container">
    <div className='sec-heading'>
      <h2>How It<span className=' colro-sky'> Grow</span></h2>
<p>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its layout.</p>
    </div>
    </div>
    <div class="bg-grow">
    <div className="container">
      <div className='row'>
      <div className='col-md-5'>
        <div className='left-image-grow pink-line'>
<img src={over1}></img>
        </div>

      </div>
      <div className='col-md-1'>

</div>
      <div className='col-md-5'>
      <div className='left-image-content'>
        <h3 className=' colro-sky'>Reach Influencer</h3>
        <p>Hand pick content creators to <br></br>promote your products with just a <br></br>few clicks</p>
       
        <a className="buttonfx angleindouble color-1 mb-2 free-button" href="/">
        Learn More</a>
        </div>
</div>
</div>
<div className='margin-top-60 order-change'>
<div className='row'>

<div className='col-md-6 bottom-co'>
      <div className='left-image-content'>
        <h3 className=' colro-sky'>For Marketplace</h3>
        <p>Increase your revenue stream to your <br></br>business collect recurring fees from stors<br></br> who use affeli in your Market place.</p>
       
        <a className="buttonfx angleindouble color-1 mb-2 free-button" href="/">
        Learn More</a>
        </div>
</div>
<div className='col-md-1'>

</div>
      <div className='col-md-5'>
        <div className='left-image-grow  yellow-line'>
<img src={over2}></img>
        </div>

      </div>
    
</div>

</div>


<div className='margin-top-60'>
<div className='row'>


      <div className='col-md-5'>
        <div className='left-image-grow blue-line'>
<img src={over3}></img>
        </div>

      </div>
<div className='col-md-1'>

</div>

      <div className='col-md-6'>
      <div className='left-image-content'>
        <h3 className=' colro-sky'>For Vendor</h3>
        <p> With our partners smart <br></br>payment solutions, you will get <br></br>instant payouts!</p>
       
        <a className="buttonfx angleindouble color-1 mb-2 free-button" href="/">
        Learn More</a>
        </div>
</div>
    
</div>

</div>



      </div>
    </div>
</div>


<div className='margin-top-60'>
  <div className='accordian-sec'>

  <div className="container">
      <div className='row'>
        <div className='col-md-6'>
        <div className='sec-heading left-align'>
      <h2>Get Started <span className=' colro-sky'> Quickly</span></h2>
      <p>Begin building on day one. Airtable's pre-made templates<br></br> and intuitive design help you tackle even your most<br></br> complex needs, right away.</p>
    </div>
    <img src={getstarted}></img>
        </div>

        <div className='col-md-6'>
        <Accordian />
        </div>
        </div>

        <div className='testimonials'>
          <div className='slider-test'>
         < div className='sec-heading'>
          <center>
      <h2>What People <span className=' colro-sky'> Says</span></h2>
<p>Delay rapid joy share allow age manor six. Went why far saw <br></br>many knew.
Exquisite excellent son gentleman acuteness her.</p>
</center>
    </div>
    <SliderTestimonial></SliderTestimonial>
          </div>

        </div>

</div>  
  </div>

</div>



    




   
     


  


      <Footer />
    </>

  );
}

export default Home;