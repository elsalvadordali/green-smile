import { useState } from 'react';
import { loginUser } from './initFirebase';
import AuthError from './AuthError';
import './Forms.css';


const Login = ({ goNextPage, updateUserId }) => {
    const [email, setEmail] = useState('');
    const [pword, setPword] = useState('');
    const [errMessage, setErrMessage] = useState(null);

    let monthEntry = {};
    let month = new Date().getMonth().toString();
    let date = new Date().getDate().toString();

    monthEntry[month] = {
        [date]: {
            promptNumber: 0,
            entry: "",
        }
    };

    async function authenticate(e) {
        e.preventDefault();
        const res = await loginUser(email, pword);
        //res is either user object or error object
        if (res.user?.uid) {
            localStorage.setItem('userId', res.user.uid);
            updateUserId(res.user.uid);
        }
        else {
            setErrMessage(res.code)
        }
    }

    return (
        <div>
            <form onSubmit={(e) => authenticate(e)} className='auth'>
                <h2>Login</h2>
                <label htmlFor='email' className='email-label'>Email</label>
                <input type='text' id='email' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='password' className='password-label'>Password</label>
                <input type='password' id='password' onChange={(e) => setPword(e.target.value)} />
                <button type='submit'>Next</button>
            </form>
            {errMessage ? <AuthError errMessage={errMessage} /> : null}
        </div>
    );
};


export default Login;