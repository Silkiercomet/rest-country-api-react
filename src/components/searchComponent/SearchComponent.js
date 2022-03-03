import styles from "./searchcomponent.module.css"
import { useState, useEffect, useRef } from "react"
const SearchComponent = ({countries, allCountries, setCountries}) => {
    const [input, setInput] = useState("")
    const filterOptions = ["All", "Africa", "America", "Asia", "Europea", "Oceania"]
    const selectRef = useRef()
    const regions = {
        "All":() => allCountries,
        "Africa":() => allCountries.filter(country => country.region === "Africa"),
        "America":() => allCountries.filter(country => country.region === "Americas"),
        "Asia":() => allCountries.filter(country => country.region === "Asia"),
        "Europea":() => allCountries.filter(country => country.region === "Europe"),
        "Oceania":() => allCountries.filter(country => country.region === "Oceania")
    }
 
    useEffect(() => {
        if(input !== ""){
            let count = countries.filter(c => c.name.common.toLowerCase().includes(input.toLocaleLowerCase()))
            setCountries(count)
        }else{
            setCountries(regions[selectRef.current.value]?.())
        }
    }, [input])
  return (
    <menu>
        <li>
            <input type="text" className="text" onChange={(e) => setInput(e.target.value)}/>
        </li>
        <li>
            <select name="Filter by Region" ref={selectRef} onChange={(e) => setCountries(regions[e.target.value]?.())}>
                {filterOptions.map((opt,index) => <option value={opt} key={index}>{opt}</option>)}
            </select>
        </li>
    </menu>
  )
}

export default SearchComponent