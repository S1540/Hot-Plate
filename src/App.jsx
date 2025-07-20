import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./output.css";
import Header from "./components/Header";
import FoodList from "./components/FoodList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <FoodList />
    </>
  );
}

export default App;
