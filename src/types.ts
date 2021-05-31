//Quiz data types

export type Answer = {
  text: string
  correct: boolean
}

export type Question = {
  question: string
  answers: Answer[]
}

export type Quiz = {
  id: string
  character: string
  img: string
  imgPreview: string
  characterDescription: string
  questions: Question[]
}

//UI Types