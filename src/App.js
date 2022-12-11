

import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TableData from './components/Table';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Compare from './components/Compare';
import { createContext } from 'react';
import { useState } from 'react';
export const DataContext=createContext()
function App() {

  const [data,setData]=useState([])
  const [compareData,setCompareData]=useState([])
  return (
 <DataContext.Provider value={{data,setData,compareData,setCompareData}}>  
    <Router>
     <Navbar/>
     <Sidebar/>
     <Routes>
     <Route path='/home' element={ <TableData />}/>   
     <Route path='/compare' element={ <Compare />}/>  
     </Routes>
    </Router>
    </DataContext.Provider>

  );
}

export default App;
