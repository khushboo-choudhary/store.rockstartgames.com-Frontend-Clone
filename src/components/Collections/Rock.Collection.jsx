import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Grand.collection.css';


const Rock = () => {
    const [gamesrock,setGamesrock] = useState([]);
    const [apparelrock,setApparelrock] = useState([]);
    const [collerock,setCollerock] = useState([]);

    useEffect(() => {
      axios.get(`https://obscure-citadel-15133.herokuapp.com/games/rock`).then((res) => {
          setGamesrock(res.data.games);
          console.log("game",res.data.games);
        })
        axios.get(`https://obscure-citadel-15133.herokuapp.com/coll/rock/apparel`).then((res) => {
            setApparelrock(res.data.collection);
            console.log("apparel",res.data.collection);
        })
        axios.get(`https://obscure-citadel-15133.herokuapp.com/coll/rock/gear`).then((res) => {
            setCollerock(res.data.collection);
            console.log("gear",res.data.collection);
        })
    },[])
  return (
    <div id='main_grand'>

     <div>
         Collections
         <h2>Rockstar Games</h2>
     </div>

     {/* <div>
        <h1>Games</h1>
        <div className='flex p-2'>{gamesrock.map((el) => {
            return <div className='rounded-xl mx-2 bg-black' key={el._id}>
              <Link to={`/gamesDetails/${el._id}`}>
               <img className='rounded-t-xl' src={el.heroimg} alt="" />
               <p className='text-gray-400 ml-2 py-2'>{el.name}</p>
               <p className='font-bold ml-2 py-1'>€{el.price}</p>
              </Link>
            </div>
        })}</div>
     </div> */}

     <div>
         <h1>Apparel</h1>
         <div className=' flex rounded-xl mx-2'>{apparelrock.map((el) => {
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
         <h1>Gear</h1>
         <div className='flex p-2'>{collerock.map((el) => {
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

export default Rock