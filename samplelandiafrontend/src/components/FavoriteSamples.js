

import { Link } from 'react-router-dom'

const FavoriteSamples = (props) => {


    // const test = () => (
    //     props.favSamples.map((sample) => (
    //         <Link to={`/sample/${sample.sampleId}`}> <div key={sample.sampleId}> 
    //         <h3>{sample.sampleName}</h3>
    //         </div></Link>
    //     ))
    // )

    return (
        props.favSamples.map((sample) => (
            <Link to={`/sample/${sample.sampleId}`}> <div key={sample.sampleId}> 
            <h3>{sample.sampleName}</h3>
            </div></Link>
        ))
    )
}
export default FavoriteSamples