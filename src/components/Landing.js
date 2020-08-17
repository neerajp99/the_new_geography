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
  faLaptopCode,
  faDollarSign,
  faUsers,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";

const Landing = () => {
  return (
    <React.Fragment>
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
                  A Technical, Sociological, Economics and Philosophical
                  Overview.
                </h3>
                <br />
                <h4> NEERAJ PANDEY & SUCHIR KALRA</h4>
                <div className="bottom_line" />
                <button className="all_button">Research Study</button>
              </div>
              <div className="landing_images">
                <div className="images_flex">
                  <div className="images_flex_img_one">
                    <div className="artist_image">
                      <img src={matt} className="artist_image_img" alt="" />
                    </div>
                  </div>
                </div>
                <div className="images_flex">
                  <div className="images_flex_img_two">
                    <div className="artist_image">
                      <img src={tjeerd} className="artist_image_img" alt="" />
                    </div>
                  </div>
                  <div className="images_flex_img_one">
                    <div className="artist_image">
                      <img src={mario} className="artist_image_img" alt="" />
                    </div>
                  </div>
                </div>
                <div className="images_flex">
                  <div className="images_flex_img_one">
                    <div className="artist_image">
                      <img src={kyle} className="artist_image_img" alt="" />
                    </div>
                  </div>
                  <div className="images_flex_img_two">
                    <div className="artist_image">
                      <img src={jarett} className="artist_image_img" alt="" />
                    </div>
                  </div>
                  <div className="images_flex_img_one">
                    <div className="artist_image">
                      <img src={roman} className="artist_image_img" alt="" />
                    </div>
                  </div>
                </div>
                <div className="images_flex">
                  <div className="images_flex_img_two">
                    <div className="artist_image">
                      <img src={jatin} className="artist_image_img" alt="" />
                    </div>
                  </div>
                  <div className="images_flex_img_one">
                    <div className="artist_image">
                      <img src={tyler} className="artist_image_img" alt="" />
                    </div>
                  </div>
                  <div className="images_flex_img_two">
                    <div className="artist_image">
                      <img src={ghiora} className="artist_image_img" alt="" />
                    </div>
                  </div>
                  <div className="images_flex_img_one">
                    <div className="artist_image">
                      <img src={patrick} className="artist_image_img" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about_container">
          <div className="about_content">
            <div className="about_content_part">
              <div className="about_content_part_top">
                <FontAwesomeIcon
                  className="font-icon_1"
                  icon={faLaptopCode}
                  id="font-icon"
                  aria-hidden="true"
                />
              </div>
              <div className="about_content_part_middle">Technical Aspects</div>
              <div className="about_content_part_bottom">
                The science, technology, geometry and background to Artificial
                Intelligence and Art. The study aims to reflect upon the works
                of generative design, generative algorithm, Julia sets,
                Mandelbrot sets and alot more. In addition, we explore various
                definitions of creativity.
              </div>
            </div>
            <div className="about_content_part">
              <div className="about_content_part_top">
                <FontAwesomeIcon
                  icon={faBrain}
                  id="font-icon"
                  aria-hidden="true"
                  className="font-icon_2"
                />
              </div>
              <div className="about_content_part_middle">Philosopy</div>
              <div className="about_content_part_bottom">
                This study involves an analysis and evaluation of how
                philosophers would perceive AI Art and whether the AI art
                movement mirrors the early 1900s Dada Movement. In addition, an
                analysis of the industrial revolution and Futurist art leads us
                to the reasoning of how AI art might have originated in the
                first place.
              </div>
            </div>
          </div>
          <div className="about_content">
            <div className="about_content_part">
              <div className="about_content_part_top">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  id="font-icon"
                  aria-hidden="true"
                  className="font-icon_3"
                />
              </div>
              <div className="about_content_part_middle">Economics</div>
              <div className="about_content_part_bottom">
                A study of the market and Art collectors along with a behaviour
                analysis of how people perceive art. And a comparative market
                study between AI art and Non-Art markets. In addition, the
                impacts on the Job market and the short run/long run
                consequences of AI in the Art world have been made. And the
                question of AI art being the next big Ghost work has been
                evaluated.
              </div>
            </div>
            <div className="about_content_part">
              <div className="about_content_part_top">
                <FontAwesomeIcon
                  icon={faUsers}
                  id="font-icon"
                  aria-hidden="true"
                  className="font-icon_4"
                />
              </div>
              <div className="about_content_part_middle">Sociology</div>
              <div className="about_content_part_bottom">
                A study of democratization of art and how AI art could make art
                more accessible to various sectors of society.
              </div>
            </div>
            <div className="about_content_part">
              <div className="about_content_part_top">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  id="font-icon"
                  aria-hidden="true"
                  className="font-icon_5"
                />
              </div>
              <div className="about_content_part_middle">
                Interviews and Surveys
              </div>
              <div className="about_content_part_bottom">
                Interviews with several AI and non-AI artists from across the
                field of Art and Design have been conducted from the month from
                July to August to evaluate the market, reflect upon technology
                behind AI and what they feel about their work. In addition,
                surveys across the University community were conducted to
                ascertain certain psychological perceptions.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="demo">
        <h1>Check out our interviews</h1>
        <p>AI / Generative Artists and Musicians</p>
        <Link to="/artists" className="interview_button">
          Check it out
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Landing;
