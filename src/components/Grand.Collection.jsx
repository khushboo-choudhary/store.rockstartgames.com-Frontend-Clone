import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Grand.collection.css';


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

     <div>
         Collections
         <h2>Grand Theft Auto</h2>
     </div>

     <div>
        <h1>Games</h1>
        <div>{games.map((el) => {
            return <div>
                {el.price}
            </div>
        })}</div>
     </div>

     <div>
         <h1>Buy Shark Cash Cards for PC</h1>
         <p>Cash is king in this town. Solve your money problem and help get what you want across Los Santos and Blaine County with the occasional purchase of cash packs for Grand Theft Auto Online.</p>
         <div id='shark_cards'>
             <div>
                 <div><img src='https://images.ctfassets.net/wn7ipiv9ue5v/5YBFqRLDDxpq8BSwf98PdY/cc63f92ddbfe241c897b70003b4ffa74/megalodonCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p>Megalodon Shark Cash Card</p>
                 <p>₹3,919.00</p>
             </div>
             <div>
                <div><img src='https://images.ctfassets.net/wn7ipiv9ue5v/3Ra7QWTG6RAVOTKmISfUh1/c58f3602fdc30e245178185f8b72db23/whaleCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p>Whale Shark Cash Card</p>
                 <p>₹1,959.00</p>
             </div>
             <div>
                 <div><img src='https://images.ctfassets.net/wn7ipiv9ue5v/2E36gdKHDOIRmxX6H1y2h2/6941cea2e876c0466e79a16eccab0351/greatWhiteCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p>Great White Shark Cash Card</p>
                 <p>₹779.00</p>
             </div>
             <div>
                <div><img src='https://images.ctfassets.net/wn7ipiv9ue5v/19JeVwVNCkh2oexDPwodNe/7d99319963faa9cd1b238041a790ce2f/bullCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p>Bull Shark Cash Card</p>
                 <p>₹391.00</p>
             </div>
             <div>
                <div><img src='https://images.ctfassets.net/wn7ipiv9ue5v/68sXKV8nsnRL0tJjCZK5dw/14f8be36ce510d5782896d9d6193d486/tigerCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p>Tiger Shark Cash Card</p>
                 <p>₹195.00</p>
             </div>
             <div>
                <div><img src='https://images.ctfassets.net/wn7ipiv9ue5v/5guhsRTsaMTFt4Fb77YpcQ/257f41c6732f27688bae13db6865cfa5/redCard.jpg?w=1920&h=&fm=webp&q=' alt="img"></img></div>
                 <p>Red Shark Cash Card</p>
                 <p>₹117.00</p>
             </div>
         </div>
     </div>

     <div>
         <h1>Apparel</h1>
         <div>{}</div>
     </div>

     <div>
         <h1>Collectibles</h1>
         <div>{}</div>
     </div>

    </div>
  )
}

export default Grand