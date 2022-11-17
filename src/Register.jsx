import { useState } from 'react'
import { register } from './initFirebase'
import './Forms.css'


const Register = () => {
    const [email, setEmail] = useState('')
    const [pword, setPword] = useState('')

    async function signUp(e) {
        e.preventDefault()
        const res = await register(email, pword)
        console.log(res)
    }

    return ( 
        <form onSubmit={(e) => signUp(e)} className='auth'>
            <h2>Register</h2>
            <label htmlFor='email' className='email-label'>Email</label>
            <input type='text' id='email' onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='password' class='password-label'>Password</label>
            <input type='text' id='password' onChange={(e) => setPword(e.target.value)}/>

            <button type='submit'>Register</button>
        </form>
    )
}

export default Register