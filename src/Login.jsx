import { useState } from 'react'
import { loginUser } from './initFirebase'

const Register = () => {
    const [email, setEmail] = useState('')
    const [pword, setPword] = useState('')

    async function authenticate(e) {
        e.preventDefault()
        const res = await loginUser(email, pword)
        console.log(res)
    }

    return ( 
        <form onSubmit={(e) => authenticate(e)}>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' onChange={(e) => setPword(e.target.value)}/>

            <button type='submit'>Login</button>
            Your email is: {email} {pword}
        </form>
    )
}

export default Register