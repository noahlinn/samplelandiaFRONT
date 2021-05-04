import { Link } from 'react-router-dom'
const SearchResults = (props) => (

    // const allSamples = 
    props.samples.map(sample => (
        <Link to={`/sample/${sample.id}`}> <div key={sample.id}> 
            <h3>{sample.name}</h3>
        </div>
        </Link>
    ))
    // return (
    //     allSamples
    // )
)

export default SearchResults