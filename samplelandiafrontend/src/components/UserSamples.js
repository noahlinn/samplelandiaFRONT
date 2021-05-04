import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/usercontext'
import SearchResults from '../components/SearchResults'

import axios from 'axios'
const UserSamples = (props) => {
    const backEnd = process.env.REACT_APP_BACKEND
    const { userState } = useContext(UserContext)
    const [samples, setSamples] = useState([])


    const getUserSamples = async () => {
        console.log('start')
        let res = await axios.get(`${backEnd}/users/samples`, {
            headers: {
                Authorization: props.user.id
            }
        })
       
        setSamples(res.data)
        console.log(res.data)

    }
    useEffect(() => { getUserSamples() }, [props.user])
    return (
        <div>
            <div>
                <h2>User Samples</h2>
                {samples.length > 0 ? <SearchResults samples={samples}/>
                    : <p>...loading</p>}
            </div>
            
            
        </div>
    )
}

export default UserSamples