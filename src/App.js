import { BrowserRouter,Route,Routes } from "react-router-dom";

import Logo from "./component/logo/Logo";
import Nav from "./component/nav/nav";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Blog from "./component/blog/Blog";
import Del from "./component/delivery/delivery";
import Feutured from "./component/feutured/feutured";
import Footer from "./component/footer/footer";
import Cart from "./component/cart/cart";

import "./App.css";
function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
        <Logo/>
        <Nav/>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/delivery" element={<Del/>}/>
            <Route path="/featured" element={<Feutured/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
