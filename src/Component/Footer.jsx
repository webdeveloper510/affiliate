import React from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../assets/logo.png';

function Footer (){
    return (
        <>

<footer className="footer-area pt-65">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        
        <div className="row">
        <div className="col-md-3">
        <div className="footer-logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <p>Move work forward faster with no-code apps that perfectly match your team's agility and scale.</p>
        </div>
        </div>
        <div className="col-md-3">
        <div className="widget footer-menu">
            <h3>ABOUT US</h3>
        <ul className="menu">
              <li>
              <NavLink className="" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/product"> Product </NavLink>
                </li>
                <li>
                <NavLink to="/marketplace"> Market Place </NavLink>
                </li>
                <li>
                <NavLink to="/resources"> Resources </NavLink>
                </li>
                <li>
                <NavLink to="/"> Contact Us </NavLink>
                </li>
            </ul>
        </div>
        </div>
        <div className="col-md-3">
        <div className="widget footer-menu">
        <h3>OUR COMPANY</h3>
        <ul className="menu">
              <li>
              <NavLink className="" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/product"> Product </NavLink>
                </li>
                <li>
                <NavLink to="/marketplace"> Market Place </NavLink>
                </li>
                <li>
                <NavLink to="/resources"> Resources </NavLink>
                </li>
                <li>
                <NavLink to="/"> Shopify apps </NavLink>
                </li>
                <li>
                <NavLink to="/"> Our Services </NavLink>
                </li>
            </ul>
        </div>
        </div>
        <div className="col-md-3">
        <div className="widget footer-menu">
        <h3>PRODUCT</h3>
        <ul className="menu">
              <li>
              <NavLink className="" to="/">Features</NavLink>
              </li>
              <li>
                <NavLink to="/"> Videos </NavLink>
                </li>
                <li>
                <NavLink to="/"> Pricing </NavLink>
                </li>
                <li>
                <NavLink to="/"> Resources </NavLink>
                </li>
            </ul>
        </div>
        </div>
        
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="#">
                <i className="icofont-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright pt-18pb-5">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="copy-right">
            <p>© 2022 affiliate. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
      </>
       
    ) ;
}
  
export default Footer;