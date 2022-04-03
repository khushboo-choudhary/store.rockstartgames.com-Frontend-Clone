import React,{useState,useEffect} from 'react'
import './Cart.css';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const navigate = useNavigate();
    let storeCart=JSON.parse(localStorage.getItem("store_cart"))||[];
    let totalPrice=JSON.parse(localStorage.getItem("total_cart_price"))||0;
    // let newstoreCart=[...new Map(storeCart.map((item) => [item["_id"], item])).values()];
    const [totalPrd,setTotalprd] = useState([]);
    const [render, setRender] = useState(true)
    const itemCount = () =>{
        let cart=JSON.parse(localStorage.getItem("store_cart"))||[];
        let sum = 0;
        cart.map((el)=>{
            sum += el.price*el.qty;
        })
       setTotalprd((sum).toFixed(2));
    }

    const { nickName, profileImage } =
      JSON.parse(localStorage.getItem("userData")) ||
      localStorage.setItem(
        "userData",
        JSON.stringify({
          profileImage: "https://a.rsg.sc/n/shreyas1000",
          nickName: "none",
        })
      );

    if (nickName == "none") {
      navigate("/signin");
    }


    const removeItem = (ind) => {
        console.log(storeCart)
        storeCart.splice(ind,1)
        localStorage.setItem("store_cart",JSON.stringify(storeCart));
        setRender(!render)
        itemCount()
    }
    useEffect(() => {
        itemCount()
    },[])
  return (
    <>
      <div className="bg-[#161616] w-full text-white md:flex md:justify-space">
        <div className="py-[60px] md:mx-24 md:w-[60%] w-[90%] ml-6">
          <h1 className="mb-3 text-3xl font-semibold">My Cart</h1>

          <div id="line"></div>

          {storeCart.map((el, ind) => (
            <div key={el._id}>
              <div id="prd" className="flex gap-4" key={el._id}>
                <div>
                  <img className="w-[150px]" src={el.image} alt="img" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold my-1">{el.name}</h2>
                  <p className="text-gray-400 my-1">Men's,XL</p>
                  <select
                    name=""
                    id="select"
                    value={el.qty}
                    onChange={(e) => {
                      storeCart[ind].qty = e.target.value;
                      localStorage.setItem(
                        "store_cart",
                        JSON.stringify(storeCart)
                      );
                      itemCount();
                    }}
                    className="text-gray-400 my-1 p-3 rounded pr-8  bg-black focus:bg-black hover:bg-gray-500 outline-none"
                  >
                    <option value="1">Qty:1</option>
                    <option value="2">Qty:2</option>
                    <option value="3">Qty:3</option>
                    <option value="4">Qty:4</option>
                  </select>
                  <br></br>
                  <button
                    className="underline text-gray-400 my-1"
                    onClick={() => {
                      removeItem(ind);
                    }}
                  >
                    Remove
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold my-1">€{el.price}</h2>
                </div>
              </div>
              <div key={el._id} id="line"></div>
            </div>
          ))}

          <p id="total_price" className="text-gray-300">
            Subtotal({storeCart.length} items):{" "}
            <span className="text-xl font-bold">€ {totalPrd}</span>
          </p>
        </div>

        <div className="bg-black text-gray-300 md:mt-10 md:mb-10 md:mr-10 p-4  md:w-[30%] m-6">
          <p className="my-1">ORDER SUMMARY</p>
          <div id="line"></div>
          <div className="flex justify-between my-1">
            <div>Total for Items</div>
            <div>€ {totalPrd}</div>
          </div>
          <div id="line"></div>
          <div className="flex justify-between my-1">
            <div className="font-bold text-2xl">
              Subtotal
              <span className=" font-normal text-lg">
                ({storeCart.length} items)
              </span>
            </div>
            <div className="font-bold text-2xl">€ {totalPrd}</div>
          </div>
          <div id="line"></div>
          <div className="flex gap-2 my-1">
            <LocalShippingRoundedIcon />
            <p>
              Add €5.01 to this order to qualify for FREE standard shipping.
            </p>
          </div>
          <Link to="/address"><button className=" my-1 bg-yellow-500 text-black font-semibold px-4 py-3 hover:bg-yellow-400 rounded mt-2" onClick={() => {
            totalPrice=totalPrd
            localStorage.setItem("total_cart_price",JSON.stringify(totalPrice));
          }}>
            PROCEED TO CHECKOUT
          </button></Link>
          <p className="text-sm mt-2 my-1">
            Taxes and shipping will be calculated in the checkout window.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cart