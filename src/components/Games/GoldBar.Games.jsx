import "../../styles/GoldBar.Games.css";

const GoldBar = () => {
    return (
        <>
            <div id="mainGold">
                <div
                    style={{
                        backgroundImage:
                            "url(https://images.ctfassets.net/wn7ipiv9ue5v/5a5HhOXOSEIVV0uaIpvPiU/ec89fc996c28a02aef0228680858197d/R_Store_GoldBars_1344x500.jpg?w=2048&h=&fm=webp&q=)",
                    }}
                  
                >
                    <div
                        style={{
                            marginLeft: "70px",
                            display: "block",
                            inset: "0px",
                            background:
                                "linear-gradient(to right,rgb(0, 0, 0),rgba(0, 0, 0, 0.7) 10%,rgba(0, 0, 0, 0) 100%)",
                        }}
                    >
                      
                        <h1 className="m-3 font-bold text-3xl">Gold Bars</h1>
                        <p style={{ maxWidth: "200px" }} className="m-3">
                            The frontier is a lawless place where nothing can be taken for
                            granted... except for the trading power of cold hard bullion. With
                            Gold Bars you can quickly unlock all manner of goods in Red Dead
                            Online; from custom modifications to your weapons to horse kits to
                            unique items for your camp. While life on the range is full of
                            doubts and uncertainties, Gold Bars can be relied upon to set you
                            apart from the pack.
                        </p>
                    </div>
                </div>
                <div style={{ margin: "70px" }}>
                    <h1 className="m-3 font-bold text-3xl">Buy Gold Bars for PC</h1>
                    <p className="m-3">
                        With Gold Bars you can quickly unlock all manner of goods in Red
                        Dead Online; from custom modifications to your weapons to horse kits
                        to unique items for your camp.
                    </p>
                    <div
                        className="flex rounded-xl mx-2 flex-col md:flex-row"
                        style={{
                            height: "auto",
                            display: "flex",
                           
                        }}
                    >
                        <div className="rounded-xl pb-8 mx-2 bg-black backgroundBlock">
                            <img
                                src="https://images.ctfassets.net/wn7ipiv9ue5v/1WHByNDahkDtZiL76oGCHu/9a11218bebd14cf8a3709fe16a015177/goldBar_350.jpg?w=1920&h=&fm=webp&q="
                                alt=""
                                srcSet
                                style={{ width: "100%" }}
                            />
                            <p className="text-gray-400 ml-2 py-2">350 Gold Bars</p>
                            <p className="font-bold ml-2 py-1">₹8,329.00</p>
                        </div>
                        <div className="rounded-xl pb-8 mx-2 bg-black backgroundBlock">
                            <img
                                src="https://images.ctfassets.net/wn7ipiv9ue5v/1ffEmuQJwP07SLS0iKjjK5/948ebb40612b5bd82ae0b95b0bda5283/goldBar_245.jpg?w=2048&h=&fm=webp&q="
                                alt=""
                                srcSet
                                style={{ width: "100%" }}
                            />
                            <p className="text-gray-400 ml-2 py-2">245 Gold Bars</p>
                            <p className="font-bold ml-2 py-1">₹6,239.00</p>
                        </div>
                        <div className="rounded-xl pb-8 mx-2 bg-black backgroundBlock">
                            <img
                                src="https://images.ctfassets.net/wn7ipiv9ue5v/t0PNr23DOepDPnIaGtDaY/fb3027e7fcf29fe0b2244d04c8498aae/goldBar_150.jpg?w=2048&h=&fm=webp&q="
                                alt=""
                                srcSet
                                style={{ width: "100%" }}
                            />
                            <p className="text-gray-400 ml-2 py-2">150 Gold Bars</p>
                            <p className="font-bold ml-2 py-1">₹4,159.00</p>
                        </div>
                        <div className="rounded-xl pb-8 mx-2 bg-black backgroundBlock">
                            <img
                                src="https://images.ctfassets.net/wn7ipiv9ue5v/XiDpY63IbrcI7X0plcRhj/e52a10d0d8a65df198a9448abe76741c/goldBar_55.jpg?w=2048&h=&fm=webp&q="
                                alt=""
                                srcSet
                                style={{ width: "100%" }}
                            />
                            <p className="text-gray-400 ml-2 py-2">55 Gold Bars</p>
                            <p className="font-bold ml-2 py-1">₹1,659.00</p>
                        </div>
                        <div className="rounded-xl pb-8 mx-2 bg-black backgroundBlock">
                            <img
                                src="https://images.ctfassets.net/wn7ipiv9ue5v/7HrlsIX3CwfdvUPjUlR6yE/26cb1a74357764ff548e21debf4924e5/goldBar_25.jpg?w=2048&h=&fm=webp&q="
                                alt=""
                                srcSet
                                style={{ width: "100%" }}
                            />
                            <p className="text-gray-400 ml-2 py-2">25 Gold Bars</p>
                            <p className="font-bold ml-2 py-1">₹669.00</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default GoldBar;
