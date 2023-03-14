import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import testi1 from '../assets/testi-1.png';
import testi2 from '../assets/testi-2.png';
function Testimonial (){

    

    return (
        <>
        <div className='testimonial-area pt-110'>
        <div className='container'>
<div className='row'>
<div className="section-title width-80" data-aos="fade-up">
          <h2>WHAT PEOPLE SAYS</h2>
          <p>Delay rapid joy share allow age manor six. Went why far saw many knew.<br></br> Exquisite excellent son gentleman acuteness her.</p>
        </div>
<Carousel>
<div>
  <div className="single-testimonial text-center" tabindex="-1">
    <div className="testi-img">
    <img src={testi1} />
    </div>
    <div className="testi-content">
      <i className="icofont-quote-left"></i>
      <p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
      <ul>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
      </ul>
      <h5>Christopher</h5>
      <h6>July 28, 2020</h6>
    </div>
  </div>
</div>
<div>
  <div className="single-testimonial text-center" tabindex="-1">
    <div className="testi-img">
    <img src={testi2} />
    </div>
    <div className="testi-content">
      <i className="icofont-quote-left"></i>
      <p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
      <ul>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
      </ul>
      <h5>Christopher</h5>
      <h6>July 28, 2020</h6>
    </div>
  </div>
</div>
<div>
  <div className="single-testimonial text-center" tabindex="-1">
    <div className="testi-img">
    <img src={testi1} />
    </div>
    <div className="testi-content">
      <i className="icofont-quote-left"></i>
      <p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
      <ul>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
      </ul>
      <h5>Christopher</h5>
      <h6>July 28, 2020</h6>
    </div>
  </div>
</div>

<div>
  <div className="single-testimonial text-center" tabindex="-1">
    <div className="testi-img">
    <img src={testi2} />
    </div>
    <div className="testi-content">
      <i className="icofont-quote-left"></i>
      <p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
      <ul>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
      </ul>
      <h5>Christopher</h5>
      <h6>July 28, 2020</h6>
    </div>
  </div>
</div>

<div>
  <div className="single-testimonial text-center" tabindex="-1">
    <div className="testi-img">
    <img src={testi2} />
    </div>
    <div className="testi-content">
      <i className="icofont-quote-left"></i>
      <p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
      <ul>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
        <li>
          <i className="icofont-star"></i>
        </li>
      </ul>
      <h5>Christopher</h5>
      <h6>July 28, 2020</h6>
    </div>
  </div>
</div>
      </Carousel>
      </div>
      </div>
      </div>
      </>
       
    ) ;
}
  
export default Testimonial;