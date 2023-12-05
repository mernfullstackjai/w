
import './LoginComponent.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const LoginComponent = () => {
  const [location, setLocation] = useState(null);
  const [placeName, setPlaceName] = useState('')
  const [current, setCurrent] = useState(null)
  const [condition, setCondition] = useState([])
  const [weatherLocation, setWeatherLocation] = useState([])

  useEffect(() => {
    handleLocationClick()
  }, [])

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation(`${latitude},${longitude}`);
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    calling(location)
  }


  function error() {
    console.log("Unable to retrieve your location");
    alert("Unable to retrieve your location")
  }

  async function calling(place) {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=e2e85ac9741847679ca115257231309&q=${place}`)
    console.log(response.data);
    const currentData = response.data.current
    const locationData = response.data.location
    console.log(currentData)
    setCurrent(currentData)
    setCondition(currentData.condition)
    setWeatherLocation(locationData)
  }

  const getWeatherHandle = () => {
    calling(placeName)
  }

  return (

    <React.Fragment>
      <div className='headingwe'>
        <h2>WEATHER STATUS</h2>
      </div>
      <input
        className='inputcolr'
        type='text'
        placeholder='Enter City Name'
        onChange={(e) => setPlaceName(e.target.value)}
        value={placeName}
      />
      
    <div>  <button className='butcolor' onClick={getWeatherHandle}>Get Weather Report</button>
    </div>
            {current && <div className='card'>
        <div className='container-card'>
        <img src={`https:${condition.icon}`} />
        <div className='cloud'>{condition.text}</div>
          <div className='place-name'>{weatherLocation.name}</div>
          <div className='tempcol'>Celcius : {current.temp_c}</div>
          <div className='tempcolo'>Fahrenheit : {current.temp_f}</div>
          <div className='humiditycl'>Humidity : {current.humidity}</div>
          

          

        </div>
      </div>}
    </React.Fragment>

  )
}

export default LoginComponent