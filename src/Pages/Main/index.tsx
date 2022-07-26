import React, {useEffect,useState} from 'react';

import NavBar from '../../Components/NavBar';
import LoadingScreen from '../../Components/LoadingScreen';
import MoviesManagement from '../../Components/MoviesManagement';

import {MoviesDataType} from '../../Types'; //Main data type
import {DataProvider} from '../../Utils/DataContext';

import "./Main.scss";


export default function Main() {

    const [data,setData] = useState<Array<MoviesDataType>>(); //Main data Array
    const [dataIndex,setDataIndex] = useState<number>(0);   //Data Array index number f.e. data[dataIndex].id

    useEffect(() =>{
        //Fetching Data from abstract backend
        fetch('/recomendations.json').then(res => {
            if(res.status !== 200){
                throw new Error("Error, file 'recomendations.json' does not exist or is not a valid");
            }
            return res.json();
        }).then(data =>{
            setData(data.data);
        })
    },[])

    //Function responsible for switching between different movies
    const switchMovies = function(){
        if(data){
            let toSet:number = dataIndex + 1;
            if(toSet >= data.length){toSet = 0}
            setDataIndex(toSet);
        }
    }

    //Function switches betwen LoadingScreen and MainApp
    const render = function(){
        if(data){
            return  <DataProvider value={{data:data,index:dataIndex}}>
                        <MoviesManagement setIndex={switchMovies} />
                    </DataProvider>
        }
        return <LoadingScreen />
    }

  return (
    <div className='Main'>
        <NavBar />
        {render()}
    </div>
  )
}
