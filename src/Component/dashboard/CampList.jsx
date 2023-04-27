import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { API } from '../../config/Api';
import { toast } from 'react-toastify';
import TableList from './TableList';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import './dashboard.scss';
import NoData from '../../assets/no-data.png'

function CampList() {
    const [campListPending, setCampListPending] = useState([]);
    const [campListApproval, setCampListApproval] = useState([]);
    const [pendingId, setPendingId] = useState([]);
    const [productNames, setProductNames] = useState([]);
    const token = localStorage.getItem("Token");
    const [actionTaken, setActionTaken] = useState(null);

    useEffect(() => {
        axios.get(API.BASE_URL + 'influencer/pending/',{
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(function (response) {
            setCampListPending(response.data.data);
            setPendingId(response.data.product_id);
            console.log("Pending", response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

        axios.get(API.BASE_URL + 'influencer/approval/',{
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(function (response) {
            setCampListApproval(response.data.data);
            console.log("Approved", response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [token, actionTaken])

    const handleAction = (id, action) => {
        console.log("ID", id)
        let apiEndpoint = action === "accept" ? "/influencer/accept/" : "influencer/decline/";
        axios.post(API.BASE_URL + apiEndpoint + id + '/', {}, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(function (response) {
            console.log(action === "accept" ? "Accept" : "Reject", response.data)
            toast.success(action === "accept" ? "Campaign Accepted" : "Campaign Declined")
            setActionTaken(prevState => ({ ...prevState, [id]: action }));
        })
        .catch(function (error) {
            console.log(error);
        })
    }
console.log("Action", actionTaken)
  return (
    <div className='influencer-list p-4'>
        <h2 className='mb-4'>Influencer List</h2>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Col sm={12}>
            <Nav variant="pills" className="flex-row mb-4 tab-header">
                <Nav.Item>
                    <Nav.Link eventKey="first">Pending Campaigns</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Approved Campaigns</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={12}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    {campListPending?.length > 0 ? (
                        <TableList data={campListPending} handleAction={handleAction} />
                    ): (
                        <>
                            <h5 className='mt-4 text-center'>No Pending Campaigns right now</h5>
                            <img src={NoData} alt='no-data' style={{width: '100%', maxHeight: 500, objectFit: 'contain'}} />
                        </>
                    )}
                </Tab.Pane>
                <Tab.Pane eventKey="second" className='campaign'>
                    {campListApproval?.length > 0 ? (<TableList data={campListApproval} showButtons={false} />) : (
                        <>
                        <h5 className='mt-4 text-center'>No Approved Campaigns right now</h5>
                        <img src={NoData} alt='no-data' style={{width: '100%', maxHeight: 500, objectFit: 'contain'}} />
                    </>
                    )}
                
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Tab.Container>
    </div>
  )
}

export default CampList