import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/usercontext'
import UserSamples from '../components/UserSamples'
import FavoriteSamples from '../components/FavoriteSamples'
import axios from 'axios'
const ProfilePage = (props) => {
    const backEnd = process.env.REACT_APP_BACKEND
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState

    return (
        <div className="profile-div">
            <div>
                <h1>Hello, {user.name}</h1>
                {console.log(user.id)}
                <UserSamples user={user} setUser={setUser} />
            </div>
            <div>
                <h2>Favorite Samples</h2>
                {/* {props.favLandia.length > 0 ?  */}
                <FavoriteSamples favSamples={props.favSamples}/>
                    {/* : <p>...loading</p>} */}
            </div>
        </div>
    )
}

export default ProfilePage