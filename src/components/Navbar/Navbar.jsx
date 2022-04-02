import { useState, useEffect } from "react";
//import Navbar from './components/Navbar'
import GameMenu from "./GameMenu";
import GameMobileMenu from "./GameMobileMenu";
import MenuListComposition from './UserMenuMui'
import UserMenu from "./UserMenu";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CollectionMenu from "./CollectionMenu";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = (props) => {
  const [GameMenuToggle, setGameToggle] = useState("hidden");
  const [InputMobileToggle, setInputToggle] = useState({input:"hidden",allother:""});
  const [GameMobileMenuToggle, setGameMobileToggle] = useState("hidden");
  const [UserMenuToggle, setUserToggle] = useState("hidden");
  const [CollectionMenuToggle, setCollectionToggle] = useState("hidden");
  const loginuser = props.user;
  const [AccountDropDown, setAccountDropDown] = useState("hidden");

  useEffect(() => {
    if (loginuser !== "none") {
      // console.log("User Login Successfully");
      setAccountDropDown("block");
    } 
    // else {
    //   // console.log("User Not Login");
    // }
  }, []);

  console.log(loginuser, "Loginuser is this");

  const onClickGameMenu = () => {
    console.log("object");
    if (GameMenuToggle === "hidden") {
      setGameToggle("block");
      setCollectionToggle("hidden");
    } else setGameToggle("hidden");
  };
  const onClickGameMobileMenu = () => {
    console.log("object");
    if (GameMobileMenuToggle === "hidden") {
      setGameMobileToggle("block");
    } else setGameMobileToggle("hidden");
  };
  const onClickCollectionMenu = () => {
    console.log("object Collection", CollectionMenuToggle);
    if (CollectionMenuToggle === "hidden") {
      setCollectionToggle("block");
      setGameToggle("hidden");
    } else setCollectionToggle("hidden");
  };
  const onClickUserMenu = () => {
    console.log("object User", UserMenuToggle);
    if (UserMenuToggle === "hidden") {
      setUserToggle("block");
      setGameToggle("hidden");
      setCollectionToggle("hidden");
    } else setUserToggle("hidden");
  };

  const onClickSearchBar = ()=>{
    setInputToggle({input:"block",allother:"hidden"})
  }

  return (
    <>
    {/* <input type="text" placeholder="Search"/> */}
      <div className="flex sticky top-0 right-0 left-0 z-40 items-center my-0 w-full text-white bg-black md:justify-between" id="navBar">
      <div className="flex justify-between items-center w-full md:hidden">
            <div className={`flex justify-between items-center p-2 ${InputMobileToggle.allother}`}>
                  <div className="block mr-2 ml-2 md:hidden">
                      <button
                          className="flex items-center font-bold cursor-pointer"
                          onClick={() => onClickGameMobileMenu()}
                        ><MenuIcon/>
                        </button>
                  </div>
                            <img
                        className="w-12 h-12"
                        src="https://images.ctfassets.net/wn7ipiv9ue5v/4ajpWv2L0zlK6pObfLPOcL/d6d3875cb5a5bfc074c6a92cf6dce0c2/rockstar_logo.png?w=104&h=&fm=webp&q="
                        alt=""
                      />
            </div>
            <div className={`flex justify-between item-centerw-8 md:hidden ${InputMobileToggle.allother}`}>
                  
                  <button onClick={() => onClickSearchBar()}>
                  <SearchIcon/>
                  </button>
                  <ShoppingCartIcon className="w-8"/>
            </div>
      </div>

        <div className="justify-between items-center p-2 md:mx-24 md:p-4 md:flex">
          <img
            className="hidden w-12 h-12 md:block"
            src="https://images.ctfassets.net/wn7ipiv9ue5v/4ajpWv2L0zlK6pObfLPOcL/d6d3875cb5a5bfc074c6a92cf6dce0c2/rockstar_logo.png?w=104&h=&fm=webp&q="
            alt=""
          />
          <div className="hidden items-center mx-6 md:flex">
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

          <div className="hidden items-center mx-6 md:flex">
            <button
              className="flex items-center font-bold cursor-pointer"
              onClick={() => onClickCollectionMenu()}
            >
              <p className="font-bold cursor-pointer">Collection</p>
              <img
                className="ml-1 w-3 h-3"
                src="https://i.ibb.co/ZzXv85c/pngwing-com.png"
                alt="pngwing-com"
              />
            </button>
          </div>
          <Link to="/gear" className="hidden mx-6 font-bold cursor-pointer md:block">
            Gear
          </Link>
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

          <Link to="signin" className="mx-6 font-bold cursor-pointer">Sign in</Link>
          <MenuListComposition/>
          {/* User Detail Start After Login  */}
        </div>
      </div>
      <div class={`relative ${GameMenuToggle}`}>
        <GameMenu></GameMenu>
      </div>
      <div class={`relative ${GameMobileMenuToggle}`}>
        <GameMobileMenu></GameMobileMenu>
      </div>
      <div class={`relative ${CollectionMenuToggle}`}>
        <CollectionMenu></CollectionMenu>
      </div>
    </>
  );
};

export default Navbar;
