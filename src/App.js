import "./App.css";
import HomeNews from "./HomeNews.js";
import AllNews from "./AllNews.js";
import Favourites from "./Favourites.js";
import { BrowserRouter, Routes, Route, Link, HashRouter, MemoryRouter } from "react-router-dom";
import Button from "@mui/material/Button";

function App() {
  console.log(window.location.pathname);
  return (
    <BrowserRouter basename="ga-project4-news">
      <div id="global-content">
        <h1 id="main-title">World Wide News App</h1>
        {window.location.pathname === "/" ? null : (
          <Button component={Link} id="home-button" variant="contained" href="." to=".">
            Home
          </Button>
        )}
        {window.location.pathname.includes("#/favourites") ? null : (
          <Button component={Link} id="favourites-button" variant="contained" href="./favourites" to="./favourites">
            Favourites
          </Button>
        )}

      </div>
      <Routes>
        <Route path="/" element={<HomeNews />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <HomeNews />
    // </div>
  );
}

export default App;
