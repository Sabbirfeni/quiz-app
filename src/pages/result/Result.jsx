import React from "react";
import Summary from '../../components/summary/Summary';
import Analysis from '../../components/analysis/Analysis';
import Questions from "../../components/question/Questions";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import _ from 'lodash';
export default function Result() {
  const
  { id } = useParams(),
  { loading, error, errorMessage, answers } = useAnswers(id),
  location = useLocation(),
  { qna } = location.state,
  calculateScore = () => {
    let score = 0;
    answers.forEach((question, index1) => {
      let correctIndex = [],
      checkedIndex = [];
      question.options.forEach((option, index2) => {
        option.correct && correctIndex.push(index2);
        if(qna[index1].options[index2].checked) {
          checkedIndex.push(index2)
          option.checked = true
        }
      })
      if(_.isEqual(correctIndex, checkedIndex)) score += 5;
    })
    
    return score;
  }
  const useScore = calculateScore();
  return (
    <>
      {loading ? <Loader/> : error ? <Error errorMessage={errorMessage}/> : answers.length === 0 ? <Error errorMessage={errorMessage}/> : 
      <>
        <Summary score={useScore} noq={answers.length}/>
        <Analysis answers={answers}/>
        {/* <Questions/> */}
      </>}

    </>
  );
}