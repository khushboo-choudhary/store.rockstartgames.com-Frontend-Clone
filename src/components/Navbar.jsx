//import {useState, useEffect,useRef} from 'react'
//import Navbar from './components/Navbar' 
const Navbar = (props)=>{



return(
<>
<div className="flex justify-between items-center text-white bg-black">

    <div className="hidden md:flex justify-between items-center p-4 mx-24">
        <img className="w-12 h-12" src="https://images.ctfassets.net/wn7ipiv9ue5v/4ajpWv2L0zlK6pObfLPOcL/d6d3875cb5a5bfc074c6a92cf6dce0c2/rockstar_logo.png?w=104&h=&fm=webp&q=" alt=""  />
        
        <div className="flex mx-6 items-center">
            <p className="font-bold cursor-pointer">Game</p>
           <img className="w-3 h-3 ml-1" src="https://i.ibb.co/ZzXv85c/pngwing-com.png" alt="pngwing-com"/>
        </div>        
        <div className="flex mx-6 items-center">
            <p className="font-bold cursor-pointer">Collection</p>
           <img className="w-3 h-3 ml-1" src="https://i.ibb.co/ZzXv85c/pngwing-com.png" alt="pngwing-com"/>
        </div>
        <p className="mx-6 font-bold cursor-pointer">Gear</p>
        
    </div>

    <div className="hidden md:flex justify-between items-center">
        <input type="text" className="rounded-r-full px-3 bg-gray-800 hidden lg:block" placeholder="Search" />
        <p className="mx-6 font-bold cursor-pointer">Sign in</p>

    </div>

</div>






</>

)
}

export default Navbar;