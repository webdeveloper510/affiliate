import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, LineController, ArcElement } from 'chart.js';
import axios from 'axios';
import { API } from '../../config/Api';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, LineController, ArcElement);


function Sales() {
  const token = localStorage.getItem("logToken");
  const chartSalesRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [chartSalesData, setChartSalesData] = useState({
    labels: [],
    datasets: [],
  });


  useEffect(() => {
    setLoading(true);
    axios.get(API.BASE_URL + 'influencer/influsersales/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(function (response) {
        console.log("Sales Data", response)
        const analyticsData = response.data.data;
        const sales = analyticsData.map(item => item.sales);
        const campaignNames = analyticsData.map(item => item.campaign_name);

        const updatedSalesData = {
          labels: campaignNames,
          datasets: [
            {
              label: 'Sales Data',
              data: sales,
              tension: 0.2,
              backgroundColor: [
                '#FF9B9B',
                '#CD6688',
                '#FFFEC4',
                '#7A316F',
                '#FFD6A5',
                '#9BE8D8',
                '#E966A0',
                '#967E76',
                '#C2DEDC',
                '#ECE5C7',
                '#E0BBE4',
                '#957DAD',
                '#AAD6FA',
                '#FCE6A9',
                '#B3C99C',
                '#7C9D96'
              ],
            },
          ],
        };

        setChartSalesData(updatedSalesData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  const options = {
    plugins: {
      legend: true
    },
  }

  return (
    <>
      <div className="sales p-4 page">
      {loading && <div className='d-flex loader-container flex-column'><div className='loader'><span></span></div> <p className='text-white'>Processing...</p></div>}
        <div className="sales-container">
          <h2 className="">Campaign Sales</h2>
          <div className="earnings-list d-flex flex-column justify-content-center align-items-center">

            <div className="chart my-5 d-flex flex-column w-100">
              <h3 className='text-left w-100 d-flex ps-5 mb-4'>Sales Data</h3>
              <p className='text-center left-text'>Sales</p>
              <Line ref={chartSalesRef} type="line" data={chartSalesData} options={options}></Line>
              <p className='text-center'>Campaign name</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sales;