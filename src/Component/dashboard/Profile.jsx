import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import { API } from '../../config/Api';
import Select from 'react-select';
import countryList from 'react-select-country-list';

function Profile() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [userHandle, setUserHandle] = useState('');
    const [loading, setLoading] = useState(false);
    const options = useMemo(() => countryList().getData(), [])
    const token = localStorage.getItem("logToken");

    // const changeHandler = country => {
    //     setCountry(country)
    // }

    useEffect(() => {
        setLoading(true);
        axios.get(API.BASE_URL + 'influencer/inflprofile/',  {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(function (response) {
            console.log("Profile Details", response);
            setUserName(response.data.details.name);
            setEmail(response.data.details.email)
            setCountry(response.data.details.country)
            setUserHandle(response.data.details.user_handle)
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => setLoading(false));
    }, [token])

  return (
    <div className="profile p-4 page pt-4">
        {loading && <div className='d-flex loader-container flex-column'><div className='loader'><span></span></div> <p className='text-white'>Processing...</p></div>}
        <div className="heading">
            <h2>Profile</h2>
        </div>
        <form className="profile-form d-flex flex-wrap justify-content-between align-items-center mt-4">
            <div className="input-container d-flex flex-column mb-4">
                <label>Username</label>
                <input type="text" value={userName} disabled />
            </div>
            <div className="input-container d-flex flex-column mb-4">
                <label>Email</label>
                <input type="text" value={email} disabled />
            </div>
            <div className="input-container d-flex flex-column mb-4">
                <label htmlFor="">Country</label>
                <input type="name" value={country} disabled />
                {/* <Select options={options} value={country} onChange={changeHandler} className='select' placeholder={country} /> */}
            </div>
            <div className="input-container d-flex flex-column mb-4">
                <label>User Handle</label>
                <input type="name" value={userHandle} disabled />
            </div>
        </form>
        {/* <div className="buttons d-flex justify-content-center align-items-center">
            <button className='button button-blue' onClick={(e) => {createProfile(e)}}>Update Profile</button>
        </div> */}
    </div>
  )
}

export default Profile