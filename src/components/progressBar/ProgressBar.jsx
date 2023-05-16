import React, { useRef, useState } from "react";
import classes from './progressBar.module.css';
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function ProgressBar({ next, prev, handleSubmit, percentage }) {
    const
    tooltip = useRef(),
    [ isTooltipActive, setIsTooltipActive ] = useState(false),
    handleTooltip = () => {
        if (isTooltipActive) {
            setIsTooltipActive(false);
            tooltip.current.style.display = 'block';
            tooltip.current.style.left = `calc(${percentage}% - 65px)`
        } else {
            setIsTooltipActive(true);
            tooltip.current.style.display = 'none'
        }
    }
  return (
    <div className={classes.progressBar}>
        <div className={classes.backButton} onClick={prev}>
            <span className='material-icons-outlined'> arrow_back </span>
        </div>
        <div className={classes.rangeArea}>
            <div className={classes.tooltip} ref={tooltip}>{percentage}% Complete!</div>
            {/* <h1>{percentage}</h1> */}
            <div className={classes.rangeBody}>
                <div className={classes.progress} style={{width: `${percentage}%`}} onMouseOver={handleTooltip} onMouseOut={handleTooltip}></div>
            </div>
        </div>
        <Button className={classes.next} onClick={percentage === 100 ? handleSubmit : next}>
            {percentage === 100 ? 
            (<>
                <span>Submit Quiz</span>
                <span className="material-icons">check</span>
            </>)
            : (<>
                <span>Next Question</span>
                <span className='material-icons-outlined'> arrow_forward </span>
            </>)}
            


        </Button>
    </div>
  );
}


