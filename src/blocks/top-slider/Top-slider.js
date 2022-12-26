import { useState, useEffect, useRef } from "react";
import { topSliderInfo } from "../../control";
import "./top-slider.scss";
const TopSlider = () => {
  const [slideNow, setSlideNow] = useState(0);
  const itemsRefs = useRef([]);
  const dotsRefs = useRef([]);

  useEffect(() => {
    showSlide(slideNow);
  }, [slideNow]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideNow((slideNow) => slideNow + 1);
    }, 5000);
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("top-slider__dot")) {
        clearInterval(slideInterval);
      }
    });
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const showSlide = (n) => {
    if (n > 2) setSlideNow(0);
    hideAllSlide();
    try {
      itemsRefs.current[slideNow].classList.add("active", "fadeIn");
      dotsRefs.current[slideNow].classList.add("active");
    } catch (error) {
      setSlideNow(0);
    }
  };
  const hideAllSlide = () => {
    itemsRefs.current.forEach((item) => {
      item.classList.remove("active");
    });
    dotsRefs.current.forEach((dot) => {
      dot.classList.remove("active");
    });
  };

  const sliderItems = topSliderInfo.map((item, index) => {
    return (
      <div
        className="top-slider__item"
        style={{ backgroundImage: `url(${item.img})` }}
        key={index}
        ref={(el) => (itemsRefs.current[index] = el)}
      >
        <h2 className="top-slider__title">{item.text}</h2>
      </div>
    );
  });
  const dots = topSliderInfo.map((item, index) => {
    return (
      <li
        className="top-slider__dot"
        key={index}
        ref={(el) => (dotsRefs.current[index] = el)}
        onClick={() => {
          setSlideNow(index);
        }}
      ></li>
    );
  });
  return (
    <section className="top-slider">
      <div className="top-slider__inner  container">
        <div className="top-slider__items">{sliderItems}</div>
        <ul className="top-slider__dots">{dots}</ul>
      </div>
    </section>
  );
};
export default TopSlider;
