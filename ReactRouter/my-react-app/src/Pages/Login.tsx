import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

        

    return (
        <>
        <div>Login</div>
        <input 
            type="text" 
            placeholder="Username"
            onChange={(e) => {setUsername(e.target.value)}}/>
        <input 
            type="text" 
            placeholder="Password"
            onChange={(e) => {setPassword(e.target.value)}}/>
        <button>Login</button>
        </>
    )
}

export default Login