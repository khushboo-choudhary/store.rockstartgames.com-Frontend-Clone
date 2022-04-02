import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Grand from '../components/Collections/Grand.Collection'
import {Home} from "../components/HomePage/Home"
import GoldBar from '../components/Games/GoldBar.Games'
import SharkCards from '../components/Games/SharkCards.Games'
import Red from '../components/Collections/Red.Collection'
import Rock from '../components/Collections/Rock.Collection'
import AllCard from '../components/Gear/Card/Card'
import Product from '../components/Gear/Product/Product'
import ProductDetails from '../components/Collections/ProductDetails'
import SeeAllApparel from '../components/Gear/SeeAll/SeeAll.apparel'
import SeeAllPoster from '../components/Gear/SeeAll/SeeAll.posters'
import SeeAllCollect from '../components/Gear/SeeAll/SeeAll.collect'

import Account from "../components/User/Account"
import Offer from "../components/User/Offer"
import Member from "../components/User/Member"
import Signin from "../components/Signin/Signin"
import Cart from '../components/Cart/Cart'
import Create from "../components/Signin/Create"
import SingleGame from '../components/newGames/SingleGame'
import Address from '../components/Address/Address'




const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grand-theft-auto-collection" element={<Grand />} />
      <Route path="/red-dead-redemption-collection" element={<Red />} />
      <Route path="/rockstar-collection" element={<Rock />} />
      <Route path="/collection/:id" element={<ProductDetails />} />
      {/* <Route path='/games/goldbar' element={<GoldBar/>}/>
        <Route path='/games/sharkcards' element={<SharkCards/>}/>
        <Route path='/games/reddead' element={<RedDead/>}/> */}
      {/* games route */}
      <Route path="/games/:id" element={<SingleGame />} />
      <Route path="/buy-red-dead-online-gold-bars" element={<GoldBar />} />
      <Route path="/buy-gta-v-shark-cash-cards" element={<SharkCards />} />
      <Route path="/gear" element={<AllCard />} />
      <Route path="/gear/:id" element={<Product />} />
      <Route path="/seeall/apparel" element={<SeeAllApparel />} />
      <Route path="/seeall/posters" element={<SeeAllPoster />} />
      <Route path="/seeall/collectibles" element={<SeeAllCollect />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/address' element={<Address/>}/>

      {/* Added by Shantanu */}
      <Route path="/offers" element={<Offer />} />
      <Route path="/account" element={<Account />} />
      <Route path="/member" element={<Member />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/register" element={<Create />} />
    </Routes>
  );
}

export default AllRoutes