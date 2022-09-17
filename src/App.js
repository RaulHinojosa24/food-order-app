import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import StoreProvider from "./store/StoreProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };
  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <StoreProvider>
      {isCartOpen && <Cart onClose={closeCartHandler}></Cart>}
      <Header onOpenCart={openCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </StoreProvider>
  );
}

export default App;
