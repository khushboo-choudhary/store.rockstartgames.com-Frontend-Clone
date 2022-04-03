import { Link } from "react-router-dom";
import "./GameMenu.css";

const GameMobileMenu = ({hideclass}) => {

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
            <Link onClick={hideclass} to="/game/buy-red-dead-redemption-2">
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
            <Link onClick={hideclass} to="/game/buy-gta-v">Grand Theft Auto V</Link>
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
            <Link onClick={hideclass} to="/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition">
              Grand Theft Auto: The Trilogy – The Definitive Edition
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/game/buy-la-noire">L.A. Noire</Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/game/buy-bully-scholarship-edition">
              Bully: Scholarship Edition
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/game/buy-max-payne-3">Max Payne 3</Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/game/buy-grand-theft-auto-iv">
              Grand Theft Auto IV: Complete Edition
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link onClick={hideclass} to="/game/buy-grand-theft-auto-the-trilogy">
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
