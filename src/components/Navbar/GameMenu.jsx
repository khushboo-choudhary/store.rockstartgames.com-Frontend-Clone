//import {useState, useEffect,useRef} from 'react'
//import GameMenu from './components/GameMenu' 
import './GameMenu.css';
import {Link} from 'react-router-dom'

const GameMenu = (props)=>{

return(
<>

<ul className="top-0 right-0 left-0 z-40 pl-32 w-full tracking-wider bg-black opacity-90" id="menu">
  <li>
  <div className="pt-6 pl-32 mb-10 w-full bg-black">
  <Link to="game/buy-red-dead-redemption-2" className="p-2 font-semibold text-white hover:bg-[#161616]">Red Dead Redemption 2</Link>
<Link to="/buy-red-dead-online-gold-bars" className="p-4 m-2 font-semibold text-white hover:bg-[#161616]">Red Dead Online: Gold Bars</Link>
<Link to="/game/buy-gta-v" className="p-4 m-2 font-semibold text-white hover:bg-[#161616]">Grand Theft Auto V</Link>
<Link to="/buy-gta-v-shark-cash-cards" className="p-4 m-2 font-semibold text-white hover:bg-[#161616]">Grand Theft Auto Online: Shark Cash Cards</Link>

  </div>
  <div className="pl-32 mb-10 bg-black backdrop-blur-sm">
  <Link to="/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition" className="p-4 m-2 font-semibold text-white hover:bg-[#161616]">Grand Theft Auto: The Trilogy – The Definitive Edition</Link>
<Link to="/game/buy-la-noire" className="p-4 m-2 font-semibold text-white hover:bg-[#161616]">L.A. Noire</Link>
<Link to="/game/buy-bully-scholarship-edition" className="p-4 m-2 font-semibold text-white hover:bg-[#161616]">Bully: Scholarship Edition</Link>
<Link to="/game/buy-max-payne-3" className="p-4 m-2 font-semibold text-white hover:bg-[#161616]">Max Payne 3</Link>
  </div>
  <div className="pl-32 mb-4 bg-black backdrop-blur-sm">
  <Link to="/game/buy-grand-theft-auto-iv" className="p-4 m-2 font-semibold text-white hover:bg-[#161616]">Grand Theft Auto IV: Complete Edition</Link>
  <Link to="/game/buy-grand-theft-auto-the-trilogy" className="p-4 m-2 font-semibold text-white hover:bg-[#161616]">Grand Theft Auto: The Trilogy</Link>
</div>
  </li>
</ul>
</>

)
}

export default GameMenu;

