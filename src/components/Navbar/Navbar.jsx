import { useState, useEffect } from "react";
//import Navbar from './components/Navbar'
import GameMenu from "./GameMenu";
import CollectionMenu from "./CollectionMenu";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const [GameMenuToggle, setGameToggle] = useState("hidden");
  const [CollectionMenuToggle, setCollectionToggle] = useState("hidden");
  const loginuser = props.user;
  const [AccountDropDown, setAccountDropDown] = useState("hidden");

  useEffect(() => {
    if (loginuser !== "none") {
      console.log("User Login Successfully");
      setAccountDropDown("block");
    } else {
      console.log("User Not Login");
    }
  }, []);

  console.log(loginuser, "Loginuser is this");

  const onClickGameMenu = () => {
    console.log("object");
    if (GameMenuToggle === "hidden") {
      setGameToggle("block");
      setCollectionToggle("hidden")
    } else setGameToggle("hidden");
  };
  const onClickCollectionMenu = () => {
    console.log("object Collection", CollectionMenuToggle);
    if (CollectionMenuToggle === "hidden") {
      setCollectionToggle("block");
      setGameToggle("hidden")
    } else setCollectionToggle("hidden");
  };

  return (
    <>
      <div className="flex sticky top-0 right-0 left-0 z-40 justify-between items-center my-0 w-full text-white bg-black">
        <div className="hidden justify-between items-center p-4 mx-24 md:flex">
          <img
            className="w-12 h-12"
            src="https://images.ctfassets.net/wn7ipiv9ue5v/4ajpWv2L0zlK6pObfLPOcL/d6d3875cb5a5bfc074c6a92cf6dce0c2/rockstar_logo.png?w=104&h=&fm=webp&q="
            alt=""
          />

          <div className="flex items-center mx-6">
            <button
              className="flex items-center font-bold cursor-pointer"
              onClick={() => onClickGameMenu()}
            >
              Game
            {/* <button className="font-bold cursor-pointer" onClick={()=>(onClickGameMenu)}>Game</button> */}
            <img
              className="ml-1 w-3 h-3"
              src="https://i.ibb.co/ZzXv85c/pngwing-com.png"
              alt="pngwing-com"
            />
            </button>
          </div>

          <div className="flex items-center mx-6">
            <button  className="flex items-center font-bold cursor-pointer"
              onClick={() => onClickCollectionMenu()}>
            <p className="font-bold cursor-pointer">Collection</p>
            <img
              className="ml-1 w-3 h-3"
              src="https://i.ibb.co/ZzXv85c/pngwing-com.png"
              alt="pngwing-com"
            />
            </button>
          </div>
          <Link to="/gear" className="mx-6 font-bold cursor-pointer">Gear</Link>
        </div>

        <div className="hidden justify-between items-center mr-20 md:flex">
          <div className="flex justify-center items-center pl-2 bg-[#161616] rounded-full border border-gray-600">
            <img
              className=" ml-2 w-6 h-6 bg-[#161616]"
              src="https://svg-clipart.com/svg/white/ktmN7fh-search-icon-white-one-vector.svg"
              alt=""
            />
            <input
              type="text"
              className="rounded-r-full px-3 py-1 bg-[#161616] hidden lg:block outline-none"
              placeholder="Search"
            />
          </div>

          <p className="mx-6 font-bold cursor-pointer">Sign in</p>

        </div>
      </div>
      <div class={`relative ${GameMenuToggle}`}>
        <GameMenu></GameMenu>
      </div>
      <div class={`relative ${CollectionMenuToggle}`}>
        <CollectionMenu></CollectionMenu>
        </div>
    </>
  );
};

export default Navbar;
