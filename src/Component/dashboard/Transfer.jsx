import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Transfer() {
  const token = localStorage.getItem("logToken");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // You can adjust the number of items per page

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

  // Logic to get current items based on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

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
                <th>Influencer Name</th>
                <th>Influencer Fee</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((list, i) => (
                <tr key={i}>
                  <td>{list.campaign_id__campaignid__campaign_name}</td>
                  <td>{list.vendorid_id__username}</td>
                  <td>{list.influecerid_id__username}</td>
                  <td>{list.influ_amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {/* Pagination buttons */}
            {data.length > itemsPerPage && (
              <ul className="pagination">
                {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button onClick={() => paginate(index + 1)} className="page-link">
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
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
