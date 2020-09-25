import React from 'react'
import { OverallQuiz ,Q} from './types';
const shuffle=(array: string[])=>{return [...array].sort(()=>Math.random() - 0.5)}

export const fetchMianQuiz = async(totalQuestion:number,
    categories:number,
    difficulty:string)=>{
    const url = `https://opentdb.com/api.php?amount=${totalQuestion}&category=${categories}&difficulty=${difficulty}`;
    const {results}= await (await fetch(url)).json()
    console.log(results)
    const response:Q[] = results.map((result:OverallQuiz)=>(
        {
            question: result.question,
            answer: result.correct_answer,
            options: shuffle(result.incorrect_answers.concat(result.correct_answer))
        }
    ))
    console.log(totalQuestion,categories,difficulty)
    return response;
}