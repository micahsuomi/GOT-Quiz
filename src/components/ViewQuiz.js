import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import QuizForm from './QuizForm/index';
import QuizDescription from './QuizDescription/index';
import GameScore from './GameScore/index';
import './viewquiz.css';

const ViewQuiz = (props) => {
    const [quiz, setQuiz] = useState([]);
    const [questionLoaded, setQuestionLoaded] = useState(false);
    const [randomQuestions, setRandomQuestions] = useState([])
    const [randomQuestion, setRandomQuestion] = useState({});
    const [isGameStarted, setIsGameStarted] = useState(false);
    let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState('');
    const [isSelected, setIsSelected] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    const [score, setScore] = useState(0);
    const [isGameFinished, setIsGameFinished] = useState(false);

        //loads all the questions
        useEffect(() => {
            const id = props.match.params.id;
            const foundQuiz = props.quizData.find((data) => {
                return data.id === id;
            });
            setQuiz(foundQuiz);
        }, [quiz, props.match.params.id, props.quizData])
       

    useEffect(() => {
        setRandomQuestion(randomQuestions[currentQuestionIndex]);
    }, [randomQuestions, currentQuestionIndex])


    const nextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex = currentQuestionIndex + 1)
        setIsAnswered(false)
     
        if(randomQuestions.length < currentQuestionIndex +1) {
            console.log('game over')
            setIsGameFinished(true)
            setIsGameStarted(false)
        }
    
    }

    //loads random questions with async and set timeout to return the questions in random order
    const startGame = async () => {
        try {
            setTimeout(() => {
            let randomQuiz = quiz.questions.sort(()=> Math.random() -.5);
            setIsGameStarted(true);
            setIsGameFinished(false);
            setRandomQuestions(randomQuiz);
            setQuestionLoaded(true);

            }, 1000);
            

        } catch {
            console.log('error')
        }
       

    }

   
   
    const handleSubmit = (e) => {
        e.preventDefault();

            let selectedAnswer = randomQuestion.answers.find((a) => {
                return a.text === answer
            })
            
                    setIsAnswered(true);
                    setIsSelected(false);
                 if (selectedAnswer.correct){  
                    setIsCorrect(true);
                    setIsWrong(false);
                    setScore(score + 1);
                } else {
                    setIsCorrect(false);
                    setIsWrong(true);
                    setScore(score + 0);

                }
    }

    const handleChange = (e) => {
        setAnswer(e.target.value);
        setIsSelected(true)
        
    }

   
    const restartGame = () => {
        setIsGameStarted(false);
        setIsGameFinished(false)
        setCurrentQuestionIndex(0)
     
    }

  
 
        return (
            <div className="quiz-container">
                  <div className="exit">
                    <NavLink to ="/quiz" className="exit__link"><span className="exit__text">Exit Quiz</span>
                    <i className="fas fa-times-circle fa-2x exit__icon"></i>                                         
                    </NavLink>
                </div>
            <div className="description-container">
              
                <div className="big-image-left">
                    <img src={quiz.img} alt="quiz character" className="big-img-1" />
                </div>

                {
                    isGameStarted || isGameFinished ? null : 
                    <QuizDescription quiz={quiz}
                                     isGameStarted={isGameStarted}
                                     startGame={startGame}
                                    />
                } 
                      
                                    
                      {
                        isGameStarted && !isGameFinished ? 
                            <div className="question-container">
                                { 
                                questionLoaded ?      
                                <div>
                                     {
                                        isAnswered ? null : 
                                        <h1 className="question">{randomQuestion.question}</h1>

                                    } 
                                <QuizForm handleSubmit={handleSubmit}
                                          isAnswered={isAnswered}
                                          handleChange={handleChange}
                                         randomQuestion={randomQuestion}
                                          isCorrect={isCorrect}
                                          isWrong={isWrong}
                                          isSelected={isSelected}/> 

                            <div className="score-box"><h2></h2> <span className="score score2"></span>
                            </div>
                           {
                                !isGameFinished && isAnswered ?
                                <button className="btn-next" onClick={nextQuestion}>Next</button>
                               
                                : null

                            }
                            </div>: null }
                           
                            </div> 


                            : 
                            isGameFinished ?
                            <GameScore score={score}
                                       quiz={quiz}
                                       restartGame={restartGame}
                                       
                            /> 
                            : null
                            }   

                          
               
                </div>
                </div>
        )
    
}



export default ViewQuiz;


