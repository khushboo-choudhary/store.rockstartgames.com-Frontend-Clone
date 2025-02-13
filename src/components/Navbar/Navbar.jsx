import { useState, useEffect } from "react";
//import Navbar from './components/Navbar'
import GameMenu from "./GameMenu";
import GameMobileMenu from "./GameMobileMenu";
import MenuListComposition from "./UserMenuMui";
import UserMenu from "./UserMenu";
import SearchIcon from "@mui/icons-material/Search";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import CollectionMenu from "./CollectionMenu";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = (props) => {
  const [GameMenuToggle, setGameToggle] = useState("hidden");
  const [InputMobileToggle, setInputToggle] = useState({
    input: "hidden",
    allother: "",
  });
  const [loginOrNot, setLoginOrNot] = useState({
    signIn: "hidden",
    signOut: "block",
  });
  const [GameMobileMenuToggle, setGameMobileToggle] = useState("hidden");
  const [UserMenuToggle, setUserToggle] = useState("hidden");
  const [CollectionMenuToggle, setCollectionToggle] = useState("hidden");
  const [loginData, setLoginData] = useState({});
  const [AccountDropDown, setAccountDropDown] = useState("hidden");

  const donedonadone =
    JSON.parse(localStorage.getItem("userData")) ||
    localStorage.setItem(
      "userData",
      JSON.stringify({
        profileImage: "https://a.rsg.sc/n/shreyas1000",
        nickName: "none",
      })
    );

  useEffect(() => {
    setAccountDropDown("block");

    const { nickName, profileImage } =
      JSON.parse(localStorage.getItem("userData")) ||
      localStorage.setItem(
        "userData",
        JSON.stringify({
          profileImage: "https://a.rsg.sc/n/shreyas1000",
          nickName: "none",
        })
      );
    // const nickName = "fsdfsd"
    // profileImage = ""
    // }catch{
    // const nickName="";
    // const profileImage = "https://images.ctfassets.net/wn7ipiv9ue5v/4ajpWv2L0zlK6pObfLPOcL/d6d3875cb5a5bfc074c6a92cf6dce0c2/rockstar_logo.png?w=104&h=&fm=webp&q=";
    // }

    //  const {nickName,profileImage}=JSON.parse(localStorage.getItem("userData"))
    //  console.log(nickName,"NickName is there")
    if (nickName !== "none") {
      setLoginOrNot({ signIn: "block", signOut: "hidden" });
    }
    //  console.log(loginOrNot.)
    setLoginData({ nickName, profileImage });
  }, []);

  // setCollectionToggle("hidden");

  const onClickGameMenu = () => {
    if (GameMenuToggle === "hidden") {
      setGameToggle("block");
      setGameMobileToggle("hidden");

      setCollectionToggle("hidden");
    } else {
      setGameToggle("hidden");
      setGameMobileToggle("hidden");
    }
  };
  const hideall = () => {
    setCollectionToggle("hidden");
    setGameToggle("hidden");
    setGameMobileToggle("hidden");
  };
  const onClickGameMobileMenu = () => {
    if (GameMobileMenuToggle === "hidden") {
      setGameMobileToggle("block");
      setCollectionToggle("hidden");
      setGameToggle("hidden");
    } else {
      setGameMobileToggle("hidden");
      setCollectionToggle("hidden");
      setGameToggle("hidden");
    }
  };
  const onClickCollectionMenu = () => {
    // console.log("object Collection", CollectionMenuToggle);
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

  const onClickSearchBar = () => {
    setInputToggle({ input: "block", allother: "hidden" });
  };
  const hideInputMobileView = () => {
    setInputToggle({ input: "hidden", allother: "block" });
    setGameMobileToggle("hidden");
  };

  return (
    <>
      <div
        className={`${InputMobileToggle.input} pt-2 flex h-[48px] items-center bg-black pl-2`}
      >
        <div onClick={hideInputMobileView}>
          <ArrowBackIcon />
        </div>
        <div className="flex items-center ml-2 rounded-full bg-[#161616]">
          <div className="pl-2">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search"
            className={`${InputMobileToggle.input} w-full bg-[#161616] rounded-r-full pl-2 py-1 outline-none`}
          />
        </div>
      </div>
      <div
        className="flex sticky top-0 right-0 left-0 z-40 items-center my-0 w-full text-white bg-black md:justify-between"
        id="navBar"
      >
        <div className="flex justify-between items-center w-full md:hidden">
          <div
            className={`flex justify-between items-center p-2 ${InputMobileToggle.allother}`}
          >
            <div className="block mr-2 ml-2 md:hidden">
              <button
                className="flex items-center font-bold cursor-pointer"
                onClick={() => onClickGameMobileMenu()}
              >
                <MenuIcon />
              </button>
            </div>
            <Link to="/">
              <img
                className="w-12 h-12"
                src="https://images.ctfassets.net/wn7ipiv9ue5v/4ajpWv2L0zlK6pObfLPOcL/d6d3875cb5a5bfc074c6a92cf6dce0c2/rockstar_logo.png?w=104&h=&fm=webp&q="
                alt=""
              />
            </Link>
          </div>
          <div
            className={`flex justify-between item-centerw-8 md:hidden ${InputMobileToggle.allother}`}
          >
            <button onClick={() => onClickSearchBar()}>
              <SearchIcon />
            </button>
            <Link to="/cart" className="pl-2">
              <ShoppingCartIcon className="w-8" />
            </Link>
            <Link to="/signin" className="pl-2">
              <PersonRoundedIcon className="w-8" />
            </Link>
          </div>
        </div>

        <div className="justify-between items-center p-2 md:mx-24 md:p-4 md:flex">
          <Link to="/">
            <img
              className="hidden w-12 h-12 md:block"
              src="https://images.ctfassets.net/wn7ipiv9ue5v/4ajpWv2L0zlK6pObfLPOcL/d6d3875cb5a5bfc074c6a92cf6dce0c2/rockstar_logo.png?w=104&h=&fm=webp&q="
              alt=""
            />
          </Link>
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
          <Link
            onClick={hideall}
            to="/gear"
            className="hidden mx-6 font-bold cursor-pointer md:block"
          >
            Gear
          </Link>
        </div>

        <div className="hidden justify-between items-center mr-20 md:flex">
          <div className="flex justify-center items-center pl-2 bg-[#161616] rounded-full border border-gray-600">
            <img
              className=" ml-2 w-6 h-6 bg-[#161616]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NbFYtGT0Zz1HKkprpMM7m9AgE-pVN9_q7-PldN4&s"
              alt=""
            />
            <input
              type="text"
              className="rounded-r-full px-3 py-1 bg-[#161616] hidden lg:block outline-none"
              placeholder="Search"
            />
          </div>
          <Link to="/cart">
            <ShoppingCartIcon className="w-8 ml-[20px]" />
          </Link>
          <div className={`${loginOrNot.signOut}`}>
            <Link to="signin" className="mx-6 font-bold cursor-pointer">
              Sign in
            </Link>
          </div>
          <div className={`${loginOrNot.signIn}`}>
            <MenuListComposition
              nickName={loginData.nickName}
              img={loginData.profileImage}
            />
          </div>
          {/* User Detail Start After Login  */}
        </div>
      </div>
      <div className={`relative ${GameMenuToggle}`}>
        <GameMenu hideclass={hideall}></GameMenu>
      </div>
      <div className={`relative ${GameMobileMenuToggle}`}>
        <GameMobileMenu hideclass={hideall}></GameMobileMenu>
      </div>
      <div className={`relative ${CollectionMenuToggle}`}>
        <CollectionMenu hideclass={hideall}></CollectionMenu>
      </div>
    </>
  );
};

export default Navbar;
