import React, { useState } from "react";
import Form from "../form/Form";
import TextInput from "../InputFields/TextInput/TextInput";
import Button from "../Button/Button";
import Checkbox from "../InputFields/chackbox/Checkbox";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
    const { signup } = useAuth();
    const [ userName, setUserName ] = useState(''); 
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState(''); 
    const [ confirmPassword, setConfirmPassword ] = useState(''); 
    const [ agree, setAgree ] = useState('');
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    async function handleSignUp(e) {
        e.preventDefault();

        // Password matching validation
        if(password !== confirmPassword) {
            return setError("Password don't match");
        }

        try {
            setError('');
            setLoading(true);
            signup(email, password, userName);
            navigate('/');
        } catch(err) {
            setError('Failed to create an account!');
            setLoading(false);
        }
    }

    return (
            <Form style={{ height: '500px'}} onSubmit={handleSignUp}>
                <TextInput icon='person' type='text' value={ userName } onChange={(e) => setUserName(e.target.value)} placeholder='name' required/>
                <TextInput icon='alternate_email' type='email' value={ email } onChange={(e) => setEmail(e.target.value)} placeholder='email' required/>
                <TextInput icon='lock' type='password' value={ password } onChange={(e) => setPassword(e.target.value)} placeholder='password' required/>
                <TextInput icon='lock' type='password' value={ confirmPassword } onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password' required/>
                {error && <p className="error">{ error }</p> }
                <Checkbox text='I agree to the Terms & Conditions' value={ agree } onChange={(e) => setAgree(e.target.value)} required/>
                <Button disabled={loading} type='submit'><span>{loading ? 'Loading' : 'Sign Up'}</span></Button>
                <div className="info">
                    Already have an account? <Link to='/login'>Login</Link> instead.
                </div>
            </Form>
        );
}
