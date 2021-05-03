import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/usercontext'
import SearchResults from '../components/SearchResults'
import axios from 'axios'
const UserSamples = (props) => {
    const backEnd = process.env.REACT_APP_BACKEND
    const { userState } = useContext(UserContext)
    const [samples, setSamples] = useState(null)

    
    const getUserSamples = async () => {
        
        let res = await axios.get(`${backEnd}/users/samples`, {
            headers: {
                Authorization: props.user.id
            }
        })
        setSamples(res.data)
        console.log(res.data)

    }
    useEffect(() => {getUserSamples()}, [])
    return (
        <div>
            <h2>User Samples</h2>
            {samples ? <SearchResults samples={samples} location = "usersample"/>
            : <p>...loading</p>}
        </div>
    )
}

export default UserSamples