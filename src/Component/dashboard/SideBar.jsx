import React, {useEffect, useState, useRef, useMemo} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import { API } from '../../config/Api';
import axios from 'axios';
import Select from 'react-select';
import countryList from 'react-select-country-list';

// Images
import CampaignOverview from '../../assets/campaign-over.png';
import User from '../../assets/user.png';
import CampList from './CampList';

const SideBar = () => {
    const userName = localStorage.getItem("username");
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([])
    const token = localStorage.getItem("logToken");
    const [showPayment, setShowPayment] = useState(false);
    const [vendorNames, setVendorNames] = useState([])
    const [selectedVendorId, setSelectedVendorId] = useState('');
    const [selectedVendor, setSelectedVendor] = useState('');
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(false);
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const [accNum, setAccNum] = useState('')
    const [holdNum, setHoldNum] = useState('');
    const [routNum, setRoutNum] = useState('')
    const [shownotification, setShowNotification] = useState(false);
    const notificationsRef = useRef(null);
    const options = useMemo(() => countryList().getData(), [])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

    const handleLogOut = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("logToken");
        toast.success("Logged Out Successfully")
        navigate('/login');
    }

    const handleNotifications = () => {
        setShowNotification(!shownotification);
    }

    const changeHandler = country => {
        setCountry(country)
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

        axios.get(API.BASE_URL + 'influencer/vendor_key/',{
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(function (response) {
            console.log("Vendor Key", response.data.data)
            setVendorNames(response.data.data);
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

    const handleShowPayment = (e) => {
        e.preventDefault();
        setShowPayment(true);
    }

    const handleClose = () => {
        setShowPayment(false)
    }

    const handlePayment = (e) => {
        setLoading(true);
        e.preventDefault();
        axios.post(API.BASE_URL + 'influencer/stripe/connect/', {
            first_name: formState.firstName,
            last_name: formState.lastName,
            email: formState.email,
            vendorid: selectedVendorId,
            country: country?.value,
            account_number: accNum,
            routing_number: routNum,
            account_holder_name: holdNum,
            secret: selectedVendor,
        },{
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(function (response) {
            console.log("Payment", response)
            toast.success(response.data.message, { autoClose: 1000 })
        })
        .catch(function (error) {
            console.log(error);
            if(error.response.data.message) {
                toast.error(error.response.data.message)
            }
            else if(error.response.data.error) {
                toast.error(error.response.data.error)
            }
            else {
                toast.error("Unable to transfer amount right now")
            }
        })
        .finally(() => setLoading(false));
    }

    console.log(shownotification)

    console.log("selectedVendorId", selectedVendorId)
    return (
        <div className="sidebar">
             {loading && <div className='loader'><span></span></div>}
           <div className='d-flex justify-content-end logout-button' style={{marginRight: 40}}>
            <button onClick={(e) => {handleLogOut(e)}}>Logout</button>
           </div>
           {/* notification icon */}
           <div className='notifications' style={{ cursor: 'pointer'}} onClick={() => {handleNotifications()}} ref={notificationsRef}>
                <span>{notifications?.length ? notifications.length : 0}</span>
                <FontAwesomeIcon 
                icon={faBell}
                style={{
                    color: "#0d6efd",
                    width: "20px",
                    height: "20px",
                }}
                />
            </div>
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
                            Campaigns List</Nav.Link>
                        </Nav.Item>
                        <div className="button pay-btn d-flex justify-content-center align-items-center mt-5">
                            <button type='button' onClick={(e) => {handleShowPayment(e)}}>Set up Payment</button>
                        </div>
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
            {showPayment && (
                <div className="payment-form">
                    <form action="">
                        <button className="cls-btn" type='button' onClick={(e) => {handleClose(e)}}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                style={{
                                    color: "#000",
                                    width: "30px",
                                    height: "30px",
                                }}
                            />
                        </button>
                    
                        <h2 className='mb-4'>Enter Details</h2>
                        <div className="input-container">
                            <label htmlFor="">First Name</label>
                            <input type="text" name='firstName' value={formState.firstName} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Last Name</label>
                            <input type="text" name='lastName' value={formState.lastName} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" value={formState.email} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
  <label htmlFor="">Vendor</label>
  <select value={selectedVendor} onChange={e => {
    setSelectedVendor(e.target.value);
    const selectedIndex = e.target.selectedIndex;
    console.log("selectedIndex", selectedIndex);
    const selectedVendorId = selectedIndex >= 1 ? vendorNames[selectedIndex - 1]?.vendor_id : '';
    setSelectedVendorId(selectedVendorId);
  }}>
    <option disabled value="">Select a Vendor</option>
    {vendorNames?.map((names, i) => (
      <option value={names.vendor_key} key={i}>{names.vendor}</option>
    ))}
  </select>
</div>
                        <div className="input-container">
                            <label htmlFor="">Country</label>
                            <Select options={options} value={country} onChange={changeHandler} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Account Number</label>
                            <input type="number" value={accNum} onChange={(e) => {setAccNum(e.target.value)}} />
                        </div>
                        <div className="input-container">
                        <label htmlFor="">Routing Number</label>
                            <input type="number" value={routNum} onChange={(e) => {setRoutNum(e.target.value)}} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Account Holder Name</label>
                            <input type="text" value={holdNum} onChange={(e) => {setHoldNum(e.target.value)}} />
                        </div>
                        <div className="button">
                            <button type='button' onClick={(e) => {handlePayment(e)}}>Submit</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}
export default SideBar;