//import {useState, useEffect,useRef} from 'react'
//import Member from './components/Member' 
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {Link} from 'react-router-dom'
import './member.css';
const Member = (props)=>{

    console.log("member inside member")

    const MemberCard= ({img,txt,btntxt, link}) =>{
        return(
            <>
        <div className="rounded text-black w-fit shadow-xl mx-2 my-6 pb-3">
            <img className='rounded-t-md w-96' src={img} alt=''/>
        <p className="p-2">{txt}</p>
        <Link className="bg-yellow-400 p-2 w-full ml-2" to={link} >{btntxt}</Link>
        </div>
        </>
        )
    }
    
return(
<>

<div className="flex justify-between text-white bg-black">

<div className="flex justify-between items-center">
<img className="ml-4 w-8 h-8" src="https://s.rsg.sc/sc/images/react/logo/rockstar_small.png" alt=""/>
<img className="h-10 w-[128px] ml-2" src="https://s.rsg.sc/sc/images/react/logo/socialclub_small.png" alt="" />
    <Link to='' className='hidden md:block p-4' >JOB</Link>
    <Link to='' className='hidden md:block p-4' >PHOTOS</Link>
    <Link to='' className='hidden md:block p-4' >VIDEOS</Link>
    <Link to='' className='hidden md:block p-4' >EVENTS</Link>
    <Link to='' className='hidden md:block p-4' >NEWS</Link>
    <Link to='' className='hidden md:block p-4' >STORE</Link>
</div>
<div className="flex justify-between items-center">
<Link to='' className='p-4 hidden md:block' >NEWS</Link>

<div className="space-x-4 h-full bg-[#FCAF17] text-black text-[12px] font-semibold p-4">DOWNLOAD<br/> LAUNCHER</div>
    <div className="mx-4 rounded-full p-1 border border-yellow-300 "> <SearchIcon/></div>
    <div className="mx-4 "><NotificationsActiveIcon/></div>
    <div className="mx-4 "><img className='w-8 h-8 rounded-full' src='https://images.ctfassets.net/wn7ipiv9ue5v/4ajpWv2L0zlK6pObfLPOcL/d6d3875cb5a5bfc074c6a92cf6dce0c2/rockstar_logo.png?w=104&h=&fm=webp&q=' alt=''/></div>
</div>
</div>

<div className='top-0 item-center bg-gray-50 item-center' id="yellow">

<div className="mx-4 "><img className='w-20 h-20' src='https://images.ctfassets.net/wn7ipiv9ue5v/4ajpWv2L0zlK6pObfLPOcL/d6d3875cb5a5bfc074c6a92cf6dce0c2/rockstar_logo.png?w=104&h=&fm=webp&q=' alt=''/></div>

<div className=' p-2 top-0 flex justify-start item-center bg-gray-50 mx-5 text-gray-700 mt-2'>

    <div class="p-3"> <Link to="/" class="hover:underline font-semibold">Wall</Link></div>
    <div class="p-3 "> <Link to="/" class="hover:underline font-semibold">Games</Link></div>
    <div class="p-3 "> <Link to="/" class="hover:underline font-semibold">Friends</Link></div>
    <div class="p-3 "> <Link to="/" class="hover:underline font-semibold">Crews</Link></div>
    <div class="p-3 "> <Link to="/" class="hover:underline font-semibold">Jobs</Link></div>
    <div class="p-3 hidden md:block "> <Link to="/" class="hover:underline font-semibold">Photos</Link></div>
    <div class="p-3 hidden md:block"> <Link to="/" class="hover:underline font-semibold">Videos</Link></div>
</div>

<p className="ml-4 my-4 text-3xl text-gray-800 font-semibold">Recent Activity </p>

<div className="w-1/4 h-20 text-black bg-white ml-4 rounded my-2">
    <input value="Default" type="text" name="" id="" placeholder="Whats up?"/>
    <div className='flex justify-between items-center'>
    
    <p className="p-2">Post a message to your wall</p>
    <button className="p-2 text-black font-semibold px-4 py-2 bg-yellow-400 rounded">Post</button>
    </div>
</div>


</div>
<div className="bg-white rounded md:flex justify-start items-center">
<MemberCard img="https://s.rsg.sc/sc/images/react/feed/account/6.jpg" btntxt="View Photos" link="/photos" txt="Discover photos taken and shared by shodkk." />
<MemberCard img="https://s.rsg.sc/sc/images/react/feed/account/1.jpg" btntxt="Import Friends" link="/import" txt="Discover photos taken and shared by shodkk." />
<MemberCard img="https://s.rsg.sc/sc/images/react/feed/account/6.jpg" btntxt="Compare Stat" link="/compare" txt="Keep a record of your criminal exploits with stats" />
</div>

</>

)
}

export default Member;