import "./App.css";
// import Model from "./component/model";
import Modelpage from "./pages/Modelpage";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(false);

  const handleButton = () => {
    // console.log("button clicked");
    setCount(true);
    // console.log(count);
  };
  const closeModelOne = () => {
    setCount(false);
    // console.log(count);
  };
  return (
    <>
      <button onClick={handleButton}>Click Here</button>
      {count && <Modelpage closeModel={closeModelOne} />}
    </>
  );
}

export default App;
