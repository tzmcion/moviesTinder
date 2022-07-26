import {MoviesDataType,ContextType} from '../Types';

const data:Array<MoviesDataType> = [{
    id:'0',
    imageURL:'0',
    rating:0,
    summary:'0',
    title:'0'
}];

const defaultContext:ContextType = {
    data:data,
    index:0
}

export default defaultContext;