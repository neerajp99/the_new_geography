const imgBoy = require("../img/jatin-art.png");
const imgGirl = require("../img/jatin.png");
const interview = [
  {
    name: "Jatin"
  },
  {
    surname: "Das"
  },
  {
    about:
      "Jatin Das is an Indian painter, sculptor and muralist. He is counted amongst the most contemporary artists of India. He is a Padma Bhushan awardee in 2012, Bharat Nirman in 2007."
  },
  {
    works: "https://en.wikipedia.org/wiki/Jatin_Das_(painter)"
  },
  {
    images: [imgBoy, imgGirl]
  },
  {
    questions: ["What is your view on computational creativity in art?"]
  },
  {
    answers: [
      `Any subject like art, cannot be discussed in a few sentences. Creativity  and art is an integral part of life. Art and science are also inseparable.

There have been many misnomers in our education. In Spite of all Artificial intelligence, a human being has to live and breathe naturally. We in India, becoming and adapting artificially too soon, at the cost of naturalness.

There's a simple expression,"how much and no more" a very potent expression can be applied to everything. `
    ]
  }
];

module.exports = interview;
