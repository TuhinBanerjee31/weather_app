import React from 'react';
import { localTimeData } from '../Api_work/service';
import '../Css_works/Timeline.css';

const Timeline = (props) => {
  return (
    <div className='main-box flex flex-col'>
        <div className='timeline flex justify-center items-center'>
            <p className='text-white font-extralight'>{localTimeData(props.weather.dt, props.weather.timezone)}</p>
        </div>
        
        <div className='location flex justify-center items-center'>
            <p className='font-medium text-white'>{`${props.weather.name}, ${props.weather.country}`}</p>
        </div>
        
    </div>
  )
}

export default Timeline;