import { useState, useEffect, useRef } from "react";

import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
// import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import axios from "axios";
import "./AllNews.css";
import TopArticles from "./TopArticles";
import { NEWS_API_KEY } from "./HomeNews";

export default function AllNews() {
  //   const [search, setSearch] = useState(""); // holds current text typed into search bar
  const [searchAxios, setSearchAxios] = useState("Google"); // after button click searchAxios is set to value of search which runs axios call.
  const [searchResults, setSearchResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [favourites, setFavourites] = useState([]);
  const count = useRef(1);
  // console.log(count)
  //   console.log(searchAxios)
  const textChange = (event) => {
    setSearchAxios(event.target.value);
  };

  const enterKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const search = () => {
    // setSearchAxios(search);
    loadNews(1).then((response) => {
      setSearchResults(response.data.articles);
      setPageNumber(1);
    });
  };

  const nextPage = () => {
    count.current += 1;
    setPageNumber(count.current);
  };

  useEffect(() => {
    console.log(favourites);

    loadNews(pageNumber).then((response) =>
      setSearchResults([...searchResults, ...response.data.articles])
    );
  }, [pageNumber]);
  //   console.log(searchResults);
  const loadNews = (page) => {
    return axios.get(
      `https://newsapi.org/v2/everything?q=${searchAxios}&sortby=popularity&page=${page}&apiKey=${NEWS_API_KEY}`
    );
    //   .then((response) => setSearchResults([...searchResults, ...response.data.articles]));
  };

  const favouriteArticle = (e) => {
    console.log("This is a test click from prop button");
    console.log(e.target.id);
    setFavourites(searchResults[e.target.id]);
    console.log(favourites);
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div id="content">
        <div>
          <TextField
            id="text-field"
            label="Search Field"
            type="search"
            variant="outlined"
            onKeyDown={enterKeyPress}
            onChange={textChange}
            value={searchAxios}
          />
        </div>
        <div id="search-button">
          <Button onClick={search} variant="contained">
            Submit
          </Button>
        </div>
      </div>
      <div id="search-results-headline">
        <h1>Search Results</h1>
      </div>

      <div id="articles">
        {searchResults.map((article, index) => (
          <TopArticles
            key={index}
            index={index}
            title={article.title}
            img={article.urlToImage}
            url={article.url}
            onClick={favouriteArticle}
          />
        ))}
      </div>
      <div id="load-more-button">
        <Button onClick={nextPage} variant="contained">
          Load More
        </Button>
        <div id="top-of-page">
          <Button onClick={scrollTop} variant="contained">
            ⬆
          </Button>
        </div>
      </div>
    </div>
  );
}
