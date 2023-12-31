import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/register" element={ user ? <Home/> : <Register/> } />
      <Route path="/login" element={user ? <Home/> : <Login />} />
      <Route path="/products/:category" element={ <ProductList />} />
      <Route path="/product/:id" element={ <Product />} />
      <Route path="/cart" element={ <Cart />} />
      <Route path="/success" element={ <Success />} />
    </Routes>
  );
}

export default App;
