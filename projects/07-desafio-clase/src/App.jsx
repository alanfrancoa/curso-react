import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./redux/userSlice";
import { Header } from "./components/Header";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      ID: 1,
      description: "toallitas",
      price: 200,
      stock: 20,
    }
    dispatch(addProduct(data))

  }, []);

  return (
    <div className="App">
      <Header />
     
    </div>
  );
}

export default App;