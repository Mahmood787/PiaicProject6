import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './component/dashboard';
import Header from './component/Header';
import QuizPage from './component/QuizPage';
import {fetchMianQuiz} from './component/services'
import {Q} from './component/types'
import firebase from './firebase'

function App() {
  const messaging= firebase.messaging();
  messaging.requestPermission().then(()=>{
    return messaging.getToken()
  }).then((token)=>{
    console.log("token", token)
  })
  const [mainQuiz, setMainQuiz]=useState <Q[]>([])
  const [pram, setPram]=useState([])
  const [load, setLoad]= useState(false)
  const {totalQuestion, categories, difficulty}:any=pram
  useEffect(()=>{
    async function fetching(){
      const mainQuizOb= await fetchMianQuiz(+totalQuestion,+categories,difficulty);
      console.log(mainQuizOb)
      setMainQuiz(mainQuizOb); 
    }
    fetching();
  }, [totalQuestion, categories, difficulty])   

function callback(e,parameters){
 setPram(parameters)
 setLoad(true)
}
function reStart(){
  setLoad(false)
}
console.log(pram, mainQuiz)
  return (
    <div className="App">
      <Header/>
      {!load ? ( <Dashboard callback={callback}/>):null}
     
      {load && mainQuiz.length ? (<QuizPage 
        mainQuiz={mainQuiz}
        callbac={reStart}
      />): null}
      
    </div>
  );
}
export default App;
