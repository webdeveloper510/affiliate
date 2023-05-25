import React, {useEffect, useState, useRef} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { API } from '../../config/Api';
import axios from 'axios';

// Images
import CampaignOverview from '../../assets/campaign-over.png';
import User from '../../assets/user.png';
import CampList from './CampList';

const SideBar = () => {
    const userName = localStorage.getItem("username");
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([])
    const token = localStorage.getItem("logToken");
    const [shownotification, setShowNotification] = useState(false);
    const notificationsRef = useRef(null);
    const handleLogOut = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("logToken");
        toast.success("Logged Out Successfully")
        navigate('/login');
    }

    const handleNotifications = () => {
        setShowNotification(!shownotification);
    }

    useEffect(() => {
        axios.get(API.BASE_URL + 'influencer/notification/',{
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(function (response) {
            console.log("Notification", response.data)
            setNotifications(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
        axios.get(API.BASE_URL + 'influencer/notification/',{
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(function (response) {
            console.log("Notification", response.data)
            setNotifications(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, 5000);
    return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (
            notificationsRef.current &&
            !notificationsRef.current.contains(event.target)
          ) {
            setShowNotification(false);
          }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
          document.removeEventListener("click", handleOutsideClick);
        };
      }, []);

    const handleClearNotifications = () => {
        axios.get(API.BASE_URL + 'influencer/change/status/',{
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(function (response) {
            console.log("Status", response.data);
            setNotifications([])
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    console.log(shownotification)
    return (
        <div className="sidebar">
           <div className='d-flex justify-content-end logout-button'>
            <button onClick={(e) => {handleLogOut(e)}}>Logout</button>

            <div className='notifications' style={{marginLeft: 30, cursor: 'pointer',marginTop:'10px',marginRight:'8px'}} onClick={() => {handleNotifications()}} ref={notificationsRef}>
                                <span>{notifications?.length ? notifications.length : 0}</span>
                                <FontAwesomeIcon 
                                icon={faBell}
                                style={{
                                    color: "#000",
                                    width: "20px",
                                    height: "20px",
                                    marginTop:'5px',
                                }}
                                />
                                
                            </div>

           </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} className='side-menu py-4'>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item className='d-flex align-items-center mb-4 px-3 user'>
                            <img src={User} alt='notification' style={{width: 45}} />
                            
                            <p className='text-white mb-0 ms-3'>Hello, {userName}</p>
                            {/* <div className='notifications' style={{marginLeft: 40, cursor: 'pointer'}} onClick={() => {handleNotifications()}} ref={notificationsRef}>
                                <span>{notifications?.length ? notifications.length : 0}</span>
                                <FontAwesomeIcon 
                                icon={faBell}
                                style={{
                                    color: "#fff",
                                    width: "20px",
                                    height: "20px",
                                }}
                                />
                            </div> */}
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="first">
                            <img src={CampaignOverview} className="me-2" alt='menu-img' />
                            Campaigns List</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {shownotification === true && (
                        notifications?.length > 0 ? (
                            <ul className="notification-list">
                                <button onClick={(e) => {handleClearNotifications(e)}}>clear all</button>
                                {notifications?.map((data) => {
                                return <li>{data.message}</li>;
                                })}
                            </ul>
                        ) : <ul className="notification-list"><li style={{textAlign: 'center'}}>No Notifications</li></ul>
                    )}
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