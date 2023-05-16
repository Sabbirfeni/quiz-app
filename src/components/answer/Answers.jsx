import React, { Fragment } from "react";
import Checkbox from "../InputFields/chackbox/Checkbox";
import classes from '../answer/Answer.module.css';

export default function Answers({ options = [], handleAnswer, input }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index} >
          {input ?
            <Checkbox className={classes.answer} onChange={e => handleAnswer(e, index)} value={index} checked={option.checked} text={option.title}/> :
            <Checkbox className={`${classes.answer} ${option.correct ? classes.correct : option.checked ? classes.wrong : null}`} defaultChecked={option.checked} text={option.title} disabled/>
          }
        </Fragment>
        
      ))}

    </div>
  );
}