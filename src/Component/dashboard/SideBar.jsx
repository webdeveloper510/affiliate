import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// Images
import CampaignOverview from '../../assets/campaign-over.png';
import User from '../../assets/user.png';
import CampList from './CampList';

const SideBar = () => {
    const userName = localStorage.getItem("username");
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("logToken");
        toast.success("Logged Out Successfully")
        navigate('/login');
    }
    return (
        <div className="sidebar">
           <div className='d-flex justify-content-end logout-button'>
            <button onClick={(e) => {handleLogOut(e)}}>Logout</button>
           </div>
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
                    <Col sm={9} className='side-content mt-2'>
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