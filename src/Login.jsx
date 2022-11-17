import { useState } from 'react'
import { loginUser } from './initFirebase'
import './Forms.css'

const Login = ({goNextPage, updateUserId}) => {
    const [email, setEmail] = useState('')
    const [pword, setPword] = useState('')

    async function authenticate(e) {
        e.preventDefault()
        const res = await loginUser(email, pword)
        localStorage.setItem('userId', res.user.uid)
        goNextPage('write') //skip register page
        updateUserId(res.user.uid)
    }

    return ( 
        <form onSubmit={(e) => authenticate(e)} className='auth'>
            <h2>Login</h2>
            <label htmlFor='email' className='email-label'>Email</label>
            <input type='text' id='email' onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='password' className='password-label'>Password</label>
            <input type='text' id='password' onChange={(e) => setPword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login