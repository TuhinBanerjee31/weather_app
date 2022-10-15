import React, { useState } from 'react';
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';
import '../Css_works/InputAreas.css';

const InputAreas = (props) => {

  const [cityName, setCityName] = useState("");

  const handleChange = (event) =>{
    setCityName(event.target.value)
  }

  const handleSearch = () => {
    if(cityName !== ""){
      props.setArea({q:cityName});
    }
  }

  const handleLocationClick = () => {
    if(navigator.geolocation) {
      toast.info("Fetching Users Location.")
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location Fetched!")
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        props.setArea({
          lat,
          lon,
        });
      });
    }
  }

  const controlUnit = (event) => {
    const selectUnit = event.target.name;
    if(props.units !== selectUnit){
      props.setUnits(selectUnit);
    }
  }

  return (
    <div className='main-container flex flex-row justify-center'>
        <div className='search-box flex flex-row w-3/4 items-center justify-center'>
            <input value={cityName} onChange={handleChange} type='text' placeholder='city name...' className='font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'/>
            <UilSearch onClick={handleSearch} size={30} className='text-white cursor-pointer transition ease-out hover:scale-150' />
            <UilMapMarker onClick={handleLocationClick} size={30} className='text-white cursor-pointer transition ease-out hover:scale-150' />
        </div>
        
        <div id='temp-box' className='flex flex-row items-center w-1/4 justify-center'>
            <button name="metric" onClick={controlUnit} className='metric text-white transition ease-out hover:scale-125'>°C</button>
            <p className='text-white text-xl mx-1'>|</p>
            <button name="imperial" onClick={controlUnit} className='imperial text-white transition ease-out hover:scale-125'>°F</button>
        </div>
    </div>
  )
}

export default InputAreas;