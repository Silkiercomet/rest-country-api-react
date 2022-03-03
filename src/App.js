import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home"

// import DatailsPage from "./pages/DetailsPage"
import './App.css';

function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        
          <Routes>

              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path={"details"} element={<DetailsPage />} /> */}
                <Route path="*" element={<h1>not found 404</h1>} />
              </Route>

          </Routes>
        
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
