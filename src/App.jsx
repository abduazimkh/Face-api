import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Signup from "./routes/signup/Signup";
import ProductView from "./routes/product-view/ProductView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="product-view/:id" element={<ProductView />} />
      </Routes>
    </>
  );
}

export default App;
