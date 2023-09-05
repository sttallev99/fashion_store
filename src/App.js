import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/register" element={ user ? <Home/> : <Register/> } />
      <Route path="/login" element={user ? <Home/> : <Login />} />
      <Route path="/products/:category" element={ <ProductList />} />
      <Route path="/product/:id" element={ <Product />} />
      <Route path="/cart" element={ <Cart />} />
    </Routes>
  );
}

export default App;
