import React from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header (){
    return (
        <>

<header className="header-area absulate-header cssanimation d-none d-xl-block navbar-fixed-top sticky fadeInTop animated">
  <div className="container">
    <div className="row">
      <div className="col-9 col-md-3">
        <div className="site-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="col-md-3 col-md-9">
        <div className="main-menu-wrap">
          <nav className="proone-nav">
            <ul className="menu">
              <li>
              <NavLink className="" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/product"> Product </NavLink>
                </li>
                <li>
                <span> Market Place </span>
                <ul class="subpage">
                <li><NavLink to="/marketplace"> Home </NavLink></li>
                <li><NavLink to="/offers"> Offers </NavLink></li>
                <li><NavLink to="/products"> Products </NavLink></li>
                <li><NavLink to="/vendor-signup"> Vendor Login/  Signup </NavLink></li>
                </ul>
                </li>
                <li>
                <NavLink to="/resources"> Resources </NavLink>
                </li>
                <li>
                <NavLink to="/login" className='login'> Login</NavLink>
                </li>
                <li>
                <NavLink to="/signup" className='buttonfx angleindouble color-1 Signup'> <i class="icofont-sign-in"></i> SignUp</NavLink>
                </li>
            </ul>
          </nav>
        </div>
        <div className="mobile-menu-area"></div>
      </div>
    </div>
  </div>
</header>
      </>
       
    ) ;
}
  
export default Header;