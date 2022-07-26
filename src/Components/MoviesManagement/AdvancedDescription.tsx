//Advanced description is only used in computer resolitions

import React,{ReactElement,useState,useEffect} from 'react';
import {MoviesDataType} from '../../Types';
import HalfStar from '../../Assets/half_star.png';
import Star from '../../Assets/star.png';

interface AdvancedDescriptionProps{
    data:MoviesDataType,
    active:boolean,
  }

export default function AdvancedDescription({data,active}:AdvancedDescriptionProps):ReactElement {

    const [isAnimating,setIsAnimating] = useState<'forwards' | 'backwards' | 'none'>('none');
    const [isDescription,setIsDescription] = useState<boolean>(true);

    const renderStars = ():ReactElement =>{
        const ratingInt:number = Math.floor(data.rating);
        const fullStars:number = Math.floor(ratingInt / 2);
        const halfStar:boolean = ratingInt % 2 === 1 ? true : false;
        const stars:Array<ReactElement> = [];
        if(fullStars > 0){
            for(let x = 0; x < fullStars; x++){
                stars.push(<img src={Star} alt="half-star" className="AdvancedDescription-stars-star" key={x} />)
            }
        }
        if(halfStar){
            stars.push(<img src={HalfStar} alt="half-star" className="AdvancedDescription-stars-star" key={10} />)
        }

        return ( 
            <div className="AdvancedDescription-stars">
                {stars}
            </div>
        )
    }

    useEffect(()=>{
        if(active === false){
            setIsAnimating('forwards');
            setTimeout(()=>{setIsAnimating('none');},1000);
        }
        if(active === true){
            setIsAnimating('backwards')
        }
    },[active])

  return (
    <div className={`AdvancedDescription ${isAnimating} ${isDescription? "" : "zBig"}`}>
        <p className={isDescription? '' : 'hideDescription'}>{data.summary}</p>
        <button className={isDescription? '' : 'Btdown'} onClick={() =>setIsDescription(!isDescription)}>{isDescription ? 'Hide Description' : 'Show Description'}</button>
        <h2>{data.title}</h2>
        {renderStars()}
        <h3>{data.rating}/10</h3>
    </div>
  )
}
