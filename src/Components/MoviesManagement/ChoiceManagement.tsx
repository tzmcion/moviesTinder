import React,{ReactElement} from 'react';
import {MoviesDataType} from '../../Types';

import Fire from '../../Assets/fire.png';
import Heart from '../../Assets/green_heart.png';

interface ChoiceManagementProps{
    onClick: () => void;
    data: MoviesDataType
}

export default function ChoiceManagement({onClick,data}:ChoiceManagementProps):ReactElement {

  function clicker(decision:'reject' | 'accept'):void{
    const URL = `/recomendations/${data.id}/${decision}`
    fetch(URL,{method: 'PUT'});
    onClick();
  }

  return (
    <div className="ChoiceManagement">
        <img src={Fire} alt="Fire_Icon" className='ChoiceManagement-Icon Fire-Icon' onClick={()=>clicker('reject')} />
        <img src={Heart} alt="Heart_Icon" className='ChoiceManagement-Icon Heart-Icon' onClick={()=>clicker('accept')} />  
    </div>
  )
}
