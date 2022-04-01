import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Grand.collection.css';


const Red = () => {
    const [gamesred,setGamesred] = useState([]);
    const [apparelred,setApparelred] = useState([]);
    const [collered,setCollered] = useState([]);

    useEffect(() => {
      axios.get(`https://obscure-citadel-15133.herokuapp.com/games/red`).then((res) => {
        setGamesred(res.data.games);
          console.log("game",res.data.games);
        })
        axios.get(`https://obscure-citadel-15133.herokuapp.com/coll/red/apparel`).then((res) => {
            setApparelred(res.data.collection);
            console.log("apparel",res.data.collection);
        })
        axios.get(`https://obscure-citadel-15133.herokuapp.com/coll/red/gear`).then((res) => {
            setCollered(res.data.collection);
            console.log("gear",res.data.collection);
        })
    },[])
  return (
    <div id='main_grand'>

     <div>
         Collections
         <h2>Red Dead Redemption</h2>
     </div>

     <div>
        <h1>Games</h1>
        <div className='flex p-2'>{gamesred.map((el) => {
            return <div className='rounded-xl mx-2 bg-black' key={el._id}>
              <Link to={`/gamesDetails/${el._id}`}>
               <img className='rounded-t-xl' src={el.heroimg} alt="" />
               <p className='text-gray-400 ml-2 py-2'>{el.name}</p>
               <p className='font-bold ml-2 py-1'>€{el.price}</p>
              </Link>
            </div>
        })}</div>
     </div>

     <div>
         <h1>Buy Gold Bars for PC</h1>
         <p>With Gold Bars you can quickly unlock all manner of goods in Red Dead Online; from custom modifications to your weapons to horse kits to unique items for your camp.</p>
         <div className=' flex rounded-xl mx-2'>
             <div className='rounded-xl pb-8 mx-2 bg-black'>
                 <div><img className='rounded-t-xl' src='https://images.ctfassets.net/wn7ipiv9ue5v/1WHByNDahkDtZiL76oGCHu/9a11218bebd14cf8a3709fe16a015177/goldBar_350.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p className='text-gray-400 ml-2 py-2'>350 Gold Bars</p>
                 <p className='font-bold ml-2 py-1'>₹8,329.00</p>
             </div>
             <div className='rounded-xl pb-8 mx-2 bg-black'>
                <div><img className='rounded-t-xl' src='https://images.ctfassets.net/wn7ipiv9ue5v/1ffEmuQJwP07SLS0iKjjK5/948ebb40612b5bd82ae0b95b0bda5283/goldBar_245.jpg?w=2048&h=&fm=webp&q=' alt="img"></img></div>
                 <p className='text-gray-400 ml-2 py-2'>245 Gold Bars</p>
                 <p className='font-bold ml-2 py-1'>₹6,239.00</p>
             </div>
             <div className='rounded-xl pb-8 mx-2 bg-black'>
                 <div><img className='rounded-t-xl' src='https://images.ctfassets.net/wn7ipiv9ue5v/t0PNr23DOepDPnIaGtDaY/fb3027e7fcf29fe0b2244d04c8498aae/goldBar_150.jpg?w=2048&h=&fm=webp&q=' alt="img"></img></div>
                 <p className='text-gray-400 ml-2 py-2'>150 Gold Bars</p>
                 <p className='font-bold ml-2 py-1'>₹4,159.00</p>
             </div>
             <div className='rounded-xl pb-8 mx-2 bg-black'>
                <div><img className='rounded-t-xl' src='https://images.ctfassets.net/wn7ipiv9ue5v/XiDpY63IbrcI7X0plcRhj/e52a10d0d8a65df198a9448abe76741c/goldBar_55.jpg?w=2048&h=&fm=webp&q=' alt="img"></img></div>
                 <p className='text-gray-400 ml-2 py-2'>55 Gold Bars</p>
                 <p className='font-bold ml-2 py-1'>₹1,659.00</p>
             </div>
             <div className='rounded-xl pb-8 mx-2 bg-black'>
                <div><img className='rounded-t-xl' src='https://images.ctfassets.net/wn7ipiv9ue5v/7HrlsIX3CwfdvUPjUlR6yE/26cb1a74357764ff548e21debf4924e5/goldBar_25.jpg?w=2048&h=&fm=webp&q=' alt="img"></img></div>
                 <p className='text-gray-400 ml-2 py-2'>25 Gold Bars</p>
                 <p className='font-bold ml-2 py-1'>₹669.00</p>
             </div>
         </div>
     </div>

     <div>
         <h1>Apparel</h1>
         <div className=' flex rounded-xl mx-2'>{apparelred.map((el) => {
             return <div key={el._id} className='rounded-xl mx-2 bg-black' >
                 <Link to={`/apparelDetail/${el._id}`}>
                  <img className='rounded-t-xl' src={el.image} alt="" />
                   <p className='text-gray-400 ml-2 py-2'>{el.name}</p>
                   <p className='font-bold ml-2 py-1'>€{el.price}</p>
                 </Link>
             </div>
         })}</div>
     </div>

     <div>
         <h1>Red Dead Redemption Essentials Collection</h1>
         <div className='flex p-2'>{collered.map((el) => {
             return <div className='rounded-xl mx-2 bg-black' key={el._id}>
                 <Link to={`/gearDetail/${el._id}`}>
                   <img className='rounded-t-xl' src={el.image} alt="" />
                   <p className='text-gray-400 ml-2 py-2'>{el.name}</p>
                   <p className='font-bold ml-2 py-1'>€{el.price}</p>
                 </Link>
             </div>
         })}</div>
     </div>

    </div>
  )
}

export default Red