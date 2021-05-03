import OwnerButtons from '../components/OwnerButtons'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/usercontext'
const SingleSample = (props) => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    return (
        <>
            <h1>{props.oneSample.name}</h1>

            <p>{props.oneSample.description}</p>
            <AudioPlayer
                autoPlay={false}
                src={props.preview}
            // onPlay={e => console.log("onPlay")}
            // other props here

            />
            <button onClick={props.downloadFile}>Download Sample</button>
            {props.oneSample.userId === user.id && <>
                <OwnerButtons oneSample={props.oneSample}/>
                </>}
        </>
    )
}
export default SingleSample