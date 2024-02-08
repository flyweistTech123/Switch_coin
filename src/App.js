import Home from "./Pages/Home/Home";
import BuyCrypto from "./Pages/Buycrpto/Buycrpto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prices from "./Pages/Price/Price";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buycrypto" element={<BuyCrypto />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
