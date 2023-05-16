import React, { useEffect, useReducer, useState } from "react"
import Answers from "../../components/answer/Answers";
import ProgressBar from "../../components/progressBar/ProgressBar";
import MiniPlayer from "../../components/miniPlayer/MiniPlayer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import _ from 'lodash';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { useAuth } from '../../context/AuthContext';
import { getDatabase, ref, set } from "firebase/database";

const 
initState = null,
reducer = (state, action) => {
  switch(action.type) {
    case 'questions':
      action.value.forEach(question => {
        question.options.forEach(option => {
          option.checked = false;
        });
      });
    return action.value;

    case 'answer':
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked = action.value
      return questions;
    default:
      return state;
  }
}
export default function Quiz({ text }) {
  const 
  location = useLocation(),
  { videoTitle } = location.state,
  { id } = useParams(),
  { loading, error, errorMessage, questions } = useQuestions(id),
  [ currentQuestion, setCurrentQuestion ] = useState(0),
  [ qna, dispatch ] = useReducer(reducer, initState),
  { currentUser } = useAuth(),
  navigate = useNavigate(),
  handleAnswerChange = (e, index) => {
    dispatch({
      type: 'answer',
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked
    })
  },
  handleNextQuestion = () => {
    currentQuestion < questions.length - 1 && setCurrentQuestion(prev => prev + 1)
  },
  handlePrevQuestion = () => {
    currentQuestion > 0 && setCurrentQuestion(prev => prev - 1)
  },
  handleSubmit = async () => {
    const 
    { uid } = currentUser,
    db = getDatabase(),
    resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna
    })
    navigate(`/result/${id}`, { state: {qna} });

  },
  percentage = (currentQuestion + 1) / questions.length * 100;

  useEffect(() => {
    dispatch({
      type: 'questions',
      value: questions
    })
  }, [questions]);
  return (
    <>
        {/* {loading ? <Loader/> : <h1>{qna[currentQuestion].title}</h1>}  */}
        {/* <h1>{qna[currentQuestion].title}</h1> */}
        {loading ? <Loader/> : error ? <Error errorMessage={errorMessage}/> : qna.length === 0 ? <Error errorMessage={'No Data'}/> : (
          <>
            <h1>{qna[currentQuestion].title}</h1> 
            <Answers options={qna[currentQuestion].options} handleAnswer={handleAnswerChange} input={true}/>
            <ProgressBar next={handleNextQuestion} prev={handlePrevQuestion} percentage={percentage} handleSubmit={handleSubmit}/>
            <MiniPlayer videoID={id} title={videoTitle}/>
          </>
        )}

    </>
  );
}
