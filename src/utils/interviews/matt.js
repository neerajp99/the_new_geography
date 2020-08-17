const imgBoy = require("../img/matt-art.jpg");
const imgGirl = require("../img/matt2.png");
const interview = [
  {
    name: "Matt"
  },
  {
    surname: "DesLauriers"
  },
  {
    about:
      "Matt DesLauriers is a freelance creative developer. DesLauriers designs and develops creative technology projects, including digital installations, rich 3D web experiences, generative art, interactive games, data visualizations, and more.  "
  },
  {
    works: "https://mattdesl.com/"
  },
  {
    images: [imgBoy, imgGirl]
  },
  {
    questions: [
      "Is data the best resource for creating/generating AI art?",
      "What’s your approach when it comes to creating artworks through the means of AI/autonomous systems? How often it is required to create new algorithms or alter the existing ones.",
      "How do you see machine intelligence for the creation of art forms? Is it just the machine intelligence or sound, light, and infrastructure that is a crucial part of creating art?",
      "Does Artificial Intelligence open doors to more opportunities in the field of art than what artists think of normally?",
      "Does it break the line between reality and fiction?",
      "Is AI Art capable of being ‘sold’? How is the consumer oriented industry?",
      "What do you think is the most significant development in the AI-Art market over the past a couple of years?",
      "Are you worried that with the community of AI artists to be growing at a fast pace, there might come a time when anyone could be an AI artist like what has happened with graphic designers over the years? Would this according to you lead to less ‘exclusivity’ in the AI-Art industry?",
      "Do you think that the viewership of AI art is really able to appreciate without understanding the technical effort behind the piece?",
      "Do you as an artist have a final art sketch/idea ready in mind or it comes along the way when you start writing the code? Do you believe in creating sample models before the final piece?",
      "Has AI/autonomous systems ever surprised you to the core? Can you give one instance of when you were thoroughly shell shocked by the final output?",
      "What is your opinion on generative music and audio visuals? Do you think this is going to take over the normal live instrumental/edm performances or music industry in general? ",
      "Where do you think AI and Art is going to be used in the future? Where do you think it is going to be commonplace to see AI art being used?",
      "What do you think about the capability of AI in democratising and making art more accessible to all? Also what strategies do you think people should use to increase the amount of knowledge around AI-Art? ",
      "What inspires you to create artworks that use AI/autonomous systems?"
    ]
  },
  {
    answers: [
      " In most AI projects nowadays, the training data is central to the output. With tools like neural networks, any outputs will ultimately represent your data, and be shaped by the biases and weaknesses present in your datasets",
      "Much of my artistic practice draws upon algorithmic, generative, and evolutionary processes, often inspired by nature and based on sets of rules and constraints that mutate over time. This is in contrast to, say, working with unsupervised learning tools through a deep neural network, which is much more akin to working with a 'black box', and heavily dependent on the quality of your training dataset (I occasionally work with these systems too, but I find them less malleable). So, indeed, 'algorithm' is at the heart of all my work, and the challenge in creating a new and original piece often lies in designing and developing an algorithm to produce the sort of imagery I've construct in my mind's eye. With that said, I often alter existing algorithms, and attempt to build upon or modify 'old school' algorithms such as L-systems, recursive structures, space colonization, and so on.",
      "I think beyond just the technology involved, and the flashing lights or harmonic sounds, there also has to be some 'soul' of an artistic AI/computational endeavour — perhaps a passion, a question, a statement, an activation, or a deep exploration of something. For me, there is something curious and interesting about creating complex forms and designs through simple sets of rules, when I see these systems evolve from start to finish, there is a sort of 'sublime' to it. My goal as an artist in this space is to do my best to reveal that 'sublimity' to audience, to try and give them the same feeling I have when seeing the allure of a machine-driven shape or form.",
      "Yes, I'd say the last few years especially have shown AI and computational art breaking its way into the more mainstream art world. And, it becomes yet another tool to create art. The field can be challenging to break into as it often requires technical understanding, but it's welcoming to newcomers, highly accessible, often open source. As AI and creative coding tools improve and become more accessible, the field will be able to become more mainstream and more widely practiced.",
      " I don't think so. ",
      "Yes, AI and more generally computational art has been sold for decades. ",
      " In terms of AI specifically, probably GPT-3 by OpenAI. This will usher in a new era of AI, not only because it is a powerful language model, but because the way in which developers and AI artists use the tool is through natural language, rather than computer language. This will open the doors to AI creativity and AI art projects by people around the world who have no background or technical understanding of the inner workings of AI, which is a huge shift from the current practices involved in AI. In time, I suspect other large models will be developed to target not just words but images and other media, but with a similar 'few-shot' natural language approach to GPT-3, allowing these tools to continue to spread to mainstream populations who have no background in programming.",
      " I'm not too worried. I realize this is an eventuality. However, programmers are still 'scarce' in relative terms, and I suspect there will still be a great need for programmers as advanced AIs can only do so much on their own.",
      "Yes, I think it's possible, just different. An artist who spends their life painting landscapes may have a deeper understanding than the viewer of their work, but they can both appreciate the work in different ways.",
      " It's a bit of both — I typically sketch my ideas out first, but I try to keep my mind blank as I code, letting the program and generative process guide me. For example, sometimes a surprising bug or glitch ends up creating a new direction for me to work from.",
      " I would say GPT-3 is the most surprising AI system I've yet faced. I'm not sure 'shell shocked' would describe my surprise, though!",
      "Not any more than it already has—these things have been around for decades. ",
      "The ideas from AI art and AI design research are already making their way into popular mainstream software for writing, photography, painting, etc. I think this is probably the most obvious place we will see this happen; in the form of filters, plugins, or new paradigms and tools for creatives and artists.",
      "It's a big question but, in short, yes I think AI has a democratising effect, and it also has the potential to bleed over to other art industries, such as AI being used in mobile phone camera technology, giving the average consumer with no photography skills the ability to capture the world in ways that would have been seen as impressive and monumental some decades ago. However, these shifts will probably also be followed by shifts in the way the art world perceives this sort of work, perhaps seeing it as now rudimentary, so there is always a sort of push-pull with this sort of thing.",
      "The process of it. :) "
    ]
  }
];

module.exports = interview;
