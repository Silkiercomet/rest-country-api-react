const Countries = ({currentCountries, loading}) => {
    if(loading) return <h1>...loading</h1>
    return(
        <main>
            <ul className="grid">
            {currentCountries.map((country) => <li key={country.name.common} className="card">
                <h1>{country.name.common}</h1>
            </li>) }
            </ul>
        </main>
    )
}

export default Countries