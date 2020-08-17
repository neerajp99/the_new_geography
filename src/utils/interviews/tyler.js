const imgBoy = require("../img/tyler-art.png");
const imgGirl = require("../img/tyler.png");
const interview = [
  {
    name: "Tyler"
  },
  {
    surname: "Hobbs"
  },
  {
    about:
      "Tyler Hobbs is an artist from Austin, TX. His process, known as generative art or algorithmic artwork, uses unique creative coding to craft each work. His art focuses on the interplay of structure and chaos, with a particular appreciation for the patterns inherent in imperfection. Tyler’s work has been collected in more than a dozen countries around the world."
  },
  {
    works: "https://tylerxhobbs.com/"
  },
  {
    images: [imgBoy, imgGirl]
  },
  {
    questions: [
      `Has AI/autonomous systems ever surprised you to the core? Can you give one instance of when you were thoroughly shell shocked by the final output?`,
      `Do you think that the viewership of AI art is really able to appreciate without understanding the technical effort behind the piece?`
    ]
  },
  {
    answers: [
      `There have been times when the final output set produced by autonomous systems and AI
have taken the artists also by deep surprise.`,

      `Most of my collectors have some
sort of tech/science related background. The change in the kind of collectors of AI Art is also in
one sense showing hints of radicalization occurring within the AI art market.`
    ]
  }
];

module.exports = interview;
