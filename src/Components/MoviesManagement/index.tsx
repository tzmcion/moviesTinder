import React,{useContext,useState,useEffect} from 'react';
import { ReactElement } from 'react';
import DataDisplay from './DataDisplay';
import ChoiceManagement from './ChoiceManagement';
import AdvancedDescription from './AdvancedDescription';
import {ContextType} from '../../Types';
import DataContext from '../../Utils/DataContext';
import './MoviesManagement.scss';
import './mediaKeys.scss';

interface MoviesManagementProps{
    setIndex: () => void;
}

export default function MoviesManagement({setIndex}:MoviesManagementProps):ReactElement {

  const contextData:ContextType = useContext(DataContext);
  const [active,setActive] = useState<boolean>(false);

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50 

  const onTouchStart = (e:any):void => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e:any) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = ():void => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe){
      handleNext();
    }
  }

  const renderData = function():ReactElement{
      const nextIndex = contextData.index + 1 >= contextData.data.length ? 0 : contextData.index + 1;
      return <DataDisplay data={contextData.data[nextIndex]} active={active} position='right' />
  }

  const handleNext = function ():void{
    if(!active)
    setActive(true);
  }

  useEffect(()=>{
    if(active){
      setTimeout(()=>{
        setActive(false);
        setIndex();
      },1000)
    }
  },[active,setIndex])

  return (
    <div className="MoviesManagement-Main" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <DataDisplay data={contextData.data[contextData.index]} active={false} position='mid' />
        <AdvancedDescription data={contextData.data[contextData.index]} active={active} />
        {renderData()}
        <ChoiceManagement onClick={handleNext} data={contextData.data[contextData.index]} />
    </div>
  )
}
