
import './App.css';
import HomeNews from "./HomeNews.js"
import AllNews from "./AllNews.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeNews />} />
      <Route path="/allnews" element={<AllNews />} />
    </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <HomeNews />
    // </div>
  );
}

export default App;
