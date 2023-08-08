import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { API } from '../../config/Api';
import { toast } from 'react-toastify';
import TableList from './TableList';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import './dashboard.scss';
import NoData from '../../assets/no-data.png'

function CampList({marketList = true}) {
    const [campListPending, setCampListPending] = useState([]);
    const [campListApproval, setCampListApproval] = useState([]);
    const [campViewDetails, setCampViewDetails] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [declineList, setDeclineList] = useState([]);
    const [acceptList, setAcceptList] = useState([]);
    const [pendingId, setPendingId] = useState([]);
    const [inflaDecline,setInflaDecline] = useState([]);
    const [loading, setLoading] = useState(false);
    const [productNames, setProductNames] = useState([]);
    const token = localStorage.getItem("logToken");
    const [actionTaken, setActionTaken] = useState(null);
    const [apiCalled, setApiCalled] = useState(false);
    const [marketAppliedList, setMarketAppliedList] = useState([]);

    useEffect(() => {
        axios.get(API.BASE_URL + 'influencer/pending/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
          .then(function (response) {
            setCampListPending(response.data.data);
            setPendingId(response.data.product_id);
            console.log("Pending", response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }, [token]);
      
    useEffect(() => {
      axios.get(API.BASE_URL + 'influencer/approval/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then(function (response) {
          setCampListApproval(response.data.data);
          console.log("Approved", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [token]);

    useEffect(() => {
      axios.get(API.BASE_URL + 'influencer/inflmarketdecline/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then(function (response) {
          setInflaDecline(response.data.data);
          console.log("Approved", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [token]);
    
    useEffect(() => {
      axios.get(API.BASE_URL + 'influencer/decline/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then(function (response) {
          setDeclineList(response.data.data);
          console.log("Decline", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [token]);
    
    useEffect(() => {
      axios.get(API.BASE_URL + 'influencer/inflmarketaccept/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then(function (response) {
          setAcceptList(response.data.data);
          console.log("Accepttttt", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [token]);
      
    useEffect(() => {
      axios.get(API.BASE_URL + 'influencer/applied/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then(function (response) {
          setMarketAppliedList(response.data.data);
          console.log("setMarketAppliedList", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [token]);

    const handleAction = (id, action) => {
        setLoading(true);
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
            axios.get(API.BASE_URL + 'influencer/pending/', {
              headers: {
                Authorization: `Token ${token}`,
              },
            })
            .then(function (response) {
              setCampListPending(response.data.data);
              setPendingId(response.data.product_id);
            })
            .catch(function (error) {
              console.log(error);
            });

            axios.get(API.BASE_URL + 'influencer/approval/', {
              headers: {
                Authorization: `Token ${token}`,
              },
            })
            .then(function (response) {
              setCampListApproval(response.data.data);
            })
            .catch(function (error) {
              console.log(error);
            });

            axios.get(API.BASE_URL + 'influencer/inflmarketdecline/', {
              headers: {
                Authorization: `Token ${token}`,
              },
            })
            .then(function (response) {
              setInflaDecline(response.data.data);
            })
            .catch(function (error) {
              console.log(error);
            });
            
            axios.get(API.BASE_URL + 'influencer/decline/', {
              headers: {
                Authorization: `Token ${token}`,
              },
            })
            .then(function (response) {
              setDeclineList(response.data.data);
            })
            .catch(function (error) {
              console.log(error);
            });

            axios.get(API.BASE_URL + 'influencer/inflmarketaccept/', {
              headers: {
                Authorization: `Token ${token}`,
              },
            })
            .then(function (response) {
              setAcceptList(response.data.data);
            })
            .catch(function (error) {
              console.log(error);
            });

            axios.get(API.BASE_URL + 'influencer/applied/', {
              headers: {
                Authorization: `Token ${token}`,
              },
            })
            .then(function (response) {
              setMarketAppliedList(response.data.data);
              console.log("setMarketAppliedList", response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => setLoading(false));
    }

    const couponCross = () => {
        setShowDetails(false)
    }

    const handleViewDetails = (id) => {
        setLoading(true);
        axios.get(API.BASE_URL + 'influencer/single/' + id + '/',{
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(function (response) {
            setCampViewDetails(response.data.data[0]);
            console.log("Details", response)
            setShowDetails(true);
            axios.get(API.BASE_URL + 'influencer/pending/', {
              headers: {
                Authorization: `Token ${token}`,
              },
            })
              .then(function (response) {
                setCampListPending(response.data.data);
                setPendingId(response.data.product_id);
                console.log("Pending", response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => setLoading(false));
    }

    console.log("Action", actionTaken)
  return (
    <div className='influencer-list p-4'>
        {loading && <div className='loader'><span></span></div>}
        <h2 className='mb-4'>Manage Campaigns</h2>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Col sm={12}> 
            <Nav variant="pills" className="flex-row mb-4 tab-header">
                <Nav.Item>
                    <Nav.Link eventKey="first">
                        {!marketList ? "Pending" : "Requested"}
                    </Nav.Link>
                </Nav.Item>
                {!marketList && (
                  <Nav.Item>
                      <Nav.Link eventKey="second">Awaiting</Nav.Link>
                  </Nav.Item>
                )}
                
                <Nav.Item>
                    <Nav.Link eventKey="third">Declined</Nav.Link>
                </Nav.Item>
                {marketList && (
                  <Nav.Item>
                      <Nav.Link eventKey="four">Active</Nav.Link>
                  </Nav.Item>
                )}
            </Nav>
            </Col>
            <Col sm={12}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    {marketList == false && (
                        campListPending?.length > 0 ? (
                            <TableList 
                                data={campListPending}
                                handleAction={handleAction}
                                viewDetails={handleViewDetails}
                                showDetails={showDetails} 
                                userDetails={campViewDetails}
                                couponCross={couponCross}
                                showAll={true}
                                pending = {true}
                            />
                        ): (
                            <>
                                <h5 className='mt-4 text-center'>No Pending Campaigns right now</h5>
                                <img src={NoData} alt='no-data' style={{width: '100%', maxHeight: 500, objectFit: 'contain'}} />
                            </>
                        )
                    )}

                    {marketList == true && (
                        marketAppliedList?.length > 0 ? (
                            <TableList 
                                data={marketAppliedList}
                                handleAction={handleAction}
                                viewDetails={handleViewDetails}
                                showDetails={showDetails} 
                                userDetails={campViewDetails}
                                couponCross={couponCross}
                                marketApplied = {true}
                                showAll = {false}
                                pending = {true}
                            />
                        ): (
                            <>
                                <h5 className='mt-4 text-center'>No Requested Campaigns right now</h5>
                                <img src={NoData} alt='no-data' style={{width: '100%', maxHeight: 500, objectFit: 'contain'}} />
                            </>
                        )
                    )}      
                    
                </Tab.Pane>
                {!marketList && (
                  <Tab.Pane eventKey="second" className='campaign'>
                    {campListApproval?.length > 0 ? (<TableList data={campListApproval} showButtons={false} pending={false} />) : (
                        <>
                        <h5 className='mt-4 text-center'>No Accepted Campaigns right now</h5>
                        <img src={NoData} alt='no-data' style={{width: '100%', maxHeight: 500, objectFit: 'contain'}} />
                    </>
                    )}
                
                </Tab.Pane>
                )}
                
                <Tab.Pane eventKey="third" className='campaign'>
                  {marketList == false && (
                    declineList?.length > 0 ? (<TableList data={declineList} showButtons={false} pending={false} />) : (
                      <>
                      <h5 className='mt-4 text-center'>No Declined Campaigns right now</h5>
                      <img src={NoData} alt='no-data' style={{width: '100%', maxHeight: 500, objectFit: 'contain'}} />
                  </>
                  )
                    )}

                    {marketList == true && (
                        inflaDecline?.length > 0 ? (<TableList data={inflaDecline} showButtons={false} pending={false} sign = {true} />) : (
                          <>
                          <h5 className='mt-4 text-center'>No Declined Campaigns right now</h5>
                          <img src={NoData} alt='no-data' style={{width: '100%', maxHeight: 500, objectFit: 'contain'}} />
                      </>
                      )
                    )}
                
                </Tab.Pane>
                <Tab.Pane eventKey="four" className='campaign'>
                    {acceptList?.length > 0 ? (<TableList data={acceptList} showButtons={false} pending={false} sign = {true} />) : (
                        <>
                        <h5 className='mt-4 text-center'>No Active Campaigns right now</h5>
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