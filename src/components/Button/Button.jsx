import React from 'react';
import '../../styles/Button.scss';
import { windowsIcon } from '../../assets/exports';

const Button = ({ styleOverrides, text, onClick, icon }) => {

  return (
    <div className='button' style={styleOverrides && styleOverrides} onClick={onClick}>
        {icon && (
            <img src={icon} className='button-icon' />
        )}
        <p className='button-text'> {text} </p>
    </div>
  )
};

export default Button;