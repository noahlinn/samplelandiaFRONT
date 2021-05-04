import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'
const backEnd = process.env.REACT_APP_BACKEND
const SearchPage = () => {
    const [samples, setSamples] = useState([])
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [results, setResults] = useState(false)
    const [freeSounds, setFreeSounds] = useState('maybe')

    const handleSubmit = async (e) => {
        setResults(true)
        e.preventDefault()
        if (freeSounds === true) {
            getFreeSoundSamples()
        }
        else if (freeSounds === false){
            getSampleLandiaSamples()
        }
        else{
           return null
        }
    }

    const getSampleLandiaSamples = () => {
        axios.get(`${backEnd}/userCreatedSamples/search/${query.query}`).then(
            res => setSamples(res.data)
            
        )
    }

    const getFreeSoundSamples = () => {
        axios.post(`${backEnd}/samples/search`, { query, page }).then(
            res => setSamples(res.data.results)
        )
        setPage(+page + 1)
    }

    const onClick = async () => {
        getFreeSoundSamples()
    }

    const newSearch = () => {
        setResults(false)
        setPage(1)
    }

    const setTrue = () => {
        setFreeSounds(true)
    }

    const setFalse = () => {
        setFreeSounds(false)
    }

    return (
        <>
            {results === false &&
                <>
                    <h1>Search</h1>
                    <button onClick={setTrue}>FreeSounds</button>
                    <button onClick={setFalse}>sampleLandia</button>
                    <SearchBar setPage={setPage} query={query} setQuery={setQuery}
                        handleSubmit={handleSubmit} freeSounds={freeSounds} setFreeSounds={setFreeSounds} /> </>}

            {/* {samples.length > 1 && */}
            {results && <> <h1>Results</h1><SearchResults samples={samples}/> 
              {freeSounds && <button onClick={() => { onClick() }}>See More</button>}  
                <button onClick={() => { newSearch() }}>New Search?</button>
            </>}


        </>
    )
}

export default SearchPage