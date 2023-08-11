import { slides } from "../../data/carouselData.json";
import Carousel from "./Carouse/Carousel";
import Product from "./Product/Product";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel data={slides} />
      </div>
      <div className="home__row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
