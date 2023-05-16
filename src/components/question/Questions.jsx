import React from "react";
import classes from './question.module.css';
import Answers from "../answer/Answers";

export default function Questions({ answers }) {
  return (
    <>
      {answers.map((answer, index) => (
          <div className={classes.question} key={index}>
            <div className={classes.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                {answer.title}
            </div>
            <Answers options={answer.options} input={false}/>
          </div>
        )
      )}
        
    </>
  )
}
