import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Signup from "./routes/signup/Signup";
import ProductView from "./routes/product-view/ProductView";
import Nav from "./components/nav/Nav";
import Login from "./routes/login/Login";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-view/:id" element={<ProductView />} />
      </Routes>
    </>
  );
}

export default App;
