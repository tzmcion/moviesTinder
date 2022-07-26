import React from 'react';
import './LoadingScreen.scss';
import Loading from '../../Assets/Loading_icon.gif';

export default function LoadingScreen() {
  return (
    <div className="LoadingScreen">
      <img src={Loading} alt="loading gif" />  
    </div>
  )
}
