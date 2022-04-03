import React from 'react'
import './Address.css';
import background from '../../img/backgorundcart.png';
import { Link } from 'react-router-dom';
import doPayment from "../../utilities/payment";
import { useNavigate } from "react-router-dom";

const Address = () => {

    const navigate = useNavigate();
    
  const buyNow = (e) => {
    const { nickName, profileImage } =
      JSON.parse(localStorage.getItem("userData")) ||
      localStorage.setItem(
        "userData",
        JSON.stringify({
          profileImage: "https://a.rsg.sc/n/shreyas1000",
          nickName: "none",
        })
      );

      localStorage.setItem("store_cart", JSON.stringify([]));
    if (nickName == "none") {
      navigate("/signin");
    } else {
        let total_cart_price = JSON.parse(localStorage.getItem("total_cart_price"));
      let disc = "payment for order of" + " " + nickName;
      let amount = total_cart_price * 84;
      amount = amount.toFixed(2);
      console.log(amount);
      doPayment(amount, disc);
    }
  };

  return (
    <div>
      <div id="main_div" style={{ backgroundImage: `url(${background})` }}>
        <div className="bg-[#2d2d2d] md:w-[50%] w-[80%] m-auto py-6">
          <form
            action=""
            className="p-6"
            onSubmit={(e) => {
              e.preventDefault();
              buyNow();
            }}
          >
            <div className="flex justify-between my-2">
              <p className="text-bold text-2xl">Shipping Address</p>
              <Link to="/cart">
                <p className="text-semibold">X</p>
              </Link>
            </div>
            <div className="p-3 bg-[#074175] text-sm my-2">
              You cannot change your shipping address once you submit your
              order.
            </div>
            <p className="my-2">Country</p>
            <div className="p-2 bg-[#808080] text-[12px] my-2">India</div>

            <div className="flex my-2">
              <p className="mr-[38%] md:mr-[40.5%]">First Name</p>
              <p>Last Name</p>
            </div>

            <div className="flex my-2">
              <input
                className="mr-[20px] bg-[#1a1a1a] w-[50%] py-1 outline-amber-500"
                type="text"
              />
              <input
                className="bg-[#1a1a1a] w-[50%] py-1 outline-amber-500"
                type="text"
              />
            </div>

            <div className="flex my-2">
              <p className="mr-[36%] md:mr-[37%]">City</p>
              <p className="mr-[24%] md:mr-[27.5%]">Region/State</p>
              <p>Postal Code</p>
            </div>

            <div className="flex my-2">
              <input
                className="mr-[20px] bg-[#1a1a1a] w-[40%] py-1 outline-amber-500"
                type="text"
              />
              <input
                className="bg-[#1a1a1a] mr-[20px] w-[40%] py-1 outline-amber-500"
                type="text"
              />
              <input
                className="bg-[#1a1a1a] w-[20%] py-1 outline-amber-500"
                type="text"
                maxlength="6"
              />
            </div>

            <div className="flex my-2">
              <p className="mr-[52%] md:mr-[56.5%]">Street Address</p>
              <p>Apartment</p>
            </div>

            <div className="flex my-2">
              <input
                className="mr-[20px] bg-[#1a1a1a] w-[70%] py-1 outline-amber-500"
                type="text"
              />
              <input
                className="bg-[#1a1a1a] w-[30%] py-1 outline-amber-500"
                type="text"
              />
            </div>

            <div className="flex my-2">
              <p className="mr-[43.5%] md:mr-[45%] ">Phone</p>
              <p>Email</p>
            </div>

            <div className="flex my-2">
              <input
                className="mr-[20px] bg-[#1a1a1a] w-[50%] py-1 outline-amber-500"
                type="text"
              />
              <input
                className="bg-[#1a1a1a] w-[50%] py-1 outline-amber-500"
                type="text"
              />
            </div>
            <div className="flex justify-end my-2">
              <input
                type="submit"
                className=" bg-yellow-500 text-black font-semibold px-10 py-2 hover:bg-yellow-400 rounded mt-2"
                value="CONTINUE"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Address