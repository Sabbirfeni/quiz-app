import React, { useRef, useState } from "react";
import classes from './miniPlayer.module.css';
import ReactPlayer from 'react-player'
import { useLocation } from "react-router-dom";
export default function MiniPlayer({ videoID, title }) {
    const
    playerBtnEle = useRef(),
    [ isPlayerBtnActive, setIsPlayerBtnActive ] = useState(true),
    handlePlayerBtn = () => {
        if(isPlayerBtnActive) {
            playerBtnEle.current.classList.remove(classes.floatingBtn);
            setIsPlayerBtnActive(false)
        } else {
            playerBtnEle.current.classList.add(classes.floatingBtn);
            setIsPlayerBtnActive(true);
        }
    };
  return (
        <>
            <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} ref={playerBtnEle}>
                <span className={`material-icons-outlined ${classes.open}`} onClick={handlePlayerBtn}> play_circle_filled </span>
                <span className={`material-icons-outlined ${classes.close}`} onClick={handlePlayerBtn}> close </span>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoID}`} className={classes.player} width='300px' height='168px' playing={!isPlayerBtnActive} controls/>
                {/* <img src={`https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg`} alt={`${videoID}`} /> */}
                <p>{title}</p>
            </div>
        </>
    );
}
