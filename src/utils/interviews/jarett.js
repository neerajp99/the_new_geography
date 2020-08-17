const imgBoy = require("../img/jarett-art.png");
const imgGirl = require("../img/jarett.png");
const interview = [
  {
    name: "Jarrett"
  },
  {
    surname: "Webb"
  },
  {
    about:
      "Technology director at Argo Design. He is a  leader in directing cross-discipline teams to design and develop digital products and experiences."
  },
  {
    works: "https://www.argodesign.com/"
  },
  {
    images: [imgBoy, imgGirl]
  },
  {
    questions: [
      "What are your views on Generative Design and AI Art?",
      "Do you think that the viewership of AI art is really able to appreciate without understanding the technical effort behind the piece? ",
      "Is data the best resource for creating/generating AI art? ",
      "Has AI/autonomous systems ever surprised you to the core? Can you give one instance of when you were thoroughly shell shocked by the final output?",
      "What is your opinion on generative music and audio visuals? Do you think this is going to take over the normal live instrumental/edm performances or music industry in general?",
      "What do you think about the capability of AI in democratising and making art more accessible to all? Also what strategies do you think people should use to increase the amount of knowledge around AI-Art?",

    ]
  },
  {
    answers: [
      " Generative design, be it practical in application like product design or artistic, is a tool (one of many) for the designer or artist to use. The designer and artist drive and direct the creative process, whereas the AI or ML algorithm help to manipulate elements of craft. The current set of AI and ML algorithms are the next evolution of algorithms creators have been using for years. No one was concerned the blur or noise algorithms in Photoshop were going to strip creators of their creative agency - I believe the same applies to AI/ML. The creator still has to select the data set, the training parameters, forcing function, and the algorithms to employ. The algorithms have a long way to progress before they can compose and create form with purpose and intent. I do believe they are sources of inspiration to creators. The randomness or emergent characteristics are moments of serendipity, showing creators new possibilities and sparking new ideas.",
      "Absolutely. It is happening today. It all depends on the market and the purpose of the product. In some cases, the purchaser may not know or care that an AI was involved in the production, but in other cases, such as works of art, it will undoubtedly affect the value of the work.",
      " Data is the only resource. All things are data.",
      "My feelings towards the output of an AI system are sublime and delight, but not surprise and shock - especially so when it goes 'wrong.'",
      "The answer to this is strongly personal to whom you ask. I sometimes find audio-visuals interesting or even beautiful, but in the end, nothing more than shallow ornamentation. I think they will become more common in performances (possibly driven by economics), but I would speculate they will not 'take over'. Again this is highly subjective and speculative.",
      "It is slowly happening now and inevitably will continue and grow. There is not a simple answer to the strategies question. There are many online resources for someone to learn more about AI and specifically the application to art."
    ]
  }
];

module.exports = interview;
