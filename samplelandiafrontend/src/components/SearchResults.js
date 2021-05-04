import { Link } from 'react-router-dom'
const SearchResults = (props) => (
    
    // const allSamples = 
    <div className="search-results">
   { props.samples.map(sample => (
        <Link to={`/sample/${sample.id}`}> <div key={sample.id} className="each-result-div"> 
            <h3 className="link"        >{sample.name}</h3>
        </div>
        </Link>
    ))}
    </div>
    // return (
    //     allSamples
    // )
)

export default SearchResults