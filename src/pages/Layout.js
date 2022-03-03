import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/Navbar";
import SearchComponent from "../components/searchComponent/SearchComponent";

const Layout = () => {

 //set states for the page
 const [countries, setCountries] = useState([])
 const [allCountries, setAllCountries] = useState([])
 const [loading, setLoading] = useState(false)
 const [currentPage, setCurrentPage] = useState(1)
 const [postPerPage] = useState(8)

 // the fetch request for the data
 useEffect(() => {
     const getCountries = async () => {
         setLoading(true)
         const res = await axios.get("https://restcountries.com/v3.1/all")
         setCountries(res.data)
         
         setLoading(false)
         localStorage.setItem('countries', JSON.stringify(res.data))

     }
     window.localStorage.length === 0?
     getCountries():
     setCountries(JSON.parse(localStorage.getItem("countries")))
     setAllCountries(JSON.parse(localStorage.getItem("countries")))
 }, [])

    //data to the serch component
    const searchData = [countries, allCountries, setCountries]
    // data to the router context
    const data = [currentPage, setCurrentPage, countries, postPerPage, loading, setCountries]
    return(
        <>
        <button onClick={() => setCountries([])}>click me</button>
        <Navbar />
        <main>
        <SearchComponent allCountries={allCountries} countries={countries} setCountries={setCountries}/>
            <Outlet context={data}/>
        </main>
        
        </>
    )
}

export default Layout
