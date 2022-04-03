//import {useState, useEffect,useRef} from 'react'
//import GameMenu from './components/GameMenu' 
import './GameMenu.css';
import {Link} from 'react-router-dom'

const GameMenu = ({hideclass})=>{

return(
<>

<ul className="top-0 right-0 left-0 z-40 pl-32 w-full tracking-wider bg-black opacity-90" id="menucol">
  <li>
  <div className="pt-6 pl-32 mb-10 bg-black">
    <Link onClick={hideclass} to="/grand-theft-auto-collection" className="p-2 font-semibold text-white hover:bg-[#161616]">Grand Theft Auto Collection</Link>
    <Link onClick={hideclass} to="/red-dead-redemption-collection" className="p-2 m-2 font-semibold text-white hover:bg-[#161616]">Red Dead Redemption Collection</Link>
    <Link onClick={hideclass} to="/rockstar-collection" className="p-2 m-2 font-semibold text-white hover:bg-[#161616]">Rockstar Games Collection</Link>
  </div>

  </li>
</ul>
</>

)
}

export default GameMenu;

