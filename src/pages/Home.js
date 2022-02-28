import {useState, useEffect} from "react"
import axios from "axios"
import Pagination from "../components/Pagination"
import Countries from "../components/Countries"
const Home = () => {
const [countries, setCountries] = useState([])
const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const [postPerPage, setPostPerPage] = useState(8)

useEffect(() => {
    const getCountries = async () => {
        setLoading(true)
        const res = await axios.get("https://restcountries.com/v3.1/all")
        setCountries(res.data)
        setLoading(false)
    }
    getCountries()
}, [])

const paginate = (pageNumber) => setCurrentPage(pageNumber)

//get current posts
const indexOfLastPost = currentPage * postPerPage;
const indexOfFirstPost = indexOfLastPost - postPerPage
const currentCountries = countries.slice(indexOfFirstPost, indexOfLastPost)


    return(
        <>
        <Countries currentCountries={currentCountries} loading={loading}/>
        <Pagination postsPerPage={postPerPage} totalPosts={countries.length} paginate={paginate}/>
        </>
    )
}

export default Home