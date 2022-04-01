import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Grand.collection.css';
import gameslogo from '../../img/gameslogo.png';


const Grand = () => {
    const [games,setGames] = useState([]);
    const [apparel,setApparel] = useState([]);
    const [colle,setColle] = useState([]);

    useEffect(() => {
      axios.get(`https://obscure-citadel-15133.herokuapp.com/games/grand`).then((res) => {
          setGames(res.data.games);
          console.log("game",res.data.games);
        })
        axios.get(`https://obscure-citadel-15133.herokuapp.com/coll/grand/apparel`).then((res) => {
            setApparel(res.data.collection);
            console.log("apparel",res.data.collection);
        })
        axios.get(`https://obscure-citadel-15133.herokuapp.com/coll/grand/gear`).then((res) => {
            setColle(res.data.collection);
            console.log("gear",res.data.collection);
        })
    },[])
  return (
    <div id='main_grand'>

     <div id="first_div">
         Collections
         <h2>Grand Theft Auto</h2>
     </div>


     <div>
        <h1>Games</h1>
        <div>{games.map((el) => {
            return <div key={el._id}>
              <Link to={`/gamesDetails/${el._id}`}>
               <img id="hero"  className='rounded-t-xl' src={el.heroimg} alt="" />
               <p className='text-gray-400 ml-2 py-2'>{el.name}</p>
               <p className='font-bold ml-2 py-1'>€{el.price}</p>
               <img src={gameslogo} alt="img" />
              </Link>
            </div>
        })}</div>
     </div>

     <div>
         <h1>Buy Shark Cash Cards for PC</h1>
         <p>Cash is king in this town. Solve your money problem and help get what you want across Los Santos and Blaine County with the occasional purchase of cash packs for Grand Theft Auto Online.</p>
         <div>
             <div className='rounded-xl pb-8 mx-2 bg-black'>
                 <div><img className='rounded-t-xl' src='https://images.ctfassets.net/wn7ipiv9ue5v/5YBFqRLDDxpq8BSwf98PdY/cc63f92ddbfe241c897b70003b4ffa74/megalodonCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p className='text-gray-400 ml-2 py-2'>Megalodon Shark Cash Card</p>
                 <p className='font-bold ml-2 py-1'>₹3,919.00</p>
             </div>
             <div className='rounded-xl pb-8 mx-2 bg-black'>
                <div><img className='rounded-t-xl' src='https://images.ctfassets.net/wn7ipiv9ue5v/3Ra7QWTG6RAVOTKmISfUh1/c58f3602fdc30e245178185f8b72db23/whaleCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p className='text-gray-400 ml-2 py-2'>Whale Shark Cash Card</p>
                 <p className='font-bold ml-2 py-1'>₹1,959.00</p>
             </div>
             <div className='rounded-xl pb-8 mx-2 bg-black'>
                 <div><img className='rounded-t-xl' src='https://images.ctfassets.net/wn7ipiv9ue5v/2E36gdKHDOIRmxX6H1y2h2/6941cea2e876c0466e79a16eccab0351/greatWhiteCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p className='text-gray-400 ml-2 py-2'>Great White Shark Cash Card</p>
                 <p className='font-bold ml-2 py-1'>₹779.00</p>
             </div>
             <div className='rounded-xl pb-8 mx-2 bg-black'>
                <div><img className='rounded-t-xl' src='https://images.ctfassets.net/wn7ipiv9ue5v/19JeVwVNCkh2oexDPwodNe/7d99319963faa9cd1b238041a790ce2f/bullCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p className='text-gray-400 ml-2 py-2'>Bull Shark Cash Card</p>
                 <p className='font-bold ml-2 py-1'>₹391.00</p>
             </div>
             <div className='rounded-xl pb-8 mx-2 bg-black'>
                <div><img className='rounded-t-xl' src='https://images.ctfassets.net/wn7ipiv9ue5v/68sXKV8nsnRL0tJjCZK5dw/14f8be36ce510d5782896d9d6193d486/tigerCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p className='text-gray-400 ml-2 py-2'>Tiger Shark Cash Card</p>
                 <p className='font-bold ml-2 py-1'>₹195.00</p>
             </div>
             <div className='rounded-xl pb-8 mx-2 bg-black'>
                <div><img className='rounded-t-xl' src='https://images.ctfassets.net/wn7ipiv9ue5v/5guhsRTsaMTFt4Fb77YpcQ/257f41c6732f27688bae13db6865cfa5/redCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p className='text-gray-400 ml-2 py-2'>Red Shark Cash Card</p>
                 <p className='font-bold ml-2 py-1'>₹117.00</p>
             </div>
         </div>
     </div>

     <div>
         <h1>Apparel</h1>
         <div >{apparel.map((el) => {
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
         <h1>Collectibles</h1>
         <div>{colle.map((el) => {
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

export default Grand