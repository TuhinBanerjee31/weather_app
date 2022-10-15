import React from 'react';
import {UilTemperature, UilTear, UilWind, UilSun, UilSunset, UilArrowUp, UilArrowDown} from "@iconscout/react-unicons";
import { controlIcon, localTimeData } from '../Api_work/service';
import '../Css_works/TempProfile.css';

const TempProfile = (props) => {
  return (
    <div className='main-container flex flex-col'>
        <div className='weather-stats flex justify-center items-center'>
            <p className='font-light text-amber-600'>{props.weather.main}</p>
        </div>

        <div className='temp-details flex flex-row justify-between items-center'>
            <img src={controlIcon(props.weather.icon)} alt='sun' />

            <p className='text-white font-light'>{`${props.weather.temp.toFixed()}°`}</p>

            <div className='extra-info flex flex-col items-center'>
                <div className='flex text-white font-light'>
                <UilTemperature size={18} className='mr-1'/>
                Real Fell:
                <span className='ml-1 font-medium'>{`${props.weather.feels_like.toFixed()}°`}</span>
                </div>

                <div className='flex text-white font-light'>
                <UilTear size={18} className='mr-1'/>
                Humidity:
                <span className='ml-1 font-medium'>{`${props.weather.humidity}%`}</span>
                </div>

                <div className='flex text-white font-light'>
                <UilWind size={18} className='mr-1'/>
                Wind:
                <span className='ml-1 font-medium'>{`${props.weather.speed.toFixed()} km/h`}</span>
                </div>
            </div>  
        </div>

        <div  className='extra-info-2 flex flex-row items-center justify-center text-white space-x-2 py-3'>
            <UilSun />
            <p className='font-light'>Rise:<span className='font-medium ml-1'>{localTimeData(props.weather.sunrise, props.weather.timezone, "hh:mm a")}</span></p>
            <p className='font-light'>|</p>

            <UilSunset />
            <p className='font-light'>Set:<span className='font-medium ml-1'>{localTimeData(props.weather.sunset, props.weather.timezone, "hh:mm a")}</span></p>
            <p className='font-light'>|</p>

            <UilArrowUp />
            <p className='font-light'>High:<span className='font-medium ml-1'>{`${props.weather.temp_max.toFixed()}°`}</span></p>
            <p className='font-light'>|</p>

            <UilArrowDown />
            <p className='font-light'>Low:<span className='font-medium ml-1'>{`${props.weather.temp_min.toFixed()}°`}</span></p>
        </div>

    </div>
  )
}

export default TempProfile;