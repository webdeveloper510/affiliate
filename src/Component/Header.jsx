import React from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../assets/logo.png';

function Home (){
    return (
        <>

<header class="header-area absulate-header cssanimation d-none d-xl-block navbar-fixed-top sticky fadeInTop animated">
  <div class="container">
    <div class="row">
      <div class="col-9 col-md-3">
        <div class="site-logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
      </div>
      <div class="col-3 col-md-9">
        <div class="main-menu-wrap">
          <nav class="proone-nav">
            <ul class="menu">
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
                <NavLink to="/login" className='login'> Login</NavLink>
                </li>
            </ul>
          </nav>
        </div>
        <div class="mobile-menu-area"></div>
      </div>
    </div>
  </div>
</header>
      </>
       
    ) ;
}
  
export default Home;