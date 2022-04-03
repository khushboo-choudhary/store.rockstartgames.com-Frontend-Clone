import { Link } from "react-router-dom";
import "./GameMenu.css";
import {useState} from 'react';

const GameMobileMenu = ({hideclass}) => {

  const [hideList,sethideList ] = useState("block")

  return (
    <>
      {/* <p className='bg-indigo-700 animate-bounce mt-68'>Checking GameMenu Component Working </p> */}
      <ul
        className="top-0 right-0 left-0 z-40 content-end w-1/2 bg-[#161616] opacity-90 overflow-scroll"
        id="menumob"
      >
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="">Games</Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/games/62432887fa3b17edc75a9fdb">
              Red Dead Redemption 2
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/buy-red-dead-online-gold-bars">
              Red Dead Online: Gold Bars
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/games/62432bccfa3b17edc75a9fdd">Grand Theft Auto V</Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/buy-gta-v-shark-cash-cards">
              Grand Theft Auto Online: Shark Cash Cards
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/games/62432d8bfa3b17edc75a9fdf">
              Grand Theft Auto: The Trilogy – The Definitive Edition
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/games/62433229fa3b17edc75a9fe5">L.A. Noire</Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/games/62433342fa3b17edc75a9fe7">
              Bully: Scholarship Edition
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/games/6243344afa3b17edc75a9fe9">Max Payne 3</Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/games/624330d3fa3b17edc75a9fe3">
              Grand Theft Auto IV: Complete Edition
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/games/62432d8bfa3b17edc75a9fdf">
              Grand Theft Auto: The Trilogy
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/collections">
              Collection
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/grand-theft-auto-collection">
            Grand Theft Auto Collection
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/red-dead-redemption-collection">
            Red Dead Redemption Collection
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/rockstar-collection">
            Rockstar Games Collection
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/gear">
              Gear
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};

export default GameMobileMenu;
