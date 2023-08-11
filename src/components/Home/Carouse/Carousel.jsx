import "./carousel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className="carousel">
      <ArrowBackIosIcon
        className="arrow arrow_left"
        sx={{ fontSize: 57 }}
        onClick={prevSlide}
      />
      {data.map((item, i) => {
        return (
          <img
            className={slide === i ? "slide" : "slide slide-hidden"}
            key={i}
            src={item.src}
            alt={item.alt}
          />
        );
      })}
      <ArrowForwardIosIcon
        className="arrow arrow_right"
        sx={{ fontSize: 58 }}
        onClick={nextSlide}
      />
    </div>
  );
}

export default Carousel;
