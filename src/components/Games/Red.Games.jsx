import React from 'react';
import '../../styles/Red.Games.css';
import '../../styles/GoldBar.Games.css';
import GoldBar from './GoldBar.Games'

const RedDead = () => {
    return (
        <>
        <div id="mainRed">
            <div>
                <div><img src="https://images.ctfassets.net/wn7ipiv9ue5v/chl54ODfILvV5STRUmMGW/5a9935cf7a9674aee466d56ed629e18e/RDR2_Logo.svg?w=512&h=&fm=webp&q=" alt="" /></div>
                <h2>Buy Red Dead Redemption 2</h2>
                <p>Select Platform:Rockstar Games Launcher</p>
                <div>
                    <button>
                    <img src="logo.svg" alt="" className="" />
                    </button>
                    <button>
                    <img src="logo.svg" alt="" className="" />
                    </button>
                    <button>
                       <img src="logo.svg" alt="" className="" />
                    </button>
                </div>
            </div>
            <div>
                <div><img src="https://images.ctfassets.net/wn7ipiv9ue5v/5JANuwUn7LTdXshdfMUIFD/98a046c496b39c89879b71b70e37c419/RDR_Hero_FPO.jpg?w=2048&h=&fm=webp&q=" alt="" /></div>
            </div>

        </div>
        <GoldBar/>
        </>
    )
 
}



export default RedDead

