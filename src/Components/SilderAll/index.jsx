import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./SliderAll.module.css";

const SliderAll = ({ settings, ABOUTE_SLIDER, BEST_SALE_SLIDER }) => {
  return (
    <div className={css.sliderDiv}>
      <Slider {...settings}>
        {ABOUTE_SLIDER}
        {BEST_SALE_SLIDER}
      </Slider>
    </div>
  );
};

export default SliderAll;
