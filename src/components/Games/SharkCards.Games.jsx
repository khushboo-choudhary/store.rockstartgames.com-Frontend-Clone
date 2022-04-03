import "../../styles/SharkCards.Games.css";

const SharkCards = () => {
    return (
        <>
            <div id="mainGold">
                   
                <div className="cards md:flex-row flex-col items-center" style={{ display: "flex", margin: "auto" }}>
            
                    <div
                        style={{

                            display: "block",
                            inset: "0px",
                            background:
                                "linear-gradient(to right,rgb(0, 0, 0),rgba(0, 0, 0, 0.7) 33%,rgba(0, 0, 0, 0) 100%)",
                        }}
                    >

                        <h1 className="m-3 font-bold text-3xl">Shark Cards</h1>
                        <p style={{ maxWidth: "200px" }} className="m-3">
                            Cash is king in this town. Solve your money problem and help get
                            what you want across Los Santos and Blaine County with the
                            occasional purchase of cash packs for Grand Theft Auto Online. All
                            purchased cash is automatically deposited into your character's
                            bank account. Spend wisely, cash therapy is fleeting.
                        </p>

                    </div>
                    <div>
                        <img width="400px "
                            src="https://images.ctfassets.net/wn7ipiv9ue5v/7aCrEY5Etpgk5a9V6JQaYm/088f756121545886ab0bb3f54339c3ea/GTAV_SharkCard_Group_01.jpg?w=1920&h=&fm=webp&q=" alt="" className="src" />
                    </div>
                </div>
                <div style={{ margin: "70px" }}>
                    <h1 className="m-3 font-bold text-3xl">Buy Shark Cash Cards for PC</h1>
                    <p className="m-3">
                        Cash is king in this town. Solve your money problem and help get
                        what you want across Los Santos and Blaine County with the
                        occasional purchase of cash packs for Grand Theft Auto Online.
                    </p>
                    <div
                        className="flex rounded-xl mx-2 flex-col md:flex-row"
                        style={{
                            height: "auto",
                            display: "flex",

                        }}
                    >
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
            </div>
        </>
    );
};

export default SharkCards;
