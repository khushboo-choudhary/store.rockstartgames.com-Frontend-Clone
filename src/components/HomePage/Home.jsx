import { BestSellers } from "./BestSellers"
import { HomeGames } from "./Games"
import { GrandTheftAuto } from "./GrandTheftCollection"
import { HomeHeader } from "./HomeHeader"
import { NewArrivals } from "./NewArrivals"
import { RedDeadEss } from "./RedDeadCollection"
import { ShopNow1 } from "./ShopNow1"
import { ShopNow2 } from "./ShopNow2"


export const Home = ()=>{


    return (
        <>
           <HomeHeader/>
           <NewArrivals/>
           <HomeGames/>
           <ShopNow1/>
           <BestSellers/>
           <ShopNow2/>
           <GrandTheftAuto/>
           <RedDeadEss/>
        </>
    )
}