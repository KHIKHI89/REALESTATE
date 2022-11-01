import React, {useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import  {useLocation , useNavigate} from 'react-router-dom'
import {GiSpookyHouse} from 'react-icons/gi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {HiViewList} from 'react-icons/hi'

import './NavBar.css'


export default function NavBar ()  {
    const location = useLocation();
    const navigate = useNavigate();
    function pathMathRoute(route) {
        if(route === location.pathname) {return true;
    }
    }
    const[click , setClick] = useState(false)
    const handleClick = () => setClick(!click);
    
  return (
    <div className="navbar">
        <div className="container">
            <h1 className="flex"><span className="w-80% flex "><GiSpookyHouse className="w-full flex font-bold" />Real</span>Estate</h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className={`cursor-pointer border-b-[3px] border-b-transparent ${pathMathRoute("/") && "border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>
                <li className={`cursor-pointer border-b-[3px] border-b-transparent ${pathMathRoute("/offers") && "border-b-red-500"}`} onClick={()=>navigate("/offers")}>Offers</li>
            </ul>
            <button className={`cursor-pointer border-b-[3px] border-b-transparent  ${pathMathRoute("/Log-in") && "opacity-50%"}`} onClick={() =>navigate("/log-in")}>LOG IN</button>

            <div className="Ham" onClick={handleClick}>
                {click ? (<FaRegTimesCircle className="icon" />) : (<HiViewList />)}
            </div>
        </div>

    </div>)
    
  
}
// className={click ? 'nav-menu active' : 'nav-menu'} dans le ul 
//   className={`border-b-[3px] border-b-transparent ${pathMathRoute("/") && "border-b-red-500"}`}
