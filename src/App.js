import Home from "./Pages/Home/Home";
import BuyCrypto from "./Pages/Buycrpto/Buycrpto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prices from "./Pages/Price/Price";
import OTC from "./Pages/OTC trading/OTC";
import Staking from "./Pages/Staking/Staking";
import Historical from "./Pages/Historical/Historical";
import Institutional from "./Pages/Institutional services/Institutional";
import Convert from "./Pages/Convert/Convert";
import Signup from "./Pages/Signup/Signup";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/buycrypto" element={<BuyCrypto />} />
          <Route path="/convert" element={<Convert />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/otc_trading" element={<OTC />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/historical_market_data" element={<Historical />} />
          <Route path="/institutional_service" element={<Institutional />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
