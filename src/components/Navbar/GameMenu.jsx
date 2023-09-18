//import GameMenu from './components/GameMenu'
import "./GameMenu.css";
import { Link } from "react-router-dom";

const GameMenu = ({ hideclass }) => {
  // const [hideall, sethideall] = useState("hidden")

  return (
    <>
      <ul
        className="top-0 right-0 left-0 z-40 pl-32 w-full tracking-wider bg-black opacity-90"
        id="menu"
      >
        <li>
          <div className="pt-6 pl-32 mb-10 w-full bg-black">
            <Link
              onClick={hideclass}
              to="/games/650805474ce634ca88526f0c"
              // onClick={hideclass}
              className="p-2 font-semibold text-white hover:bg-[#161616]"
            >
              Red Dead Redemption 2
            </Link>
            <Link
              onClick={hideclass}
              to="/buy-red-dead-online-gold-bars"
              className="p-4 m-2 font-semibold text-white hover:bg-[#161616]"
            >
              Red Dead Online: Gold Bars
            </Link>
            <Link
              onClick={hideclass}
              to="/games/650805474ce634ca88526f0d"
              className="p-4 m-2 font-semibold text-white hover:bg-[#161616]"
            >
              Grand Theft Auto V
            </Link>
            <Link
              onClick={hideclass}
              to="/buy-gta-v-shark-cash-cards"
              className="p-4 m-2 font-semibold text-white hover:bg-[#161616]"
            >
              Grand Theft Auto Online: Shark Cash Cards
            </Link>
          </div>
          <div className="pl-32 mb-10 bg-black backdrop-blur-sm">
            <Link
              onClick={hideclass}
              to="/games/650805474ce634ca88526f0e"
              className="p-4 m-2 font-semibold text-white hover:bg-[#161616]"
            >
              Grand Theft Auto: The Trilogy - The Definitive Edition
            </Link>
            <Link
              onClick={hideclass}
              to="/games/650805474ce634ca88526f0b"
              className="p-4 m-2 font-semibold text-white hover:bg-[#161616]"
            >
              L.A. Noire
            </Link>
            <Link
              onClick={hideclass}
              to="/games/650805474ce634ca88526f09"
              className="p-4 m-2 font-semibold text-white hover:bg-[#161616]"
            >
              Bully: Scholarship Edition
            </Link>
            <Link
              onClick={hideclass}
              to="/games/650805474ce634ca88526f0a"
              className="p-4 m-2 font-semibold text-white hover:bg-[#161616]"
            >
              Max Payne 3
            </Link>
          </div>
          <div className="pl-32 mb-4 bg-black backdrop-blur-sm">
            <Link
              onClick={hideclass}
              to="/games/650805474ce634ca88526f0f"
              className="p-4 m-2 font-semibold text-white hover:bg-[#161616]"
            >
              Grand Theft Auto IV: Complete Edition
            </Link>
            <Link
              onClick={hideclass}
              to="/games/650805474ce634ca88526f10"
              className="p-4 m-2 font-semibold text-white hover:bg-[#161616]"
            >
              Grand Theft Auto: The Trilogy
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};

export default GameMenu;
