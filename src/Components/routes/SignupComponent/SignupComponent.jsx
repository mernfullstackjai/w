import './SignupComponent.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const SignupComponent = () => {
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
  // if (current.temp_c && current.temp_c>20) {
  //   alert("not safer to ride")
  // }


  function error() {
    console.log("Unable to retrieve your location");
    alert("Unable to retrieve your location")
  }

  async function calling(place) {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=d8496487a7284479b1c40134230610&q=${place}`)
    console.log(response.data);
    const currentData = response.data.current
    const locationData = response.data.location
    console.log(currentData)
    setCurrent(currentData)
    setCondition(currentData.condition)
    setWeatherLocation(locationData)
//     if (current.wind_mph>40 && current.temp_c>40 && current.humidity>80 && current.humidity>40 && current.temp_c<25) {
//       alert("DANGEROUS TO RIDE DUE TO WIND,TEMPERATURE,HUMIDITY")
//   } 
//   else if (current.wind_mph>40 && current.temp_c>40 ) {
//     alert("DANGEROUS TO RIDE DUE TO WIND AND HIGH TEMPERATURE")
// }
// else if (current.wind_mph>40 && current.temp_c<25) {
//   alert("DANGEROUS TO RIDE DUE TO WIND AND LOW TEMPERATURE")
// }
// else if (current.wind_mph>40 && current.humidity>80 && current.humidity>40) {
//   alert("DANGEROUS TO RIDE DUE TO WIND AND HUMIDITY")
// } 
// else if(current.temp_c>40 && current.humidity>80 && current.humidity>40) {
//   alert("DANGEROUS TO RIDE DUE TO HIGH TEMPERATURE AND HUMIDITY")
// }
// else if(current.temp_c<25 && current.humidity>80 && current.humidity>40 ) {
//   alert("DANGEROUS TO RIDE DUE TO LOW TEMPERATURE AND HUMIDITY")
// }
    
//         else if(current.humidity>80 && current.humidity>40 ) {
//           alert("DANGEROUS TO RIDE DUE TO HUMIDITY")
//        }
//        else if (current.wind_mph>40 ) {
//         alert("DANGEROUS TO RIDE DUE TO WIND")
//     } 
//       else if(current.temp_c>40) {
//            alert("DANGEROUS TO RIDE DUE TO HIGH TEMPERATURE")
//         }
//         else if(current.temp_c<25) {
//            alert("DANGEROUS TO RIDE DUE TO LOW TEMPERATURE AND MIGHT BE A CHANCE OF FROG")
//         }
      }      
  const getWeatherHandle = () => {
    calling(placeName)
  }
  const getWeatherHandles = () => {
    if (current.wind_mph>40 && current.temp_c>40 && current.humidity>80 && current.humidity>40 && current.temp_c<25) {
      alert("DANGEROUS TO RIDE DUE TO WIND,TEMPERATURE,HUMIDITY")
  } 
  else if (current.wind_mph>40 && current.temp_c>40 ) {
    alert("DANGEROUS TO RIDE DUE TO WIND AND HIGH TEMPERATURE")
}
else if (current.wind_mph>40 && current.temp_c<25) {
  alert("DANGEROUS TO RIDE DUE TO WIND AND LOW TEMPERATURE")
}
else if (current.wind_mph>40 && current.humidity>80 && current.humidity>40) {
  alert("DANGEROUS TO RIDE DUE TO WIND AND HUMIDITY")
} 
else if(current.temp_c>40 && current.humidity>80 && current.humidity>40) {
  alert("DANGEROUS TO RIDE DUE TO HIGH TEMPERATURE AND HUMIDITY")
}
else if(current.temp_c<25 && current.humidity>80 && current.humidity>40 ) {
  alert("DANGEROUS TO RIDE DUE TO LOW TEMPERATURE AND HUMIDITY")
}
    
        else if(current.humidity>80 && current.humidity>40 ) {
          alert("DANGEROUS TO RIDE DUE TO HUMIDITY")
       }
       else if (current.wind_mph>40 ) {
        alert("DANGEROUS TO RIDE DUE TO WIND")
    } 
      else if(current.temp_c>40) {
           alert("DANGEROUS TO RIDE DUE TO HIGH TEMPERATURE")
        }
        else if(current.temp_c<25) {
           alert("DANGEROUS TO RIDE DUE TO LOW TEMPERATURE AND MIGHT BE A CHANCE OF FROG")
        }
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
    <button className='butcolors' onClick={getWeatherHandles}>Safety Check</button>
    </div>
            {current && <div className='card'>
        <div className='container-card'>
        <img src={`https:${condition.icon}`} />
        <div className='cloud'>{condition.text}</div>
          <div className='place-name'>{weatherLocation.name}</div>
          <div className='placename'>{weatherLocation.localtime}</div>
          <div className='tempcol'>Celcius : {current.temp_c}</div>
          <div className='tempcolo'>Fahrenheit : {current.temp_f}</div>
          <div className='humiditycl'>Humidity : {current.humidity}</div>
        </div>
        
      </div>}
      {current && current.wind_mph<40 && current.temp_c<40 && current.humidity<80 && current.humidity>35 && current.temp_c>25 &&
      <div className='jai'>Safe for ride
      </div>
      }
      {/* {current && current.humidity<80 && current.humidity>35 && 
      <div className='jai'>DANGEROUS TO RIDE DUE TO HUMIDITY
      </div>
      }
      {current && current.wind_mph<40 && current.temp_c<40 && current.humidity<80 && current.humidity>35 && current.temp_c>25 &&
      <div className='jai'>Safe for ride
      </div>
      }
      {current && current.wind_mph<40 && current.temp_c<40 && current.humidity<80 && current.humidity>35 && current.temp_c>25 &&
      <div className='jai'>Safe for ride
      </div>
      }
      {current && current.wind_mph<40 && current.temp_c<40 && current.humidity<80 && current.humidity>35 && current.temp_c>25 &&
      <div className='jai'>Safe for ride
      </div>
      }

      {current &&current.temp_c<40 &&
      <div className='jai'>DANGEROUS TO RIDE DUE TO HIGH TEMPERATURE
      </div>
      }
      {current && current.wind_mph<40 &&
      <div className='jai'>DANGEROUS TO RIDE DUE TO WIND
      </div>
      }
      {current && current.wind_mph<40 && current.temp_c<40 && current.humidity<80 && current.humidity>35 && current.temp_c>25 &&
      <div className='jai'>Safe for ride
      </div>
      } */}
    </React.Fragment>

  )
}
export default SignupComponent