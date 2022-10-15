import React from 'react';
import '../Css_works/TopButtons.css';

const TopButtons = (props) => {
  const cities= [
    {
      id:1,
      title:'Kolkata'
    },
    {
      id:2,
      title:'Mumbai'
    },
    {
      id:3,
      title:'Delhi'
    },
    {
      id:4,
      title:'Pune'
    },
    {
      id:5,
      title:'Chennai'
    }
  ]
  return (
    <div className='flex items-center justify-around my-8'>
      {cities.map((city)=> (
        <button key={city.id} onClick={() => props.setArea({q: city.title})} className='button-text'>{city.title}</button>
      ))}
    </div>
  )
}

export default TopButtons;
