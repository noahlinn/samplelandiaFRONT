import axios from 'axios'
import { useContext, useState } from 'react'
import { UserContext } from '../context/usercontext'
import { Redirect } from 'react-router-dom'

const SignUpPage = () => {
    const backEnd = process.env.REACT_APP_BACKEND
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [input, setInput] = useState({})
    const [redirect, setRedirect] = useState(false)

    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${backEnd}/users`, input).then(
            (res) => {
                console.log(res)
                localStorage.setItem('userId', res.data.newUser.id)
                setUser(res.data.newUser)
                setRedirect(true)
            }
        )
    }
    
    return (
        <div>
        { redirect && <Redirect to={`/`} exact />}
        <form className="log-sign-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
            </div>
            <div>
                <input type="submit" value="Sign Up" />
            </div>
        </form>
    </div>
    )
}
export default SignUpPage