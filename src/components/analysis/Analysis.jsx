import React from "react";
import classes from './analysis.module.css';
import Questions from "../question/Questions";

export default function Analysis({ answers }) {
  return (
    
    <div className={classes.analysis}>
    <h1>Question Analysis</h1>
    <Questions answers={answers}/>

    {/* <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <div class={classes.answers}>
        
        <label className={classes.answer} for="option1"> A New Hope 1 </label>

     
        <label className={classes.answer} for="option2"> A New Hope 1 </label>

        
        <label className={classes.answer} for="option3"> A New Hope 1 </label>

    
        <label className={`${classes.answer} ${classes.wrong}`} for="option4"> <span>A New Hope 1</span><span>Your answer</span> </label>

     
        <label className={classes.answer} for="option5"> A New Hope 1 </label>

    
        <label className={classes.answer} for="option6"> A New Hope 1 </label>

      
        <label className={`${classes.answer} ${classes.correct}`} for="option7"> <span>A New Hope 1</span><span>Correct answer</span> </label>

 
        <label className={classes.answer} for="option8"> A New Hope 1 </label>

   
        <label className={classes.answer} for="option9"> A New Hope 1 </label>

    
        <label className={classes.answer} for="option10"> A New Hope 1 </label>
      </div>
    </div>

    <div className="question">
      <div className="qtitle">
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <div className="answers">
    
        <label className={classes.answer} for="option1"> A New Hope 1 </label>


        <label className={classes.answer} for="option2"> A New Hope 1 </label>


        <label className={classes.answer} for="option3"> A New Hope 1 </label>


        <label className={`${classes.answer} ${classes.wrong}`} for="option4"> <span>A New Hope 1</span><span>Your answer</span> </label>


        <label className={classes.answer} for="option5"> A New Hope 1 </label>

   
        <label className={classes.answer} for="option6"> A New Hope 1 </label>


        <label className={`${classes.answer} ${classes.correct}`} for="option7"> <span>A New Hope 1</span><span>Correct answer</span> </label>

 
        <label className={classes.answer} for="option8"> A New Hope 1 </label>


        <label className={classes.answer} for="option9"> A New Hope 1 </label>


        <label className={classes.answer} for="option10"> A New Hope 1 </label>
      </div>
    </div> */}
  </div>
  );
}
