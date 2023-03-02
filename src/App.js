
import './App.css';
import HomeNews from "./HomeNews.js"
import AllNews from "./AllNews.js"
import Favourites from "./Favourites.js";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
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
