import Header from './components/Header';
import Container from './components/Container';
import data from './data';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from 'react';
import Cart from "./components/Cart";
const UseContext = createContext();
function App() {
  const { products } = data;
  const [arrayLength, setarrayLength] = useState([]);
  const [count, setCount] = useState(0);
  const [mainItems, setmainItems]=useState(products);
  console.log(arrayLength);
  console.log(count);
  return (
    <div className="App">
      <UseContext.Provider value={{ products, arrayLength, setarrayLength, count, setCount,mainItems,setmainItems }}>
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
