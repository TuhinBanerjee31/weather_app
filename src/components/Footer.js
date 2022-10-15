import React from 'react';
import '../Css_works/Footer.css';

const Footer = () => {
  return (
    <footer className='flex justify-center'>
        <span className='flex gap-2 footer-text'>Developed by <a href='https://github.com/TuhinBanerjee31' ><p className='cursor-pointer transition ease-out hover:scale-105'>Tuhin Banerjee</p></a></span>
    </footer>
  )
}

export default Footer;