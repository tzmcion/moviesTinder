import React,{ReactElement} from 'react';
import {MoviesDataType} from '../../Types';

interface DataDisplayProps{
  data:MoviesDataType,
  active:boolean,
  position:'mid'|'right'
}

export default function DataDisplay({data,active,position}:DataDisplayProps):ReactElement {

  return (
    <div className={`DataDisplay-Main ${active ? 'move' : ''} ${position==='right' ? 'right': ''}`}>
      <div className="DataDisplay-Title">
        <h3 className='DD-title'>{data.title}</h3>
          <div className="DataDisplay-Summary">
              <h4>{data.rating}</h4>
          </div>  
      </div>
        <img src={data.imageURL} className="DataDisplay-Image" width="674" height="1000" alt="poster" />
    </div>
  )
}
