import menImage from "../assets/images/shirts.jpg";
import menShoes from "../assets/images/shoes.jpg";
import menWatches from "../assets/images/watches (1).jpg";
import menPants from "../assets/images/pants.jpg";
import menTshirts from "../assets/images/t-shirts.jpg";
const MenCategories = () => {
  return (
    <>
      <div className="menMainBlock">
        <h1>Men Wear</h1>
        <div className="menDiv">
          <div className="menFirstBlock">
            <img src={menImage} alt="" />
            <h4>Shirts</h4>
          </div>
          <div className="menFirstBlock">
            <img src={menShoes} alt="" />
            <h4>Foot Wear</h4>
          </div>
          <div className="menFirstBlock">
            <img src={menWatches} alt="" />
            <h4>Men Accessories</h4>
          </div>
          <div className="menFirstBlock">
            <img src={menPants} alt="" />
            <h4>Pants</h4>
          </div>
          <div className="menFirstBlock">
            <img src={menTshirts} alt="" />
            <h4>T-shirts & Daily Wear</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenCategories;
