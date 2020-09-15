 //QUIZ QUESTIONS
 import kahlImage from '../imgs/khal-drogo.jpg'
 import kahlImageSmall from '../imgs/khal-small.jpg';
 import { v4 as uuidv4 } from 'uuid';
 import tyronImage from '../imgs/tyron-big.png';
 import tyronSmall from '../imgs/tyron-small.png';
 import danySmall from '../imgs/dany.png';
 import jonSmall from '../imgs/jon-small.png';
 import aryaSmall from '../imgs/arya-small.png';


 export const data = [
     {
         id: uuidv4(),
         character: 'Kahl Drogo',
         img: kahlImage,
         imgPreview: kahlImageSmall,

         questions: [
            //object
      {
          question: "Who did Khal marry in Season 1?",
          answers: [
              { text: "Cersei Lannister", correct: false },
              { text: "Sansa Stark", correct: false },
              { text: "Danareys Targaryen", correct: true },
  
          ] 
      },
  
      {
          question: "To which clan does Khal belong to?",
          answers: [
              { text: "Night Watch", correct: false },
              { text: "Dothrakis", correct: true },
              { text: "White Walkers", correct: false },
  
          ] 
      },
  
      {
          question: "Who does Khal Drogo kill by \n pouring molten gold in his head?",
          answers: [
              { text: "Viserys", correct: true },
              { text: "Bronn", correct: false },
              { text: "Theon", correct: false },
  
          ] 
      },
  
      {
          question: "Which actor plays Khal Drogo?",
          answers: [
              { text: "Nikolaj Coster-Waldau", correct: false },
              { text: "Jason Momoa", correct: true },
              { text: "Hafþór Júlíus Björnsson", correct: false },
  
          ] 
      },
  
      {
          question: "What is that Drogo's people fear?",
          answers: [
              { text: "The sea", correct: true },
              { text: "The forest", correct: false },
              { text: "The desert", correct: false },
  
          ] 
      },
  
      {
          question: "What is it true in Khal's culture \n to be a leader?",
          answers: [
              { text: "Branding a sword", correct: false },
              { text: "Raping women", correct: false },
              { text: "Riding a horse", correct: true },
  
          ] 
      }
  
       ]
     
     },

     {
        id: uuidv4(),
        character: 'Tyron Lannister',
        img: tyronImage,
        imgPreview: tyronSmall,

        questions: [
           //object
     {
         question: "Who did Khal marry in Season 1?",
         answers: [
             { text: "Cersei Lannister", correct: false },
             { text: "Sansa Stark", correct: false },
             { text: "Danareys Targaryen", correct: true },
 
         ] 
     },
 
     {
         question: "To which clan does Khal belong to?",
         answers: [
             { text: "Night Watch", correct: false },
             { text: "Dothrakis", correct: true },
             { text: "White Walkers", correct: false },
 
         ] 
     },
 
     {
         question: "Who does Khal Drogo kill by \n pouring molten gold in his head?",
         answers: [
             { text: "Viserys", correct: true },
             { text: "Bronn", correct: false },
             { text: "Theon", correct: false },
 
         ] 
     },
 
     {
         question: "Which actor plays Khal Drogo?",
         answers: [
             { text: "Nikolaj Coster-Waldau", correct: false },
             { text: "Jason Momoa", correct: true },
             { text: "Hafþór Júlíus Björnsson", correct: false },
 
         ] 
     },
 
     {
         question: "What is that Drogo's people fear?",
         answers: [
             { text: "The sea", correct: true },
             { text: "The forest", correct: false },
             { text: "The desert", correct: false },
 
         ] 
     },
 
     {
         question: "What is it true in Khal's culture \n to be a leader?",
         answers: [
             { text: "Branding a sword", correct: false },
             { text: "Raping women", correct: false },
             { text: "Riding a horse", correct: true },
 
         ] 
     }
 
      ]
    
    },
    
    {
        id: uuidv4(),
        character: 'Daenerys Targaryen',
        img: danySmall,
        imgPreview: danySmall,

        questions: [
           //object
     {
         question: "Who did Khal marry in Season 1?",
         answers: [
             { text: "Cersei Lannister", correct: false },
             { text: "Sansa Stark", correct: false },
             { text: "Danareys Targaryen", correct: true },
 
         ] 
     },
 
     {
         question: "Dany’s dragons' names were Drogon, Viserion and?",
         answers: [
             { text: "Rhaegal", correct: true },
             { text: "Vhagar", correct: false },
             { text: "Balerion", correct: false },
 
         ] 
     },
 
     {
         question: "Who does Khal Drogo kill by \n pouring molten gold in his head?",
         answers: [
             { text: "Viserys", correct: true },
             { text: "Bronn", correct: false },
             { text: "Theon", correct: false },
 
         ] 
     },
 
     {
         question: "Which actor plays Khal Drogo?",
         answers: [
             { text: "Nikolaj Coster-Waldau", correct: false },
             { text: "Jason Momoa", correct: true },
             { text: "Hafþór Júlíus Björnsson", correct: false },
 
         ] 
     },
 
     {
         question: "What is that Drogo's people fear?",
         answers: [
             { text: "The sea", correct: true },
             { text: "The forest", correct: false },
             { text: "The desert", correct: false },
 
         ] 
     },
 
     {
         question: "What is it true in Khal's culture \n to be a leader?",
         answers: [
             { text: "Branding a sword", correct: false },
             { text: "Raping women", correct: false },
             { text: "Riding a horse", correct: true },
 
         ] 
     }
 
      ]
    
    },
    
    {
        id: uuidv4(),
        character: 'Jon Snow',
        img: jonSmall,
        imgPreview: jonSmall,

        questions: [
           //object
     {
         question: "Who did Khal marry in Season 1?",
         answers: [
             { text: "Cersei Lannister", correct: false },
             { text: "Sansa Stark", correct: false },
             { text: "Danareys Targaryen", correct: true },
 
         ] 
     },
 
     {
         question: "To which clan does Khal belong to?",
         answers: [
             { text: "Night Watch", correct: false },
             { text: "Dothrakis", correct: true },
             { text: "White Walkers", correct: false },
 
         ] 
     },
 
     {
         question: "Who does Khal Drogo kill by \n pouring molten gold in his head?",
         answers: [
             { text: "Viserys", correct: true },
             { text: "Bronn", correct: false },
             { text: "Theon", correct: false },
 
         ] 
     },
 
     {
         question: "Which actor plays Khal Drogo?",
         answers: [
             { text: "Nikolaj Coster-Waldau", correct: false },
             { text: "Jason Momoa", correct: true },
             { text: "Hafþór Júlíus Björnsson", correct: false },
 
         ] 
     },
 
     {
         question: "What is that Drogo's people fear?",
         answers: [
             { text: "The sea", correct: true },
             { text: "The forest", correct: false },
             { text: "The desert", correct: false },
 
         ] 
     },
 
     {
         question: "What is it true in Khal's culture \n to be a leader?",
         answers: [
             { text: "Branding a sword", correct: false },
             { text: "Raping women", correct: false },
             { text: "Riding a horse", correct: true },
 
         ] 
     }
 
      ]
    
    },
    
    {
        id: uuidv4(),
        character: 'Arya Stark',
        img: 'https://s3.r29static.com/bin/entry/74a/x,80/2171313/image.jpg',
        imgPreview: aryaSmall,

        questions: [
           //object
     {
         question: "Who was not in Arya's killing list?",
         answers: [
             { text: "The Hound", correct: false },
             { text: "Euron Greyjoy", correct: false },
             { text: "Walder Frey", correct: true },
 
         ] 
     },
 
     {
         question: "To which clan does Khal belong to?",
         answers: [
             { text: "Night Watch", correct: false },
             { text: "Dothrakis", correct: true },
             { text: "White Walkers", correct: false },
 
         ] 
     },
 
     {
         question: "Where was located the training temple of the Faceless Men?",
         answers: [
             { text: "Qarth", correct: false },
             { text: "Braavos", correct: true },
             { text: "Meereen", correct: false },
 
         ] 
     },
 
     {
         question: "What is the name of Arya’s sword?",
         answers: [
             { text: "Pointy", correct: false },
             { text: "Fang", correct: false },
             { text: "Needle", correct: true },
 
         ] 
     },
 
     {
         question: "What is that Drogo's people fear?",
         answers: [
             { text: "The sea", correct: true },
             { text: "The forest", correct: false },
             { text: "The desert", correct: false },
 
         ] 
     },
 
     {
         question: "What is it true in Khal's culture \n to be a leader?",
         answers: [
             { text: "Branding a sword", correct: false },
             { text: "Raping women", correct: false },
             { text: "Riding a horse", correct: true },
 
         ] 
     }
 
      ]
    
    },
    
     


]