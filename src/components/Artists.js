import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import useWindowSize from "./hooks/useWindowSize";
import matt from "../utils/img/matt2.png";
import mario from "../utils/img/mario.png";
import kyle from "../utils/img/kyle.png";
import roman from "../utils/img/roman.png";
import tyler from "../utils/img/tyler.png";
import patrick from "../utils/img/patrick.png";
import jatin from "../utils/img/jatin.png";
import ghiora from "../utils/img/ghiora.png";
import jarett from "../utils/img/jarett.png";
import tjeerd from "../utils/img/tjeerd.png";

const images = [
  matt,
  mario,
  kyle,
  roman,
  tyler,
  patrick,
  jatin,
  ghiora,
  jarett,
  tjeerd
];
const names = [
  "Matt",
  "Mario",
  "Kyle",
  "Roman",
  "Tyler",
  "Patrick",
  "Jatin",
  "Ghiora",
  "Jarett",
  "Tjeerd"
];
const surnames = [
  "Deslauriers",
  "Klingemann",
  "McDonald",
  "Lipski",
  "Hobbs",
  "Borgeat",
  "Das",
  "Aharoni",
  "Webb",
  "Hoek"
];

const onClickImage = () => {
  console.log("clicked");
};

function Artists() {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  });

  //set the height of the body.
  useEffect(
    () => {
      setBodyHeight();
    },
    [size.height]
  );
  const use_names = [
    "matt",
    "mario",
    "kyle",
    "roman",
    "tyler",
    "patrick",
    "jatin",
    "ghiora",
    "jarett",
    ""
  ];

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;
    // scrollContainer.current.style.transform = `translate3d(0, -${
    //   data.rounded
    // }px, 0) skewY(${skew}deg)`;

    //Assign skew and smooth scrolling to the scroll container
    if (scrollContainer.current !== null) {
    scrollContainer.current.style.transform = `translate3d(0, -${
      data.rounded
    }px, 0)  skewY(${skew}deg)`;
}


    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div ref={app} className="Artists">
      <div ref={scrollContainer} className="scroll">
        {images.map((image, index) => (
            <>
          <Link to={`/interview/${use_names[index]}`}>
            <div key={index} className="img-container">
              <img src={image} alt={`people ${index}`} onClick={onClickImage} />
            </div>
            </Link>
            <h2>
              {names[index]} <span className="outline">{surnames[index]}</span>
            </h2>
          </>
        ))}
      </div>

    </div>
  );
}

export default Artists;
