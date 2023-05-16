import React from "react";
import classNames from './Video.module.css';
import image from '../../assets/images/3.jpg';

export default function Video({ title, videoID, noq }) {
  return (
    <div className={classNames.video}>
      <img src={`https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg`} alt={`${title}`} />
      <p>{title}</p>
      <div className={classNames.qmeta}>
          <p>{noq} Questions</p>
          <p>Total Points : {noq * 5}</p>
      </div>
    </div>
  );
}