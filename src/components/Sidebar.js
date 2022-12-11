import React from 'react'

import Sidenav,{
   
    NavItem,
    NavText,
} from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css"
;
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate=useNavigate();
 
  return (
   
   <Sidenav style={{ backgroundColor: '#3da1e0', height : 900, }}
   onSelect={selected=>{
    console.log(selected)
    navigate('/'+ selected)
   }}
   >
    <Sidenav.Toggle/>
    <Sidenav.Nav defaultSelected="home">
        <NavItem eventKey="home">
                <NavText>Product Page</NavText>
        </NavItem>
        <NavItem eventKey="compare">
                <NavText>Compare</NavText>
        </NavItem>
    </Sidenav.Nav>
    </Sidenav>
   
);
  
}

export default Sidebar;
