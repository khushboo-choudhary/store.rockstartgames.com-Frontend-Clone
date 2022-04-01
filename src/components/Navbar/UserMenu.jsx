// //import {useState, useEffect,useRef} from 'react'
// //import GameMenu from './components/GameMenu' 
// import './GameMenu.css';
// import {Link} from 'react-router-dom'

// const UserMenu = (props)=>{

// return(
// <>

// <ul className="top-0 right-0 left-0 z-40 bg-black opacity-90" id="menucol">
//   <li>
//   <div className="mb-10 bg-black">
//     <Link to="/account" className=" font-semibold text-white hover:bg-[#161616]">My Account</Link>
//     </div>
//     <div className="mb-10 bg-black">
//     <Link to="/offers" className=" m-2 font-semibold text-white hover:bg-[#161616]">My Offer</Link>
//     </div>
//     <div className="mb-10 bg-black">
//     <Link to="/member" className=" m-2 font-semibold text-white hover:bg-[#161616]">Rockstar Social Club</Link>
//     </div>
//     <div className="mb-10 bg-black">
//     <Link to="/" className=" m-2 font-semibold text-white hover:bg-[#161616]">Sign Out</Link>
//     </div>

//   </li>
// </ul>
// </>

// )
// }

// export default UserMenu;

//import {useState, useEffect,useRef} from 'react'
//import GameMenu from './components/GameMenu' 
import './GameMenu.css';

const UserMenu = (props)=>{

return(
<>

{/* <p className='bg-indigo-700 animate-bounce mt-68'>Checking GameMenu Component Working </p> */}
<ul className="top-0 right-0 left-0 z-40 content-end ml-96 w-full opacity-100" id="menu">
      <div>
          <li><a href="#">Sotto menu 1</a></li>
      </div>
      <li><a href="#">Sotto menu 2</a></li>
</ul>
</>

)
}

export default UserMenu;