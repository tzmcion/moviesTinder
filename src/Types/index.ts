interface MoviesDataType {
    id:string,
    imageURL:string,
    title:string,
    summary:string,
    rating:number
}

interface ContextType{
    data:Array<MoviesDataType>
    index:number
}

export type {MoviesDataType,ContextType};