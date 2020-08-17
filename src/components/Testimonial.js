import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import leftArrow from "../utils/img/arrow-left.svg";
import rightArrow from "../utils/img/arrow-right.svg";
import { TweenLite, Power3 } from "gsap";

const testimonials = [
  {
    name: "Neeraj Pandey",
    title: "Creative Director, Vortex",
    image: `${require("../utils/img/neeraj.png")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("../utils/img/roman.png")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  }
];

const Testimonial = () => {
  let imageList = useRef(null);
  let testimonialList = useRef(null);

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false
  });

  // Methods for next slide and previous slides
  const nextSlide = () => {
      console.log('ll')
  }

  const prevSlide = () => {

  }

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1
    });
  }, []);
  return (
    <div className="testimonials">
      <div className="testimonial_container ">
        <div className="arrows left ">
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
        </div>
        <div className="slider_content">
          <div className="t-image">
            <ul ref={el => (imageList = el)}>
              <li className={state.isActive1? "active" : ""}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2? "active" : ""}>
                <img src={testimonials[1].image} alt={testimonials[1].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul ref={el => (testimonialList = el)}>
              <li>
                <div className="slider_inner_content">
                  <p className="quote">{testimonials[0].quote}</p>
                  <h3 className="name">{testimonials[0].name}</h3>
                  <h4 className="title">{testimonials[0].title}</h4>
                </div>
              </li>
              <li>
                <div className="slider_inner_content">
                  <p className="quote">{testimonials[1].quote}</p>
                  <h3 className="name">{testimonials[1].name}</h3>
                  <h4 className="title">{testimonials[1].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrows right " onClick={nextSlide}>
          <span>
            <img src={rightArrow} alt="right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
