import { Link } from "react-router-dom";
import "./GameMenu.css";

const GameMobileMenu = (props) => {
  console.log("GameMobileMenu");

  return (
    <>
      {/* <p className='bg-indigo-700 animate-bounce mt-68'>Checking GameMenu Component Working </p> */}
      <ul
        className="top-0 right-0 left-0 z-40 content-end w-1/2 bg-[#161616] opacity-90 overflow-scroll"
        id="menumob"
      >
        <div className="py-2 font-semibold">
          <li>
            <Link to="">Games</Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link to="/game/buy-red-dead-redemption-2">
              Red Dead Redemption 2
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link to="/buy-red-dead-online-gold-bars">
              Red Dead Online: Gold Bars
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link to="/game/buy-gta-v">Grand Theft Auto V</Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link to="/buy-gta-v-shark-cash-cards">
              Grand Theft Auto Online: Shark Cash Cards
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link to="/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition">
              Grand Theft Auto: The Trilogy – The Definitive Edition
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link to="/game/buy-la-noire">L.A. Noire</Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link to="/game/buy-bully-scholarship-edition">
              Bully: Scholarship Edition
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link to="/game/buy-max-payne-3">Max Payne 3</Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link to="/game/buy-grand-theft-auto-iv">
              Grand Theft Auto IV: Complete Edition
            </Link>
          </li>
        </div>
        <div className="py-2 font-semibold">
          <li>
            <Link to="/game/buy-grand-theft-auto-the-trilogy">
              Grand Theft Auto: The Trilogy
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};

export default GameMobileMenu;
