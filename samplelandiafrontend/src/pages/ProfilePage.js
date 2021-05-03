import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/usercontext'
import UserSamples from '../components/UserSamples'
import axios from 'axios'
const ProfilePage = () => {
    const backEnd = process.env.REACT_APP_BACKEND
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState

    return(
        <div>
            <h2>Hello, {user.name}</h2>
            {console.log(user.id)}
            <UserSamples user={user} setUser={setUser}/>
        </div>
    )
}

export default ProfilePage