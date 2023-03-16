import Header from './components/Header';
import Container from './components/Container';
import data from './data';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useMemo, createContext } from 'react';
import Cart from "./components/Cart";

const UseContext = createContext();

function App() {
  const { products } = data;
  const [arrayLength, setarrayLength] = useState([]);
  const [count, setCount] = useState(0);
  const [mainItems, setmainItems] = useState(products);

  const contextValue = useMemo(() => {
    return {
      products,
      arrayLength,
      setarrayLength,
      count,
      setCount,
      mainItems,
      setmainItems
    };
  }, [products, arrayLength, count, mainItems]);

  return (
    <div className="App">
      <UseContext.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <>
                <Header />
                <Container />
              </>
            } />
          
            <Route path='/cart' element={
              <>
                <Header />
                <Cart />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </UseContext.Provider>
    </div>
  );
}

export { UseContext };
export default App;
