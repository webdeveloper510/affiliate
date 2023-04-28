import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../config/Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Verify() {
    const { token, id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {})
        axios.post(API.BASE_URL + 'influencer/activate/' + token + id + '/')
        .then(function (response) {
            console.log("Verified", response.data);
            toast.success("Email Verified")
            navigate('/login')
        })
        .catch(function (error) {
            console.log(error);
        })
  return (
    <div></div>
  )
}

export default Verify