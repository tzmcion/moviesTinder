import {createContext} from 'react';
import {ContextType} from '../Types';
import defaultData from './defaultContext';

const DataContext = createContext<ContextType>(defaultData);
const DataProvider = DataContext.Provider;

export {DataProvider}
export default DataContext