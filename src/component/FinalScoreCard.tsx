import React from 'react'
import {Q} from './types'
type Props = {
    mainQuiz: Q[];
    score: number
  callbac: ()=>void
}
const FinalScoreCard:React.FC <Props> = ({mainQuiz,score,callbac}:Props) => {
    return (
        <div className="container">
            <h1>Final Score Card</h1>
            <h4>Total Question Attempted: {mainQuiz.length}  </h4>
            <h4>Correct Answers: {score}</h4>
            <h4>Incorrect Answers: {mainQuiz.length - score}</h4>
            <h4 className="pro-precentage"> Percentage: {score / mainQuiz.length * 100}%</h4>
            <progress id="file" value={score} max={mainQuiz.length}> 32% </progress>
            <button onClick={callbac}>Start Again</button>
        </div>
    )
}

export default FinalScoreCard
