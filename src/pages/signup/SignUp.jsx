import React from "react";
import Illustration from '../../components/Illustration/Illustration';
import SignUpForm from "../../components/signUpForm/SignUpForm";

export default function SignUp() {
  return (
    <>
        <h1>Create an account</h1>
        <div className="column">
            <Illustration/>
            <SignUpForm/>
        </div>
    </>
  );
}