/*
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import QuizForm from './QuizForm/index';
import QuizDescription from './QuizDescription/index';
import GameScore from './GameScore/index';
import './viewquiz.css';

let randomQuestions;

class ViewQuiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: [],
            randomQuestions: [],
            randomQuestion: {},
            isGameStarted: false,
            currentQuestionIndex: 0,
            answer: '', 
            isSelected: false,
            isAnswered: false,
            isCorrect: false,
            isWrong: false,
            score: 0,
            isGameFinished: false

        }
    }
    
    getQuestions = () => {
        const id = this.props.match.params.id;
        const foundQuiz = this.props.quizData.find((data) => {
            return data.id === id;
        });
        this.setState({
            quiz: foundQuiz
        })
        console.log(this.state.quiz)

    }

    generateNextQuestion = () => {
        this.showQuestion(randomQuestions[this.state.currentQuestionIndex]);
    }

    showQuestion = (question) => {
        this.setState({
            randomQuestion: question
        })
        
    } 

    nextQuestion = () => {
        this.setState({
            currentQuestionIndex: this.state.currentQuestionIndex = this.state.currentQuestionIndex + 1,
            isAnswered: false
        })
        if(this.state.randomQuestions.length < this.state.currentQuestionIndex +1) {
            console.log('game over')
            this.setState({
                isGameFinished: true,
                isGameStarted: false
            })
        }
        console.log(this.state.currentQuestionIndex, this.state.randomQuestions.length)
        this.generateNextQuestion();

        
    }
    startGame = () => {
        this.getQuestions();
        randomQuestions = this.state.quiz.questions.sort(()=> Math.random() -.5);
        console.log(randomQuestions)
        this.setState({
            isGameStarted: true,
            isGameFinished: false,
            randomQuestions: randomQuestions,
        })
        console.log(this.state.randomQuestions)
        this.generateNextQuestion();

    }

    handleSubmit = (e) => {
        e.preventDefault();
            let selectedAnswer = this.state.randomQuestion.answers.find((answer) => {
                return answer.text === this.state.answer
            })
                if(selectedAnswer.correct) {
                    this.setState({
                        isAnswered: true,
                        isCorrect: true,
                        isWrong: false,
                        isSelected: false,
                        score: this.state.score +1
                    })
                } else {    
                    this.setState({
                        isAnswered: true,
                        isWrong: true,
                        isCorrect: false,
                        isSelected: false,
                        score: this.state.score + 0
                    })
                }


    }

    handleChange = (e) => {
        let { value } = e.target;
        this.setState({answer: value, isSelected: true})
        console.log(this.state.answer)
        
    }
   
    componentDidMount() {
        this.getQuestions()
       

    }
    restartGame = () => {
        this.setState({isGameStarted: false, isGameFinished: false, currentQuestionIndex: 0});
     
    }

  
    render() {
     
        let { quiz, randomQuestion, randomQuestions, isGameStarted, isSelected, isAnswered, isCorrect, isWrong, isGameFinished } = this.state;
        

        return (
            <div className="quiz-container">
                  <div className="exit">
                    <NavLink to ="/quiz" className="exit__link"><span className="exit__text">Exit Quiz</span>
                    <i className="fas fa-times-circle fa-2x exit__icon"></i>                                         
                    </NavLink>
                </div>
            <div className="description-container">
              
                <div className="big-image-left">
                    <img src={quiz.img} alt="quiz character" className="big-img-1" />
                </div>

                {
                    isGameStarted || isGameFinished ? null : 
                    <QuizDescription quiz={this.state.quiz}
                                     isGameStarted={this.state.isGameStarted}
                                     startGame={this.startGame}
                                    />
                }
                      
                                    
                    { 
                        isGameStarted && !isGameFinished ? 
                            <div className="question-container">
                                <div>
                                    {
                                        isAnswered ? null : 
                                        <h1 className="question">{randomQuestion.question}</h1>

                                    }
                                <QuizForm handleSubmit={this.handleSubmit}
                                          isAnswered={isAnswered}
                                          handleChange={this.handleChange}
                                          randomQuestion={randomQuestion}
                                          isCorrect={isCorrect}
                                          isWrong={isWrong}
                                          isSelected={isSelected}/>

                            <div className="score-box"><h2></h2> <span className="score score2"></span>
                            </div>
                            {
                                !isGameFinished && isAnswered ?
                                <button className="btn-next" onClick={this.nextQuestion}>Next</button>
                               
                                : null

                            }
                            </div>
                            </div> 


                            : 
                            isGameFinished ?
                            <GameScore score={this.state.score}
                                       randomQuestions={randomQuestions}
                                       restartGame={this.restartGame}
                                       
                            /> 
                            : null
                            }

                          
               
                </div>
                </div>
        )
    }
}



export default ViewQuiz;*/
