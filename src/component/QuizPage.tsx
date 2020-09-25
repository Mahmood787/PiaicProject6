import React,{useState} from 'react'
import FinalScoreCard from './FinalScoreCard';
import {Q,Y} from './types'
const QuizPage: React.FC <Y>=({mainQuiz,callbac}:Y) =>{
    //Our States
    let [num, setNum]=useState(0);
    const [selectedAns, setSelectedAns]=useState("")
    let [score, setScore]= useState(0)
    const [quizComplete, setComplete]= useState(false)
   //Our Functions
    function selection(e){
        setSelectedAns(e.target.value)
    }
    function submitAns(e){
        e.preventDefault()
        if(selectedAns===mainQuiz[num].answer){
            setScore(++score)
        }
        if(num !== mainQuiz.length-1){
            setNum(++num) ;
        }else{
            setComplete(true)
            setNum(0);
            
        }
            
            }
    
    return (
        <div className="container">
            {!quizComplete ? (
            <div className="box">
                <div className="heads">
                    <h5> Question Number : {num+1}</h5>
                    <progress id="file" value={num} max={mainQuiz.length}></progress>
                    <p> Score: {score}/{mainQuiz.length}</p>
                </div>
                <div className="qOptions">
                <p>Q {num+1}: {mainQuiz[num].question}</p>
                <div>
                    <form onSubmit={submitAns} >
                        {mainQuiz[num].options.map((option)=>(
                        <div className="optionsSub">
                            <input type="button" onClick={selection}
                                name="option"
                                required
                                value={option}
                                
                            />    
                        </div>
                            ))}
                        <input type="submit" className="button buttonSub" />
                    </form>
                </div>
                {console.log(selectedAns,mainQuiz[num].answer)}
            </div>
        
            </div>
        ):null}
        {console.log(mainQuiz.length, num, "hihi")}
        <div>
            {quizComplete ? (
                <FinalScoreCard 
                mainQuiz={mainQuiz} 
                score={score}
                callbac={callbac}
                />
            ): null}
        </div>
        </div>

    )
  }

export default QuizPage
