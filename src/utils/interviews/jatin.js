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
      `Clearly such a statement gets one into a discussion about what Art is that is certainly hundreds if not thousands of years old. And it’ll get you quickly on very subjective slippery slopes.

Even if a set of algorithms can produce nice looking paintings, images or sculptures, that still could just mean the artist is the one who created those algorithms, even if the ‘art bot’ has built up internal workings that are a black box to the creator or anyone else, and it ends up doing things humans could never do so well (I think there are quite a lot of examples of that happening). The problem with art is of course that even human beings and animals oftentimes make lousy art.
`
    ]
  }
];

module.exports = interview;
