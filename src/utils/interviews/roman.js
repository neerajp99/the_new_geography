const imgBoy = require("../img/roman-art.png");
const imgGirl = require("../img/roman2.jpeg");
const interview = [
  {
    name: "Roman"
  },
  {
    surname: "Lipski"
  },
  {
    about:
      "Polish-born painter who has lived and worked in Berlin since 1989. He witnessed and actively participate in Berlin art scene recreation in the 90s. He became recognized for his architecture and landscape artworks - realistic but detached from reality.  His celebrated art has been exhibited in numerous museums all over the world. Despite success and recognition by private art collectors and galleries Roman has been actively looking to reinvent himself and his art. "
  },
  {
    works: "https://www.romanlipski.com/"
  },
  {
    images: [imgBoy, imgGirl]
  },
  {
    questions: [
      `Has AI/autonomous systems ever surprised you to the core? Can you give one instance of when you were thoroughly shell shocked by the final output?`,
      ` What do you think about the capability of AI in democratising and making art more accessible to all? Also what strategies do you think people should use to increase the amount of knowledge around AI-Art?`,
      `more123`

    ]
  },
  {
    answers: [
      `The surprise element is what is the true joy of
AI produced Art, and there have been times when the unexpected becomes the final art piece to
be published`,

      `A
solution to increase this exposure of Artificial Intelligence based art and the key to democratize
AI Art is via Art Workshops and AI Art interactive exhibitions`
    ]
  }
];

module.exports = interview;
