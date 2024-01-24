import Coin from "../routes/coin";
import CoinItem from "./coinitem";
import "./coins.css";
import { Link } from "react-router-dom";

function Coins(props) {
  return (
    <div className="container">
      <div className="heading">
        <p>#</p>
        <p className="coin-name">Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className="mobile">Volume</p>
        <p className="mobile">Market Cap</p>
      </div>
      {props.coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <CoinItem coins={coins} key={coins.id} />
          </Link>
        );
      })}
    </div>
  );
}

export default Coins;
