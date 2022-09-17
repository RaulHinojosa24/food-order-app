import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </StoreProvider>
  );
}

export default App;
