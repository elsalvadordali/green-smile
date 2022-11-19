import { useState } from 'react';
import { register } from './initFirebase';

import AuthError from './AuthError';
import './Forms.css';


const Register = ({ goNextPage, updateUserId, toggleLogin }) => {

    const [email, setEmail] = useState('');
    const [pword, setPword] = useState('');
    const [errMessage, setErrMessage] = useState(null);


    async function signUp(e) {
        e.preventDefault();
        const res = await register(email, pword);
        //res is either user object or error object
        if (res.user?.uid) {
            localStorage.setItem('userId', res.user.uid);
            goNextPage('write');
            updateUserId(res.user.uid);
        }
        else {
            setErrMessage(res.code);
        }
    }

    return (
        <div>

            <form onSubmit={(e) => signUp(e)} className='auth'>
                <h2>Register</h2>
                <label htmlFor='email' className='email-label'>Email</label>
                <input type='text' id='email' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='password' className='password-label'>Password</label>
                <input type='text' id='password' onChange={(e) => setPword(e.target.value)} />

                <button type='submit'>Register</button>
            </form>
            <button className='link' type='button' onClick={() => toggleLogin()} >Login</button>

            {errMessage ? <AuthError errMessage={errMessage} /> : null}
        </div>
    );
};

export default Register;