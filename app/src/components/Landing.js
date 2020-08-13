import React from "react";
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
import {
  faBrain,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  return (
    <div className="outer_landing">
      <div className="landing">
        <div className="container">
          <div className="row">
            <div className="landing_content">
              <h2>
                <div className="line">
                  <span> AI / Generative</span>
                  <br />
                  <span> Art and </span>
                  <br />
                  <span> Perspectives </span>
                </div>
              </h2>
              <h3>
                A Technical, Sociological, Economics and Philosophical Overview.
              </h3>
              <br />
              <h4> NEERAJ PANDEY & SUCHIR KALRA</h4>
              <div className="bottom_line" />
              <button className="all_button">Research Paper</button>
            </div>
            <div className="landing_images">
              <div className="images_flex">
                <div className="images_flex_img_one">
                  <div className="artist_image">
                    <img src={matt} className="artist_image_img" />
                  </div>
                </div>
              </div>
              <div className="images_flex">
                <div className="images_flex_img_two">
                  <div className="artist_image">
                    <img src={tjeerd} className="artist_image_img" />
                  </div>
                </div>
                <div className="images_flex_img_one">
                  <div className="artist_image">
                    <img src={mario} className="artist_image_img" />
                  </div>
                </div>
              </div>
              <div className="images_flex">
                <div className="images_flex_img_one">
                  <div className="artist_image">
                    <img src={kyle} className="artist_image_img" />
                  </div>
                </div>
                <div className="images_flex_img_two">
                  <div className="artist_image">
                    <img src={jarett} className="artist_image_img" />
                  </div>
                </div>
                <div className="images_flex_img_one">
                  <div className="artist_image">
                    <img src={roman} className="artist_image_img" />
                  </div>
                </div>
              </div>
              <div className="images_flex">
                <div className="images_flex_img_two">
                  <div className="artist_image">
                    <img src={jatin} className="artist_image_img" />
                  </div>
                </div>
                <div className="images_flex_img_one">
                  <div className="artist_image">
                    <img src={tyler} className="artist_image_img" />
                  </div>
                </div>
                <div className="images_flex_img_two">
                  <div className="artist_image">
                    <img src={ghiora} className="artist_image_img" />
                  </div>
                </div>
                <div className="images_flex_img_one">
                  <div className="artist_image">
                    <img src={patrick} className="artist_image_img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="about_content">
              <div className="about_content_part">
                <div className="about_content_part_top"><FontAwesomeIcon icon={faLaptopCode} id="font-icon" aria-hidden="true" /></div>
                <div className="about_content_part_middle">
                  Technical Aspects
                </div>
                <div className="about_content_part_bottom">
                  Every theme comes with the ability to match your or your
                  visitors preference and display as light or dark variants.
                </div>
              </div>
              <div className="about_content_part">
                <div className="about_content_part_top"><FontAwesomeIcon icon={faBrain} id="font-icon" aria-hidden="true" /></div>
                <div className="about_content_part_middle">
                  Philosopy
                </div>
                <div className="about_content_part_bottom">
                  Every theme comes with the ability to match your or your
                  visitors preference and display as light or dark variants.
                </div>
              </div>
            </div>
            <div className="about_content">
              <div className="about_content_part">
                <div className="about_content_part_top">[]</div>
                <div className="about_content_part_middle">
                  Economics
                </div>
                <div className="about_content_part_bottom">
                  Every theme comes with the ability to match your or your
                  visitors preference and display as light or dark variants.
                </div>
              </div>
              <div className="about_content_part">
                <div className="about_content_part_top">[]</div>
                <div className="about_content_part_middle">
                  Sociology
                </div>
                <div className="about_content_part_bottom">
                  Every theme comes with the ability to match your or your
                  visitors preference and display as light or dark variants.
                </div>
              </div>
              <div className="about_content_part">
                <div className="about_content_part_top">[]</div>
                <div className="about_content_part_middle">
                  Interviews and Surveys
                </div>
                <div className="about_content_part_bottom">
                  Every theme comes with the ability to match your or your
                  visitors preference and display as light or dark variants.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
