import { useOutletContext } from "react-router-dom";
import Pagination from "../components/Pagination";
import Countries from "../components/Countries";
const Home = () => {
  const [currentPage, setCurrentPage, countries, postPerPage, loading] =
    useOutletContext();

  //get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentCountries = countries.slice(indexOfFirstPost, indexOfLastPost);

  //count pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Countries currentCountries={currentCountries} loading={loading} />
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={countries.length}
        paginate={paginate}
      />
    </>
  );
};

export default Home;
