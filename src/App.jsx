import "./App.css";
// import Model from "./component/model";
import Modelpage from "./pages/Modelpage";
import Header from "./component/Header";
// import Banner from "./component/Banner";
import Products from "./component/Products";
import Logo from "./component/Logo";
import MenCategories from "./component/menCategories";
// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(false);

  // const handleButton = () => {
  //   // console.log("button clicked");
  //   setCount(true);
  //   // console.log(count);
  // };
  // const closeModelOne = () => {
  //   setCount(false);
  //   // console.log(count);
  // };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Logo />
        <Products />
        <MenCategories />
      </main>

      {/* <button onClick={handleButton}>Click Here</button>
      {count && <Modelpage closeModel={closeModelOne} />} */}
    </>
  );
}

export default App;
