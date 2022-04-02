import {Link} from 'react-router-dom';
//import {useState, useEffect,useRef} from 'react'
//import Footer from './components/Footer' 
const Footer = (props)=>{

return(
<>

<div className="justify-between items-center px-24 py-12 text-gray-300 align-middle bg-black md:flex">

    <div  className="flex mx-3 justify-center">
        <img className="content-center" src="https://images.ctfassets.net/wn7ipiv9ue5v/3xUaf2WTvplgFfgVctTlaR/3819f84a8a02af6e86ad138401db47c6/ROCKSTAR_EAGLE.svg?w=283&h=&fm=webp&q=" alt="" />
    </div>
    <div className="md:mr-40 md:mx-3">
        <div className="grid text-center grid-1 md:grid-cols-4 lg:grid-cols-4">

        <Link className="my-1 hover:underline mt-2" to="">Rockstar Support</Link>
        <Link className="my-1 hover:underline" to="">Privacy Policy</Link>
        <Link className="my-1 hover:underline" to="">Cookie Policy</Link>
        <Link className="my-1 hover:underline" to="">Terms of Service</Link>
        <Link className="my-1 hover:underline" to="">Do Not Sell My Personal Information</Link>
        <Link className="my-1 hover:underline" to="">Refunds</Link>
        </div>
        <div className="text-[12px] text-gray-300 text-center my-1">Rockstar Games, Inc. | Rockstar Games and R* are marks and logos of Take-Two Interactive. All rights reserved. All trademark referenced herein are properties of their respective owners. The Rockstar Store is operated by Xsolla.</div>
    </div>
    <div className="mx-3">
        <select name="" id="" className="p-2 text-white bg-black focus:bg-black hover:bg-gray-500 outline-none">
            <option value="">English</option>
            <option value="">Spanish</option>
            <option value="">French</option>
        </select>
        
    </div>
    <div className="flex mx-3 justify-center">
        <img src="https://images.ctfassets.net/wn7ipiv9ue5v/5x1AyDHBq8H6HMhWlSYNlB/1bfb8c7aeb294e722a49328052caa3c5/Frame__1_.svg?w=160&h=&fm=webp&q=" alt="" className="content-center mt-3 w-[3rem] md:max-w-[7rem] md:max-h-[5rem]" />
    </div>
    
</div>


</>

)
}

export default Footer;