//import {useState, useEffect,useRef} from 'react'
//import Member from './components/Member' 
import {Link} from 'react-router-dom'
const Member = (props)=>{

    console.log("member inside member")
    
return(
<>

<div className="flex justify-between text-white bg-black">

<div className="flex justify-between items-center">
<img className="ml-4 w-8 h-8" src="https://s.rsg.sc/sc/images/react/logo/rockstar_small.png" alt=""/>
<img className="h-10 w-[128px] ml-2" src="https://s.rsg.sc/sc/images/react/logo/socialclub_small.png" alt="" />
    <Link to='' className='p-4' >JOB</Link>
    <Link to='' className='p-4' >PHOTOS</Link>
    <Link to='' className='p-4' >VIDEOS</Link>
    <Link to='' className='p-4' >EVENTS</Link>
    <Link to='' className='p-4' >NEWS</Link>
    <Link to='' className='p-4' >STORE</Link>
</div>
<div className="flex justify-between items-center">
<Link to='' className='p-4' >NEWS</Link>

<div className="h-full bg-[#FCAF17]">DOWNLOAD LAUNCHER</div>
    
</div>
</div>


</>

)
}

export default Member;