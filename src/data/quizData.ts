//QUIZ QUESTIONS

import kahlImage from "../imgs/khal-drogo.jpg";
import kahlImageSmall from "../imgs/khal-small.jpg";
import tyronImage from "../imgs/tyron-big.png";
import tyronSmall from "../imgs/tyron-small.png";
import danySmall from "../imgs/dany.png";
import danyBig from "../imgs/dany-big.jpg";
import jonSmall from "../imgs/jon-small.png";
import jonBig from "../imgs/jon-big.jpg";
import aryaSmall from "../imgs/arya-small.png";

export const quizData = [
  {
    id: "kahl-drogo",
    character: "Kahl Drogo",
    img: kahlImage,
    imgPreview: kahlImageSmall,
    characterDescription:
      "Drogo is a khal or warlord of the Dothraki, the famed nomadic horse-lords of the eastern continent beyond the Narrow Sea. The Dothraki are fierce warriors, skilled in battle, unrelenting in combat and known for savagery towards non-Dothraki. Amongst their own people they have a code of honor, albeit still a harsh and unforgiving one. Drogo was very young to have his own khalasar, particularly such a large one. He is a legendary warrior and has never been defeated in battle. Drogo desired the most beautiful and exotic woman in the world as his khaleesi or wife, and enlisted Magister Illyrio Mopatis of Pentos to help him find such a woman.",

    questions: [
      //object
      {
        question: "Who did Khal marry in Season 1?",
        answers: [
          { text: "Cersei Lannister", correct: false },
          { text: "Sansa Stark", correct: false },
          { text: "Danareys Targaryen", correct: true },
        ],
      },

      {
        question: "To which clan does Khal belong to?",
        answers: [
          { text: "Night Watch", correct: false },
          { text: "Dothrakis", correct: true },
          { text: "White Walkers", correct: false },
        ],
      },

      {
        question:
          "Who does Khal Drogo kill by \n pouring molten gold in his head?",
        answers: [
          { text: "Viserys", correct: true },
          { text: "Bronn", correct: false },
          { text: "Theon", correct: false },
        ],
      },

      {
        question: "Which actor plays Khal Drogo?",
        answers: [
          { text: "Nikolaj Coster-Waldau", correct: false },
          { text: "Jason Momoa", correct: true },
          { text: "Hafþór Júlíus Björnsson", correct: false },
        ],
      },

      {
        question: "What is that Drogo's people fear?",
        answers: [
          { text: "The sea", correct: true },
          { text: "The forest", correct: false },
          { text: "The desert", correct: false },
        ],
      },

      {
        question: "What is it true in Khal's culture \n to be a leader?",
        answers: [
          { text: "Branding a sword", correct: false },
          { text: "Raping women", correct: false },
          { text: "Riding a horse", correct: true },
        ],
      },
    ],
  },

  {
    id: "tyron-lannister",
    character: "Tyron Lannister",
    img: tyronImage,
    imgPreview: tyronSmall,
    characterDescription:
      "Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces. He is the current Lord of Casterly Rock and Hand of the King to Brandon Stark.",

    questions: [
      //object
      {
        question: "Which battle did Tyron get his scar from?",
        answers: [
          { text: "Battle of the Blackwater", correct: true },
          { text: "Battle of the Bastards", correct: false },
          { text: "Battle of the Goldroad", correct: false },
        ],
      },
    ],
  },

  {
    // id: uuidv4(),
    id: "daenerys-targaryen",
    character: "Daenerys Targaryen",
    img: danyBig,
    imgPreview: danySmall,
    characterDescription:
      "Queen Daenerys I Targaryen, also known as Daenerys Stormborn, and colloquially known as Dany, was the younger sister of Rhaegar Targaryen and Viserys Targaryen and only daughter of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert's Rebellion.",

    questions: [
      {
        question:
          "What does Daenerys mean when she says 'Shekh ma shieraki anni' to Khal Drogo?",
        answers: [
          { text: "Moon of my life", correct: false },
          { text: "My sun and stars", correct: true },
          { text: "Sound did silence me", correct: false },
        ],
      },

      {
        question: "Dany’s dragons' names were Drogon, Viserion and?",
        answers: [
          { text: "Rhaegal", correct: true },
          { text: "Vhagar", correct: false },
          { text: "Balerion", correct: false },
        ],
      },

      {
        question:
          "Who is the leader or the kahl when Dany is prisoner of the kahlazar?",
        answers: [
          { text: "Kahl Drogo", correct: false },
          { text: "Kahl Seru", correct: false },
          { text: "Kahl Moro", correct: true },
        ],
      },

      {
        question: "Which of the following Dany does not style herself of?",
        answers: [
          { text: "Breaker of Chains", correct: false },
          { text: "First of Her Name", correct: false },
          { text: "The Dragons' Whisperer", correct: true },
        ],
      },
    ],
  },

  {
    id: "jon-snow",
    character: "Jon Snow",
    img: jonBig,
    imgPreview: jonSmall,
    characterDescription:
      "Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. From infancy, Jon is presented as the bastard son of Lord Eddard Stark, Lyanna's brother, and raised alongside his lawful children at Winterfell, the seat of House Stark. However, his true parentage is kept secret from everyone, including Jon himself, in order to protect him from those that sought the complete annihilation of House Targaryen after Robert's Rebellion and to maintain order in the realm.",

    questions: [
      {
        question: "What is the name of Jon Snow's Direwolf?",
        answers: [
          { text: "Grey Wind", correct: false },
          { text: "Phantom", correct: false },
          { text: "Ghost", correct: true },
        ],
      },

      {
        question:
          "What piece of fencing advice did Jon Snow give to Arya Stark? 'Stick them with the …'?",
        answers: [
          { text: "...pointy end", correct: true },
          { text: "'...prickly end'", correct: false },
          { text: "'...sharp end'", correct: false },
        ],
      },
    ],
  },

  {
    id: "arya-stark",
    character: "Arya Stark",
    img: "https://s3.r29static.com/bin/entry/74a/x,80/2171313/image.jpg",
    imgPreview: aryaSmall,
    characterDescription:
      'Arya Stark is the youngest daughter and third child of Lady Catelyn and Lord Ned Stark. Arya was born and raised at Winterfell. She has an older sister, Sansa, an older brother Robb, two younger brothers Bran and Rickon Stark, and a "bastard half-brother" Jon Snow. Arya rejects the notion that she must become a lady and marry for influence and power. Instead, she believes that she can forge her own destiny. She is fascinated by warfare and training in the use of arms, and is bored by embroidery and other "lady-like" pursuits. She takes after her father and has a quarrelsome relationship with her sister Sansa, due to their contrasting interests and personalities. She is close to her "half-brother" Jon, who is also something of an outsider.',

    questions: [
      //object
      {
        question: "Who was not in Arya's killing list?",
        answers: [
          { text: "The Hound", correct: false },
          { text: "Euron Greyjoy", correct: true },
          { text: "Walder Frey", correct: false },
        ],
      },

      {
        question: "Who was Arya's first mentor and sword instructor",
        answers: [
          { text: "Syrio Forel", correct: true },
          { text: "Jon Snow", correct: false },
          { text: "Jaquen H’ghar", correct: false },
        ],
      },

      {
        question: "Where was located the training temple of the Faceless Men?",
        answers: [
          { text: "Qarth", correct: false },
          { text: "Braavos", correct: true },
          { text: "Meereen", correct: false },
        ],
      },

      {
        question: "What is the name of Arya’s sword?",
        answers: [
          { text: "Pointy", correct: false },
          { text: "Fang", correct: false },
          { text: "Needle", correct: true },
        ],
      },
    ],
  },
];
