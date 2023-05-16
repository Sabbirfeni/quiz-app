import React from "react";
import Illustration from '../../components/Illustration/Illustration';
import LogInForm from '../../components/logInForm/LogInForm';
export default function LogIn() {
  return (
    <>
        <h1>Login to your account</h1>
        <div className="column">
            <Illustration/>
            <LogInForm/>
        </div>
    </>
  );
}