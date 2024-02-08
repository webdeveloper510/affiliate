import React from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../assets/logo.png';
import social1 from '../assets/social1 (1).png';
import social2 from '../assets/social1 (2).png';
import social3 from '../assets/social1 (3).png';
import social4 from '../assets/social1 (4).png';
function Footer (){
    return (
        <>
<div className='newslteer'>
  <div className='container'>
<div className='suscribe-news'>
  <div className='row  align-center'>
    <div className='col-md-6'>
<h2>Subscribe to Newsletter</h2>
<p>Ipsum vel nobis doloremque est aut non accusantium vero <br></br>molestias. Et est minima dolorem eum modi atque sint nobis. </p>
    </div>
    <div className='col-md-6'>
<div className="joinn-div">
  <input type="text" placeholder='Enter email address'></input>
  <button className='Join'>Join</button>
</div>
</div>
  </div>

</div>
  </div>

</div>
<footer className="footer-area pt-65">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        
        <div className="row1">
          <div className='col-20'>
          <div className="footer-logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <p>Move work forward faster with no-code apps that perfectly match your team's agility and scale.</p>
        </div>
          </div>
          <div className='col-20'>
          <h3 class="footer-heading">Company</h3>
          <ul className="menu-footer">
              <li>
              <NavLink className="" to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/product"> Features </NavLink>
                </li>
                <li>
                <NavLink to="/marketplace"> Works          
</NavLink>
                </li>
                <li>
                <NavLink to="/resources"> Career </NavLink>
                </li>
               
            </ul>

          </div>
          <div className='col-20'>
          <h3 class="footer-heading">Help</h3>
          <ul className="menu-footer">
              <li>
              <NavLink className="" to="/">Customer Support
</NavLink>
              </li>
              <li>
                <NavLink to="/product"> Terms & Conditions </NavLink>
                </li>
                <li>
                <NavLink to="/marketplace"> Delivery Details</NavLink>
                </li>
                <li>
                <NavLink to="/resources"> 
Privacy Policy </NavLink>
                </li>
              
            </ul>
          </div>
          {/* <div className='col-20'>
          <h3 class="footer-heading">Resources</h3>
          <ul className="menu-footer">
              <li>
              <NavLink className="" to="/">Free eBooks</NavLink>
              </li>
              <li>
                <NavLink to="/"> Development Tutorial </NavLink>
                </li>
                <li>
                <NavLink to="/"> How to - Blog </NavLink>
                </li>
                <li>
                <NavLink to="/"> Youtube Playlist </NavLink>
                </li>
            </ul>
          </div> */}
          <div className='col-20'>
          <h3 class="footer-heading">Contact Us</h3>
<div className='row'>
  <div className='col-md-con'>
<h3>Call us</h3>
<a href="tel:(+1) 456-493">(+1) 456-4933</a>
  </div>
  <div className='col-md-con'>
<h3>Email us</h3>
<a  href="mailto:mail@example.com">mail@example.com</a>

</div>

</div>
</div>
      
       
      
      </div>
    </div>
  </div>
  <div className='footer-border'></div>
<div className='copyright-div'>
<div className='row'>
<div className='col-md-6'>
<div class="footer-socialicon">
  Follow Us:
  <ul>
  <li><a href="/"><img src={social1}></img></a></li>
  <li><a href="/"><img src={social2}></img></a></li>
  <li><a href="/"><img src={social3}></img></a></li>

    <li><a href="/"><img src={social4}></img></a></li>
  </ul>
</div>
</div>
<div className='col-md-6'>
  <span class="footer-align">© Copyright 2024, All Rights Reserved</span>


</div>
</div>
</div>
</div>



</footer>
      </>
       
    ) ;
}
  
export default Footer;