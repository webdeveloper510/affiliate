import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Transfer() {
  const token = localStorage.getItem("logToken");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const fetchData = () => {
    axios.get('https://api.myrefera.com/influencer/transfer/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
      .then(function (response) {
        console.log("Single Market Data", response.data.data)
        setData(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='influencer-list p-4'>
      <h3 className='mb-4'>Transfer Details</h3>
      {data.length > 0 ? (
        <>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Campaign Name</th>
                <th>Vendor Name</th>
                {/* <th>Influencer Name</th> */}
                <th>Amount Paid</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((list, i) => (
                <tr key={i}>
                  <td>{list.campaign_id__campaignid__campaign_name}</td>
                  <td>{list.vendorid_id__username}</td>
                  {/* <td>{list.influecerid_id__username}</td> */}
                  <td>{list.influ_amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {data.length > itemsPerPage && (
              <>
                <div className="table-pagination d-flex justify-content-center align-items-center mt-4">

                  <button onClick={handlePreviousPage} disabled={currentPage === 1} className='page-btn' style={{ marginRight: 10 }}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#fff", width: "15px", height: "15px" }} />
                  </button>

                  {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      className={currentPage === index + 1 ? 'active page-num' : 'page-num'}
                      style={{ margin: '0 5px' }}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button onClick={handleNextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)} className='page-btn' style={{ marginRight: 10 }}>
                    <FontAwesomeIcon icon={faChevronRight} style={{ color: "#fff", width: "15px", height: "15px" }} />
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Transfer;
