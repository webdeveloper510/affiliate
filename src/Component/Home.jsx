import React from 'react';
import Icofont from 'react-icofont';
import growimage1 from '../assets/grow11.png';
import growimage2 from '../assets/grow2.svg';
import growimage3 from '../assets/grow31.png';
import feature1 from '../assets/feature-1.png';
import feature2 from '../assets/feature-2.png';
import feature3 from '../assets/feature-3.png';
import feature4 from '../assets/feature-4-1.png';
import heroimage from '../assets/top-image.png';
import { Accordion } from 'react-bootstrap-accordion'
function Home (){
    return (
        <>
        <div class="hero-area style-1">
        <div class="hero-content-wrap">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="hero-content">
                  <h1>Where does it come from ?</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <a class="buttonfx angleindouble color-1 mb-2" href="/">
                   <i class="icofont-airplane-alt"></i>Start For Free </a>
                  <a class="starting" href="/">Watch a Demo Video</a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="hero-right">
                  {/* <div class="hero-discount">
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





      <div class="feature-area pt-110pb-68" id="features">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="section-title width-80" data-aos="fade-up">
          <h2>EVERYTHING YOU NEED FOR AFFILIATE MANAGEMENT</h2>
          <p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="single-feature animation-1" data-aos="fade-right">
              <img src={feature1}  alt="feature" />
              <h2>Recruit</h2>
              <p>Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="single-feature animation-1" data-aos="fade-right">
            <img src={feature2} alt="feature" />
              <h2>Customize</h2>
              <p>Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="single-feature" data-aos="fade-up">
            <img src={feature3} alt="feature"/>
              <h2>Manage</h2>
              <p>Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="single-feature" data-aos="fade-down">
            <img src={feature4} alt="feature"/>
              <h2>Reward</h2>
              <p>Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


            <div id="video" class="video-area"  data-aos="fade-up">
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-8">
                <div class="section-title white text-center">
                    <h2>OVERVIEW </h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-12">
                <div class="video">
                  
                    <iframe width="100%" height="700" src="https://www.youtube.com/embed/W-nbsnXtSZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                   
                   
                </div>
                </div>
            </div>
            </div>
            </div>




            <div class="notification-area pt-120pb-115">
  <div class="container">
  <div class="section-title white text-center custom-color">
                    <h2>HOW TO GROW </h2>
                    <p>It is a long established fact that a reader will be distracted <br/> by the readable content of a page when looking at its layout.</p>
                </div>
    <div class="row mb-60">
      <div class="col-md-6">
        <div class="notification-img">
          <img src={growimage1} alt="notification" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="notification-content" data-aos="fade-up">
          <h3>BUILD YOUR TEAM</h3>
          <p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
          <ul>
            <li>
              <i class="icofont-check"></i>Delay rapid joy share allow age manor six.
            </li>
            <li>
              <i class="icofont-check"></i>Exquisite excellent son gentleman acuteness her.
            </li>
            <li>
              <i class="icofont-check"></i>Went why far saw many knew.
            </li>
          </ul>
          <a class="buttonfx angleindouble color-2" href="/cart">
          <i class="icofont-read-book-alt"></i> Learn More </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="notification-content" data-aos="fade-right">
          <h3>EMPOWER & MANAGE AFFILIATES</h3>
          <p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
          <ul>
            <li>
              <i class="icofont-check"></i>Delay rapid joy share allow age manor six.
            </li>
            <li>
              <i class="icofont-check"></i>Exquisite excellent son gentleman acuteness her.
            </li>
            <li>
              <i class="icofont-check"></i>Went why far saw many knew.
            </li>
          </ul>
          <a class="buttonfx angleindouble color-2" href="/cart">
          <i class="icofont-read-book-alt"></i> Learn More </a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="notification-img">
          <img src={growimage2} alt="notification" />
        </div>
      </div>
    </div>
    <div class="row mb-60">
      <div class="col-md-6">
        <div class="notification-img">
          <img src={growimage3} alt="notification" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="notification-content" data-aos="fade-up">
          <h3>GROW YOUR TEAM, GROW YOUR BUSINESS</h3>
          <p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
          <ul>
            <li>
              <i class="icofont-check"></i>Delay rapid joy share allow age manor six.
            </li>
            <li>
              <i class="icofont-check"></i>Exquisite excellent son gentleman acuteness her.
            </li>
            <li>
              <i class="icofont-check"></i>Went why far saw many knew.
            </li>
          </ul>
          <a class="buttonfx angleindouble color-2" href="/cart">
          <i class="icofont-read-book-alt"></i> Learn More </a>
        </div>
      </div>
    </div>
  </div>
</div>



<div class="faq-area pt-115pb-100" data-aos="fade-up">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="section-title white text-center">
          <h2>What Questions Do Our Customers Ask Most Often?</h2>
          <p>A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>
        </div>
      </div>
    </div>
    <div class="row">
    <Accordion /* Props */ />
      <div class="col-lg-6">
        <div class="proone-accordian">
          <div class="accordion">
            <div class="card ">
              <div class="card-header">
                <a href="#collapseOne">
                  <h5 class="mb-0">
                    <span class="icon-left">1</span>How Are The Packages Updated ? <i class="my icofont-plus"></i>
                  </h5>
                </a>
              </div>
              <div class="collapse">
                <div class="card-body">
                  <p>There are many variations of passages of available, but the majority have suffered alteration in , by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
              </div>
            </div>
            <div class="card ">
              <div class="card-header">
                <a href="#collapsetwo">
                  <h5 class="mb-0">
                    <span class="icon-left">2</span>How Are The Packages Updated ? <i class="my icofont-plus"></i>
                  </h5>
                </a>
              </div>
              <div class="collapse">
                <div class="card-body">
                  <p>There are many variations of passages of available, but the majority have suffered alteration in , by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
              </div>
            </div>
            <div class="card ">
              <div class="card-header">
                <a href="#collapse3">
                  <h5 class="mb-0">
                    <span class="icon-left">3</span>How Are The Packages Updated ? <i class="my icofont-plus"></i>
                  </h5>
                </a>
              </div>
              <div class="collapse">
                <div class="card-body">
                  <p>There are many variations of passages of available, but the majority have suffered alteration in , by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
              </div>
            </div>
            <div class="card active">
              <div class="card-header">
                <a href="#collapse4">
                  <h5 class="mb-0">
                    <span class="icon-left">4</span>How Are The Packages Updated ? <i class="my icofont-plus"></i>
                  </h5>
                </a>
              </div>
              <div class="collapse show">
                <div class="card-body">
                  <p>There are many variations of passages of available, but the majority have suffered alteration in , by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>

    ) ;
}
  
export default Home;