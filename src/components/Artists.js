import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
  "Jarrett",
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

function Artists() {
  const { pathname } = useLocation();

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [pathname]
  );
  const onClickImage = () => {
    // document.body.style.height = `${0}px`;
  };

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
    "tjeerd"
  ];

  return (
    <div className="Artists">
      <div>
        {images.map((image, index) => (
          <>
            <Link to={`/interview/${use_names[index]}`}>
              <div key={index} className="img-container">
                <img
                  src={image}
                  alt={`people ${index}`}
                  onClick={onClickImage}
                />
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
