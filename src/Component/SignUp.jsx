import React , { useState, useMemo } from 'react';
import signup from '../assets/sign1.webp';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import axios from 'axios';
import { API } from '../config/Api';
import { toast } from 'react-toastify';

function Signup (){

   //state for steps
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

  const options = useMemo(() => countryList().getData(), [])
  const changeHandler = country => {
    setCountry(country)
  }

  const stepAhead = () => {
  //  if(name && email && password && confirmPassword &&country && userHandle != "") {
    setStepOne(false)
    setStepTwo(true)
  //  }
  }

  const stepBehind = () => {
    setStepOne(true)
    setStepTwo(false)
  }

  const industry = ["Fashion", "Jewellery", "Beauty & Health", "Sport & entertainment", "Grocery & food"];
  const promotionData = ["Affiliate Link", 'Coupon'];
  const ageData = ['Under 18', '18-24', '25-34', '35-44'];
  const genderData = ['Male', 'Female', 'Others'];
  const locationData = ['Afghanistan', 'Albania', 'Algeria', 'Austria', 'Belgium', 'Canada', 'Denmark', 'Finland', 'France', 'Ghana', 'Hungary', 'India', 'USA'];

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

  const handleAgeSelect = (value) => {
    if (ageData.includes(value)) {
      setAge(ageData.filter((v) => v !== value));
    } else {
      setAge([...ageData, value]);
    }
  };

  const handleGenderSelect = (value) => {
    if (genderData.includes(value)) {
      setGender(genderData.filter((v) => v !== value));
    } else {
      setGender([...genderData, value]);
    }
  };
  
  const handleLocationSelect = (value) => {
    if (locationData.includes(value)) {
      setLocation(locationData.filter((v) => v !== value));
    } else {
      setLocation([...locationData, value]);
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

  const handleSignUp = () => {
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
      console.log("Vendor Login", response);
      toast.success("Logged In Successfully!");
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  console.log("Industries", industries);
  console.log(showPromotionOptions)

  return (
    <div className='margin-outer-signup'>
      <div className='container-fluid'>
        <div className="row d-flex justify-content-center align-items-center">
          <div className='col-md-6 left-desktop'>
            <img src={signup} alt="Logo"  style={{"width" : "50%"}} />
          </div>
          <div className='col-md-6 right-desktop'>
            <div className="content col-xs-12 login-div d-flex flex-column">
              <h3>Affiliate signup</h3>
              <h5 className='my-3'>Step {stepOne == false && stepTwo == true ? "2" : "1"}</h5>
              <p>Sign up as affiliate to join our Marketplace and apply for the most competitive offers from our Shopify merchant!</p>
              <form action="">
                {stepOne && 
                <>
                <div className="input-container d-flex flex-column mb-3">
                  <label htmlFor="">Username</label>
                  <input placeholder='UserName' value={name} onChange={(e) => {setName(e.target.value)}} />
                </div>
                <div className="input-container d-flex flex-column mb-3">
                  <label htmlFor="">Email</label>
                  <input placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </div>
                <div className="input-container d-flex flex-column mb-3">
                  <label htmlFor="">Password</label>
                  <input placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <div className="input-container d-flex flex-column mb-3">
                  <label htmlFor="">Confirm Password</label>
                  <input placeholder='Confirm Password' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
                </div>
                <div className="input-container d-flex flex-column mb-3">
                  <label htmlFor="">Country</label>
                  <Select options={options} value={country} onChange={changeHandler} placeholder="Choose your country"/>
                </div>
                <div className="input-container d-flex flex-column mb-3">
                  <label htmlFor="">User Handle</label>
                  <input placeholder='User Handle' value={userHandle} onChange={(e) => {setUserHandle(e.target.value)}} />
                </div>
                <button type='button' className="button buttonfx color-1 angleindouble" onClick={() => {stepAhead()}}>
                  Continue
                </button>
                </>
                }
                {stepTwo && <>
                  <div className="input-container d-flex flex-column mb-3">
                    <input type="text" placeholder="Your Industry" onClick={toggleOptions} readOnly />
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
                    <select onChange={(e) => {setExperience(e.target.value)}}>
                      <option value="one">I'm starting with Affiliate Marketing and want to learn more about it</option>
                      <option value="two">I've worked with few brands but haven't optimized my promoting process</option>
                      <option value="three">I am a professional affiliate marketer</option>
                    </select>
                  </div>
                  <div className="input-container d-flex flex-column mb-3">
                    <input type="text" placeholder="Preferred promotion options" onClick={promotionToggleOptions} readOnly />
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
                  <div className="input-container d-flex flex-column mb-3">
                    <input type="text" placeholder="Select age range (max 3 options)" onClick={toggleAgeOptions} readOnly />
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
                  <div className="input-container d-flex flex-column mb-3">
                    <input type="text" placeholder="Select age range (max 3 options)" onClick={toggleGenderOptions} readOnly />
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
                  <div className="input-container d-flex flex-column mb-3">
                    <input type="text" placeholder="Location" onClick={toggleLocationOptions} readOnly />
                    {showLocation && (
                      <ul>
                        {locationData.map((option) => (
                          <li className='d-flex' key={option} onClick={() => handleLocationSelect(option)}>
                            <input
                              type="checkbox"
                              checked={location.includes(option)}
                              readOnly
                            />
                            <span>{option}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="buttons">
                    <button type='button' className='buttonfx color-1 angleindouble me-3' onClick={() => {stepBehind()}}>Previous</button>
                    <button type='button' className='buttonfx color-1 angleindouble' onClick={(e) => {handleSignUp(e)}}>Next</button>
                  </div>
                </>}
              </form>
              <div className="mt-3">
                <p className="mb-0  text-center">
                  Haven't created an account yet? {' '}
                  <a href="#/signup" className="text-primary fw-bold">
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
  
export default Signup;