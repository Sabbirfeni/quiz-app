import React, { useState } from "react";
import Form from "../form/Form";
import TextInput from "../InputFields/TextInput/TextInput";
import Button from "../Button/Button";
import Checkbox from "../InputFields/chackbox/Checkbox";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
    const { login } = useAuth();
   
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState(''); 
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    async function handleLogIn(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/');
        } catch(err) {
            setError('Failed to login!');
            setLoading(false);
        }
    }

    return (
            <Form style={{ height: '350px'}} onSubmit={handleLogIn}>
                <TextInput icon='alternate_email' type='email' value={ email } onChange={(e) => setEmail(e.target.value)} placeholder='email' required/>
                <TextInput icon='lock' type='password' value={ password } onChange={(e) => setPassword(e.target.value)} placeholder='password' required/>
                {error && <p className="error">{ error }</p> }
                <Button disabled={loading} type='submit'><span>{loading ? 'Loading' : 'Log In'}</span></Button>
                <div className="info">
                    Don't have any account? <Link to='/signup'>Sign Up</Link> instead.
                </div>
            </Form>
        );
}
