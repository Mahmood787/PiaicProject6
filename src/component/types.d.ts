export type OverallQuiz = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  };

  export type Q ={
    question: string;
    options: string[];
    answer: string;
}
export type Y ={
  mainQuiz:Q[];
  callbac: ()=>void

}