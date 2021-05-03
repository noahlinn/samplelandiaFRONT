const SearchBar = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="email" />
            <input value={props.query.query} onChange={(e) => props.setQuery({ ...props.query, query: e.target.value })} />
            {/* <select value = {props.freeSound}>
                <option value = "true" onChange={(e) => props.setFreeSounds({ ...props.freeSound, freeSound: e.target.value })}>FreeSound</option>
                <option value = "false">sampleLandia</option>
            </select> */}
            <input type="submit" value="Search Samples!"/>
            

        </form>
    )
}
export default SearchBar