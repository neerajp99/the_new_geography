import React, { useEffect, useRef } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import arrow from "../utils/img/arrow-right.svg";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
// Import interview
// import interview from "../utils/interviews/mario";

let interview = null;
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function Interview(props) {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 1.8 });
  interview = require(`../utils/interviews/${props.match.params.id}`);
  console.log(props.match.params.id);
  const { pathname } = useLocation();

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [pathname]
  );
  useEffect(
    () => {
      // Images Vars
      const girlImage = images.firstElementChild; // or children[0]
      const boyImage = images.lastElementChild;

      //content vars
      const headlineFirst = content.children[0].children[0];
      const headlineSecond = headlineFirst.nextSibling;
      const headlineThird = headlineSecond.nextSibling;
      const contentP = content.children[1];
      const contentButton = content.children[2];

      //Remove initial flash
      TweenMax.to(app, 0, { css: { visibility: "visible" } });

      //Images Animation
      tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
        .from(
          girlImage.firstElementChild,
          2,
          { scale: 1.6, ease: Power3.easeOut },
          0.2
        )
        .from(boyImage, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
        .from(
          boyImage.firstElementChild,
          2,
          { scale: 1.6, ease: Power3.easeOut },
          0.2
        );

      //Content Animation
      tl.staggerFrom(
        [
          headlineFirst.children,
          headlineSecond.children,
          headlineThird.children
        ],
        1,
        {
          y: 44,
          ease: Power3.easeOut,
          delay: 0.8
        },
        0.15,
        "Start"
      )
        .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
        .from(
          contentButton,
          1,
          { y: 20, opacity: 0, ease: Power3.easeOut },
          1.6
        );
    },
    [tl]
  );

  const classes = useStyles();
  const la = Object.keys(interview[5].questions).map((key, index) => (
    <React.StrictMode key={key}>
      {interview[5].questions[key] !== "more123" && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {interview[5].questions[key]}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{interview[6].answers[key]}</Typography>
          </AccordionDetails>
        </Accordion>
      )}
      {interview[5].questions[key] === "more123" && (
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              More information coming soon..
            </Typography>
          </AccordionSummary>
        </Accordion>
      )}
    </React.StrictMode>
  ));
  return (
    <div className="hero" ref={el => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    {interview[0].name}
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    {interview[1].surname}
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner" />
                </div>
              </h1>
              <p>{interview[2].about}</p>
              <div className="btn-row">
                <button className="explore-button">
                  Interview
                  <div className="arrow-icon">
                    <img src={arrow} alt="row" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => (images = el)} className="hero-images-inner">
              <div className="hero-image girl">
                <img src={interview[4].images[1]} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={interview[4].images[0]} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="interview_accordion">
        <div className="container_el">
          <h2> Interview</h2>
          {la}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Interview;
