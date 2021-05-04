import { Link, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/usercontext'

const NavBar = () => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    return (
        <div>
            <Link to='/'>Home</Link>
            {'  |   '}

            {localStorage.getItem('userId') ? <>
                <Link to='/search'>Search</Link>
                {'  |   '}
                <Link to='/upload'>Upload</Link>
                {'  |   '}
                <Link to='/profile'>Profile</Link>
                {'  |   '}
                <span onClick={() => { localStorage.removeItem('userId'); setUser({}) }}>
                    <Link to='/'>Log Out</Link>
                </span></>
                : <>{'  |   '}
                    <Link to='/login'>Login</Link>
                    {'  |   '}
                    <Link to='/signup'>Sign Up</Link>
                </>}
        </div>

    )
}

export default NavBar