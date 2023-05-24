import React , { useState, useMemo, useRef, useEffect } from 'react';
import signup from '../assets/sign1.webp';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import axios from 'axios';
import { API } from '../config/Api';
import { toast } from 'react-toastify';
import MailPop from '../assets/mail-pop.jpg'
import { Link, useNavigate } from 'react-router-dom';

function Signup (){
   const [step, setstep] = useState(1);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [country, setCountry] = useState('');
   const [userHandle, setUserHandle] = useState('');
   const [experience, setExperience] = useState('');
   const [industries, setIndustries] = useState([]);
   const [age, setAge] = useState([]);
   const [gender, setGender] = useState([]);
   const [promotion, setPromotion] = useState([]);
   const [location, setLocation] = useState([]);
   const [stepOne, setStepOne] = useState(true);
   const [stepTwo, setStepTwo] = useState(false);
   const [showOptions, setShowOptions] = useState(false);
   const [showAge, setShowAge] = useState(false);
   const [showGender, setShowGender] = useState(false);
   const [showPromotionOptions, setShowPromotionOptions] = useState(false);
   const [showLocation, setShowLocation] = useState(false);
   const [mailPopup, setMailPopup] = useState(false);
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);
   const inputRef = useRef(null);
   const ageRef = useRef(null);
   const genderRef = useRef(null);
   const locationRef = useRef(null);
   const promotionRef = useRef(null);
   const [errors, setErrors] = useState({});
   const [locationInput, setLocationInput] = useState("");

  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = country => {
    setCountry(country)
  }

  const stepAhead = () => {
    const newErrors = {};
    
    if (!name) {
      newErrors.name = true;
    }
    if (!email && !newErrors.name) {
      newErrors.email = true;
    } else if (!newErrors.name) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        newErrors.email = true;
        newErrors.name = true;
        toast.error("Invalid email format");
        return;
      }
    }

    if (!password) {
      newErrors.password = true;
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = true;
    }
    
    if (!country) {
      newErrors.country = true;
    }
    
    if (!userHandle) {
      newErrors.userHandle = true;
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.warn("Please fill in all the required fields");
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = true;
      setErrors(newErrors);
      toast.error("Passwords do not match");
    } else {
      setErrors({});
      setStepOne(false);
      setStepTwo(true);
    }
  }
  

  const stepBehind = () => {
    setStepOne(true)
    setStepTwo(false)
  }

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  const handleAgeOutside = (event) => {
    if (ageRef.current && !ageRef.current.contains(event.target)) {
      setShowAge(false);
    }
  };

  const handleGenderOutside = (event) => {
    if (genderRef.current && !genderRef.current.contains(event.target)) {
      setShowGender(false);
    }
  };

  const handlePromotionOutside = (event) => {
    if (promotionRef.current && !promotionRef.current.contains(event.target)) {
      setShowPromotionOptions(false);
    }
  };

  const handleLocationOutside = (event) => {
    if (locationRef.current && !locationRef.current.contains(event.target)) {
      setShowLocation(false);
    }
  };

  const industry = ["Fashion", "Jewellery", "Beauty & Health", "Sport & entertainment", "Grocery & food"];
  const promotionData = ["Affiliate Link", 'Coupon'];
  const ageData = ["Under 18", "18-24", "25-34", "35-44"];
  const genderData = ['Male', 'Female', 'Others'];
  const locationData = ['Afghanistan', 'Albania', 'Algeria', 'Austria', 'Belgium', 'Canada', 'Denmark', 'Finland', 'France', 'Ghana', 'Hungary', 'India', 'USA'];

  const filteredLocationData = locationData.filter(
    (location) =>
      location.toLowerCase().indexOf(locationInput.toLowerCase()) !== -1
  );
  
  const handleLocationInputChange = (e) => {
    setLocationInput(e.target.value);
  };

  const handleSelect = (value) => {
    if (industries.includes(value)) {
      setIndustries(industries.filter((v) => v !== value));
    } else {
      setIndustries([...industries, value]);
    }
  };

  const handlePromotionSelect = (value) => {
    if (promotion.includes(value)) {
      setPromotion(promotion.filter((v) => v !== value));
    } else {
      setPromotion([...promotion, value]);
    }
  };

  const handleAgeSelect = (option) => {
    if (age.includes(option)) {
      setAge(age.filter((item) => item !== option));
    } else {
      if (age.length < 3) {
        setAge([...age, option]);
      }
    }
  };

  const handleGenderSelect = (value) => {
    if (gender.includes(value)) {
      setGender(gender.filter((v) => v !== value));
    } else {
      setGender([...gender, value]);
    }
  };

  const handleLocationSelect = (option) => {
    if (location.includes(option)) {
      setLocation(location.filter((item) => item !== option));
    } else {
      if (location.length < 10) {
        setLocation([...location, option]);
      }
    }
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const promotionToggleOptions = () => {
    setShowPromotionOptions(!showPromotionOptions);
  };

  const toggleAgeOptions = () => {
    setShowAge(!showAge);
  };

  const toggleGenderOptions = () => {
    setShowGender(!showGender);
  };

  const toggleLocationOptions = () => {
    setShowLocation(!showLocation);
  };

  const handleSignUp = (e) => {
    setLoading(true);
    e.preventDefault();
    axios.post(API.BASE_URL + 'influencer/create/', {
      username: name,
      email: email,
      password: password,
      confirm_password: confirmPassword,
      country: country.label,
      user_handle: userHandle,
      industries: industries.join(", "),
      experience: experience,
      promotion: promotion.join(", "),
      customer_age: age.join(", "),
      gender: gender.join(", "),
      location: location.join(", ")
    })
    .then(function (response) {
      console.log("Vendor Signup", response);
      toast.success("Sign Up Successfully!");
      localStorage.setItem("Token", response.data.token);
      localStorage.setItem("id", response.data.id);
      setMailPopup(true);
    })
    .catch(function (error) {
      console.log(error);
      if(error.response.data.email && error.response.data.email[0] == "user with this email already exists.") {
        toast.warn("User with this email already exists")
      }
      else if(error.response.data.industries && error.response.data.industries[0] == "This field may not be blank.") {
        toast.warn("Please select at least one industry")
      }
      else if(error.response.data.promotion && error.response.data.promotion[0] == "This field may not be blank.") {
        toast.warn("Please select at least one promotion")
      }
      else if(error.response.data.customer_age && error.response.data.customer_age[0] == "This field may not be blank.") {
        toast.warn("Please select at least one age range")
      }
      else if(error.response.data.gender && error.response.data.gender[0] == "This field may not be blank.") {
        toast.warn("Please select at least one gender")
      }
      else if(error.response.data.location && error.response.data.location[0] == "This field may not be blank.") {
        toast.warn("Please select at least one age location")
      }
      else {
        toast.warn("Unable to Sign up right now.")
      }
    })
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleAgeOutside);
    document.addEventListener("click", handleGenderOutside);
    document.addEventListener("click", handlePromotionOutside);
    document.addEventListener("click", handleLocationOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.addEventListener("click", handleAgeOutside);
      document.addEventListener("click", handleGenderOutside);
      document.addEventListener("click", handlePromotionOutside);
      document.addEventListener("click", handleLocationOutside);
    };
  }, []);

  return (
    <div className='margin-outer-signup'>
      {loading && <div className='loader'><span></span></div>}
      <div className='container-fluid'>
        <div className="row d-flex justify-content-center">
          <div className='col-md-6 left-desktop'>
            <img src={signup} alt="Logo" />
          </div>
          <div className='col-md-6 right-desktop'>
            <div className="content col-xs-12 login-div d-flex flex-column">
              <h3>Affiliate signup</h3>
              <h5 className='my-3'>Step {stepOne == false && stepTwo == true ? "2" : "1"}</h5>
              <p>Sign up as affiliate to join our Marketplace and apply for the most competitive offers from our Shopify merchant!</p>
              <form action="">
                {stepOne && 
                <>
                <div className={`input-container d-flex flex-column mb-3 ${errors.name ? 'error' : ''}`}>
                  <label htmlFor="">Username <strong style={{color: 'red'}}>*</strong></label>
                  <input placeholder='UserName' maxLength='30' value={name} onChange={(e) => {setName(e.target.value)}} />
                </div>
                <div className={`input-container d-flex flex-column mb-3 ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="">Email <strong style={{color: 'red'}}>*</strong></label>
                  <input type='email' maxLength='35' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} required />
                </div>
                <div className={`input-container d-flex flex-column mb-3 ${errors.password ? 'error' : ''}`}>
                  <label htmlFor="">Password <strong style={{color: 'red'}}>*</strong></label>
                  <input type='password' maxLength='30' placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <div className={`input-container d-flex flex-column mb-3 ${errors.confirmPassword ? 'error' : ''}`}>
                  <label htmlFor="">Confirm Password <strong style={{color: 'red'}}>*</strong></label>
                  <input type='password' maxLength='30' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
                </div>
                <div className={`input-container d-flex flex-column mb-3 ${errors.country ? 'error' : ''}`}>
                  <label htmlFor="">Country <strong style={{color: 'red'}}>*</strong></label>
                  <Select options={options} value={country} onChange={changeHandler} placeholder="Choose your country"/>
                </div>
                <div className={`input-container d-flex flex-column mb-3 ${errors.userHandle ? 'error' : ''}`}>
                  <label htmlFor="">User Handle <strong style={{color: 'red'}}>*</strong></label>
                  <input placeholder='User Handle' value={userHandle} onChange={(e) => {setUserHandle(e.target.value)}} />
                </div>
                <button type='button' style={{zIndex: 0}} className="button buttonfx color-1 angleindouble" onClick={() => {stepAhead()}}>
                  Continue
                </button>
                </>
                }
                {stepTwo && <>
                  <div className="input-container d-flex flex-column mb-3" ref={inputRef}>
                    <input type="text" placeholder={industries?.length > 0 ? industries : "Your Industry"}  onClick={toggleOptions} readOnly />
                      {showOptions && (
                        <ul>
                          {industry.map((option) => (
                            <li className='d-flex' key={option} onClick={() => handleSelect(option)}>
                              <input
                                type="checkbox"
                                checked={industries.includes(option)}
                                readOnly
                              />
                              <span>{option}</span>
                            </li>
                          ))}
                        </ul>
                    )}
                  </div>
                  <div className="input-container d-flex flex-column mb-3">
                    <select onChange={(e) => {setExperience(e.target.value)}} style={{color: '#707070'}}>
                      <option disabled>Experience with Affiliate Marketing</option>
                      <option value="one">I'm starting with Affiliate Marketing and want to learn more about it</option>
                      <option value="two">I've worked with few brands but haven't optimized my promoting process</option>
                      <option value="three">I am a professional affiliate marketer</option>
                    </select>
                  </div>
                  <div className="input-container d-flex flex-column mb-3 w-100" ref={promotionRef}>
                    <input type="text" placeholder={promotion?.length > 0 ? promotion : "Preferred promotion options"} onClick={promotionToggleOptions} readOnly />
                    {showPromotionOptions && (
                      <ul>
                        {promotionData.map((option) => (
                          <li className='d-flex' key={option} onClick={() => handlePromotionSelect(option)}>
                            <input
                              type="checkbox"
                              checked={promotion.includes(option)}
                              readOnly
                            />
                            <span>{option}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className='target w-100 mb-4'>
                    <p className='w-100'>Your Target Customers</p>
                    <div className="input-container d-flex flex-column mb-3" ref={ageRef}>
                      <input type="text" placeholder= {age?.length > 0 ? age : "Select age range (max 3 options)"} onClick={toggleAgeOptions} readOnly />
                      {showAge && (
                        <ul>
                          {ageData.map((option) => (
                            <li className='d-flex' key={option} onClick={() => handleAgeSelect(option)}>
                              <input
                                type="checkbox"
                                checked={age.includes(option)}
                                readOnly
                              />
                              <span>{option}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="input-container d-flex flex-column mb-3" ref={genderRef}>
                      <input type="text" placeholder={gender?.length > 0 ? gender : "Please Select Gender"} onClick={toggleGenderOptions} readOnly />
                      {showGender && (
                        <ul>
                          {genderData.map((option) => (
                            <li className='d-flex' key={option} onClick={() => handleGenderSelect(option)}>
                              <input
                                type="checkbox"
                                checked={gender.includes(option)}
                                readOnly
                              />
                              <span>{option}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="input-container d-flex flex-column mb-3" ref={locationRef}>
                      <input
                        type="text"
                        placeholder={location?.length > 0 ? location : "Search and select country (max 10 options)"}
                        onClick={toggleLocationOptions}
                        value={locationInput}
                        onChange={handleLocationInputChange}
                      />
                      {showLocation && (
                        <ul>
                          {filteredLocationData.map((option) => (
                            <li className="d-flex" key={option} onClick={() => handleLocationSelect(option)}>
                              <input type="checkbox" checked={location.includes(option)} readOnly />
                              <span>{option}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="buttons d-flex flex-column">
                    <button type='button' style={{minWidth: 140}} className='buttonfx color-1 angleindouble' onClick={() => {stepBehind()}}>Previous</button>
                    <button type='button w-100' style={{marginTop: 15, minWidth: 140 }} className='buttonfx color-1 angleindouble' onClick={(e) => {handleSignUp(e)}}>Sign Up</button>
                  </div>
                </>}
              </form>
              <div className="mt-3">
                <p className="mb-0  text-center">
                  Haven't created an account yet? {' '}
                  <a href="#/login" className="text-primary fw-bold">
                    Sign In
                  </a>
                </p>
              </div>

              {mailPopup && (
                <div className="mail-popup">
                  <div className="mail-pop-container">
                    <img src={MailPop} alt="mail-pop" />
                    <h3>Signed Up Successfully</h3>
                    <p>Please check you mail to confirm</p>
                    <Link to='/' className='button buttonfx color-1 angleindouble'>Go Back</Link>
                  </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
  
export default Signup;