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
          className="p-3"
        >
          <div
            style={{
              display: "block",
              inset: "0px",
              background:
                "linear-gradient(to right,rgb(0, 0, 0),rgba(0, 0, 0, 0.7) 33%,rgba(0, 0, 0, 0) 66%)",
            }}
          >
            {/* <div>
            <img
              src="https://images.ctfassets.net/wn7ipiv9ue5v/5a5HhOXOSEIVV0uaIpvPiU/ec89fc996c28a02aef0228680858197d/R_Store_GoldBars_1344x500.jpg?w=2048&amp;h=&amp;fm=webp&amp;q="
              alt=""
              class="src"
            />
          </div> */}
            <h1 className="m-3">Gold Bars</h1>
            <p style={{ maxWidth: "340px" }} className="m-3">
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
        <div>
          <h1 className="m-3">Buy Gold Bars for PC</h1>
          <p className="m-3">
            With Gold Bars you can quickly unlock all manner of goods in Red
            Dead Online; from custom modifications to your weapons to horse kits
            to unique items for your camp.
          </p>
          <div
            className="flex rounded-xl mx-2"
            style={{
              height: "324px",
              display: "flex",
              flexWrap: "wrap",
              overflow: "hidden",
            }}
          >
            <div className="rounded-xl pb-8 mx-2 bg-black backgroundBlock">
              <img
                src="https://images.ctfassets.net/wn7ipiv9ue5v/XiDpY63IbrcI7X0plcRhj/e52a10d0d8a65df198a9448abe76741c/goldBar_55.jpg?w=2048&h=&fm=jpg&q="
                alt=""
                srcSet
                style={{ width: "100%" }}
              />
              <p className="text-gray-400 ml-2 py-2">350 Gold Bars</p>
              <p className="font-bold ml-2 py-1">₹8,329.00</p>
            </div>
            <div className="rounded-xl pb-8 mx-2 bg-black backgroundBlock">
              <img
                src="https://images.ctfassets.net/wn7ipiv9ue5v/XiDpY63IbrcI7X0plcRhj/e52a10d0d8a65df198a9448abe76741c/goldBar_55.jpg?w=2048&h=&fm=jpg&q="
                alt=""
                srcSet
                style={{ width: "100%" }}
              />
              <p className="text-gray-400 ml-2 py-2">350 Gold Bars</p>
              <p className="font-bold ml-2 py-1">₹8,329.00</p>
            </div>
            <div className="rounded-xl pb-8 mx-2 bg-black backgroundBlock">
              <img
                src="https://images.ctfassets.net/wn7ipiv9ue5v/XiDpY63IbrcI7X0plcRhj/e52a10d0d8a65df198a9448abe76741c/goldBar_55.jpg?w=2048&h=&fm=jpg&q="
                alt=""
                srcSet
                style={{ width: "100%" }}
              />
              <p className="text-gray-400 ml-2 py-2">350 Gold Bars</p>
              <p className="font-bold ml-2 py-1">₹8,329.00</p>
            </div>
            <div className="rounded-xl pb-8 mx-2 bg-black backgroundBlock">
              <img
                src="https://images.ctfassets.net/wn7ipiv9ue5v/XiDpY63IbrcI7X0plcRhj/e52a10d0d8a65df198a9448abe76741c/goldBar_55.jpg?w=2048&h=&fm=jpg&q="
                alt=""
                srcSet
                style={{ width: "100%" }}
              />
              <p className="text-gray-400 ml-2 py-2">350 Gold Bars</p>
              <p className="font-bold ml-2 py-1">₹8,329.00</p>
            </div>
            <div className="rounded-xl pb-8 mx-2 bg-black backgroundBlock">
              <img
                src="https://images.ctfassets.net/wn7ipiv9ue5v/XiDpY63IbrcI7X0plcRhj/e52a10d0d8a65df198a9448abe76741c/goldBar_55.jpg?w=2048&h=&fm=jpg&q="
                alt=""
                srcSet
                style={{ width: "100%" }}
              />
              <p className="text-gray-400 ml-2 py-2">350 Gold Bars</p>
              <p className="font-bold ml-2 py-1">₹8,329.00</p>
            </div>
            <div className="rounded-xl pb-8 mx-2 bg-black backgroundBlock">
              <img
                src="https://images.ctfassets.net/wn7ipiv9ue5v/XiDpY63IbrcI7X0plcRhj/e52a10d0d8a65df198a9448abe76741c/goldBar_55.jpg?w=2048&h=&fm=jpg&q="
                alt=""
                srcSet
                style={{ width: "100%" }}
              />
              <p className="text-gray-400 ml-2 py-2">350 Gold Bars</p>
              <p className="font-bold ml-2 py-1">₹8,329.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoldBar;
