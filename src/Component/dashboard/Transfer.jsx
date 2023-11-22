import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Transfer() {
    const token = localStorage.getItem("logToken");
    const [data , setData] = useState('');

    const fetchData =() => {
        console.log(token)
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
      })
  return (
    <div className='influencer-list p-4'>
     <h3 className='mb-4'>Transfer Details</h3>

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
        {data?.map((list, i) => {
          return (
            <>
            <tr key={i}>
              <td>{list.campaign_id__campaignid__campaign_name}</td>
              <td>{list.vendorid_id__username}</td>
              <td>
              {list.influecerid_id__username}
              </td>
              <td>
              {list.influ_amount}
              </td>
            
            </tr>
           
          </>
          );
        })}
      </tbody>
    </table>
      
    </div>
  )
}

export default Transfer