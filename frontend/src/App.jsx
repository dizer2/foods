import { useState } from "react";
import Delicious from "./components/deliciousPage/Delicious";
import Footer from "./components/footer/Footer";
import Home from "./components/homePage/Home";
import "./components/main/main.css"

function App() {
  const [cartProduct, setCartProduct] = useState(() => {
    const localStoragecartProduct = localStorage.getItem('CARTPRODUCT');
    return localStoragecartProduct ? JSON.parse(localStoragecartProduct) : [];
  });
	const [open, setOpen] = useState(false);


  return (
    <div className="App">
      <Home open={open} setOpen={setOpen} cartProduct={cartProduct} setCartProduct={setCartProduct} />
      {!open && (
      <>
        <Delicious cartProduct={cartProduct} setCartProduct={setCartProduct} />
        <Footer />
      </>
     )}
    </div>
  );
}

export default App;
