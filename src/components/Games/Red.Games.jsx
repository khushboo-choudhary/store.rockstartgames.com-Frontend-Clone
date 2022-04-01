import React from 'react';
import '../../styles/Red.Games.css';
import '../../styles/GoldBar.Games.css';
import SimpleAccordion from './Accordian';
import BasicTable from './tables';
import MultipleItems from './slider';
import MultipleVideo from './sliderVideo';
import MultiActionAreaCard from './card';
import BasicTables from './data';
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
                            <img src="logo.svg" alt="svg" className="" />
                        </button>
                        <button>
                            <img src="logo.svg" alt="svg" className="" />
                        </button>
                        <button>
                            <img src="logo.svg" alt="svg" className="" />
                        </button>
                    </div>
                    <button>COMPARE EDITION</button>
                </div>
                <div>
                    <div><img src="https://images.ctfassets.net/wn7ipiv9ue5v/5JANuwUn7LTdXshdfMUIFD/98a046c496b39c89879b71b70e37c419/RDR_Hero_FPO.jpg?w=2048&h=&fm=webp&q=" alt="img" /></div>
                </div>

            </div>
            <div>
                <div>
                <h1>Game Details</h1>
                <h4>An Epic Tale of honor and loyalty</h4>
                <p>America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.</p>
                </div>
                <div>
                <BasicTables/>
                </div>
            </div>
            <div>
                <h1>Compare Editions</h1>
                <MultiActionAreaCard/>
            </div>

            <br />
            <div>
                <h1>Key Features</h1>
                <div>
                    <h1>Live In A Gang Of Outlaws Fighting To Survive</h1>
                    <p>As Arthur Morgan, loyal right hand to charismatic gang leader, Dutch Van Der Linde, you’ll live, hunt, party, steal and fight alongside a diverse cast of outlaws you'll come to know as family, including Bill Williamson, Javier Escuella, Sadie Adler, Micah Bell, John Marston, Charles Smith, Susan Grimshaw and many more. The Van Der Linde gang is a group of fully realized characters and living and fighting alongside this gang is an experience unlike any other.</p>
                    <img src="https://images.ctfassets.net/wn7ipiv9ue5v/4tKaYwZ1hFYVQ8jqFTZ5Kk/27c3d2aeacfcbaa07ec3178aaa94232a/rdr1.jpg?w=2048&h=&fm=webp&q=" alt="img" className="src" />
                </div>
                <div>
                    <h1>The World of Red Dead Online</h1>
                    <p>Join millions of fellow players in the ever-evolving world of Red Dead Online, and experience a vast recreation of the American West now packed with years' worth of new features, gameplay and additional enhancements. Forge your own path as you battle lawmen, outlaw gangs and ferocious wild animals to build a life on the frontier. Build a camp, ride solo or form a posse and explore everything from the snowy mountains in the North to the swamps of the South, from remote outposts to busy farms and bustling towns.</p>
                    <img src="https://images.ctfassets.net/wn7ipiv9ue5v/53mEAuEbwYemgTO8mMBO3U/26bc6a896ab9233e3844a2b96f316331/rdr2.png?w=2048&h=&fm=webp&q=" alt="img" className="src" />
                </div>
                <div>
                    <h1>Step into a Frontier Pursuits Role</h1>
                    <p>Chase down bounties as a Bounty Hunter, fish and trade as a Trader; search for exotic treasures as a Collector; run your own underground Moonshine distillery, or become a Naturalist to learn the secrets of the animal kingdom and much more in a world of astounding depth and detail.</p>
                    <img src="https://images.ctfassets.net/wn7ipiv9ue5v/1AI43nZY61GZoYnI3Opqti/aef2f95d7074a37a80338768d5d68fe4/rdr3.png?w=2048&h=&fm=webp&q=" alt="img" className="src" />
                </div>
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
                <h1>Videos</h1>
                <MultipleVideo/>
            </div>
            <div>
                <h1>Screenshots</h1>
                <MultipleItems/>
            </div>
            <div>
                <h1>Supported Languages</h1>
                <p>English, French, Italian, German, Spanish (Spain), Russian, Japanese, Portuguese, Polish, Korean, Simplified Chinese, Traditional Chinese, Spanish (Mexico)</p>
                
            </div>

            <div>
                <h1>System Requirements</h1>
                <BasicTable/>
            </div>
            <div>
                <p>Installation, activation, and online play require Rockstar Games Launcher & log-in to Rockstar Games Social Club (varies 13+); internet required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Launcher, DirectX, Microsoft Visual C++ 2015-2019 Redistributables (x64), Chromium Embedded Framework, Rockstar Games Social Club Framework and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, license enforcement, support, system, and other purposes. Over time downloadable content and programming changes will change the system requirements for this game. Please refer to your hardware manufacturer and <a href='https://www.rockstargames.com/support'>https://www.rockstargames.com/support</a> for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.</p><br />
                <p>For serial code versions, single use serial code registration via internet required. For all versions, internet, Rockstar Games Launcher, and Social Club account (varies 13+) required. Serial code/purchases are non-transferrable and limited to one Social Club account; Rockstar Games Social Club accounts are non-transferrable. Only one PC log-in allowed per Social Club account at any time.</p><br />
                <p>Software license terms in game and at <a href='https://www.rockstargames.com/eula'>https://www.rockstargames.com/eula</a>; online account terms at <a href='https://www.rockstargames.com/socialclub'>https://www.rockstargames.com/socialclub</a>. Non-transferable access to special features, such as exclusive/unlockable/downloadable/multiplayer/online & bonus content/services/functions, may require single-use serial code, additional fee, and/or non-transferrable online account registration (varies 13+). Special features access may require internet connection, may not be available to all users or at all times, and may be terminated/modified/offered under different terms without notice. Violation of EULA, Code of Conduct, or other policies may result in restriction or termination of access to game or online account. For info, customer & tech support visit <a href='https://www.rockstargames.com/support'>https://www.rockstargames.com/support</a></p><br />
            </div>
            <div>
                <h2>FAQ</h2>
                <SimpleAccordion />
            </div>
            <div>
                <p>Trademarks & Copyrights</p>
                <p>Rockstar Games, Inc. ©2005-19. Rockstar Games, Red Dead Redemption, R*, Redemption, Red Dead, Dead Eye are marks/logos/copyrights of Take-Two Interactive. Dolby and the double-D symbols are trademarks of Dolby Laboratories. The ratings icon is a trademark of the Entertainment Software Association. All other marks and trademarks are properties of their respective owners. All rights reserved</p>
                <p>Legal Disclosure</p>
                <p>Software license terms in game and at https://www.rockstargames.com/eula; online account terms at https://socialclub.rockstargames.com/. Non-transferable access to special features, such as exclusive/unlockable/downloadable/multiplayer/online & bonus content/services/functions, may require single-use serial code, additional fee, and/or non-transferrable online account registration (varies 13+). Special features access may require internet connection, may not be available to all users or at all times, and may be terminated/modified/offered under different terms without notice. Violation of EULA, Code of Conduct, or other policies may result in restriction or termination of access to game or online account. For info, customer & tech support visit https://www.rockstargames.com/support. This game is fictional. It may depict people, places, companies, groups, events, buildings, and other things that are similar to those in the real world; they are not affiliated or associated in any way with this game, and such depictions are not factual. The makers/publishers/licensors of this video game do not endorse/condone/encourage any content. Unauthorized copying, alteration, reverse engineering, decompiling, transmission, public performance, rental, pay for play, or copy protection circumvention is prohibited & violates EULA. Certain limits apply to purchase, use, and redemption. See EULA https://www.rockstargames.com/eula and Terms of Service https://www.rockstargames.com/legal for details.</p>
                <p>Use of this product requires agreement to the following third party end user license agreement: http://www.take2games.com/eula/</p>
            </div>

        </>
    )

}



export default RedDead

