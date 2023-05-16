import React from "react";
import classes from './Illustration.module.css';
import illustration from '../../assets/images/undraw_Web_developer_re_h7ie.png'
export default function Illustration() {
  return (
    <>
        <div className={classes.illustration}>
            <img src={illustration} alt="Signup" />
        </div>
    </>

  );
}