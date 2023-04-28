import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { API } from '../../config/Api';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// Images
import CampaignOverview from '../../assets/campaign-over.png';
import Manage from '../../assets/manage.png';
import CampNew from '../../assets/campaign-new.png';
import MarketPlace from '../../assets/marketplace.png';
import Coupon from '../../assets/coupon.png';
import AnalyticsImg from '../../assets/analytics.png';
import SalesImg from '../../assets/sales.png';
import ProfileImg from '../../assets/profile.png';
import User from '../../assets/user.png';
import CampList from './CampList';

const SideBar = () => {
    const userName = localStorage.getItem("username");
  return (
    <div className="sidebar">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3} className='side-menu py-4'>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item className='d-flex align-items-center mb-4 px-3 user'>
                        <img src={User} alt='notification' style={{width: 45}} />
                        
                        <p className='text-white mb-0 ms-3'>Hello, {userName}</p>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="first">
                        <img src={CampaignOverview} className="me-2" alt='menu-img' />
                        Camp List</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9} className='side-content'>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <CampList />
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </div>
  )
}
export default SideBar;