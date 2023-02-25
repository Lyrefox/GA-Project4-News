import { useState, useEffect, useRef } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "./AllNews.css";
import TopArticles from "./TopArticles";
import { NEWS_API_KEY } from "./HomeNews";




export default function AllNews() {
//   const [search, setSearch] = useState(""); // holds current text typed into search bar
  const [searchAxios, setSearchAxios] = useState("Google"); // after button click searchAxios is set to value of search which runs axios call.
  const [searchResults, setSearchResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const count = useRef(1);
  // console.log(count)
  const textChange = (event) => {
    setSearchAxios(event.target.value)
  };

  const enterKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const search = () => {
    // setSearchAxios(search);
    loadNews(1).then((response) => {
        setSearchResults(response.data.articles)
        setPageNumber(1)
    }
        );
  };

  const nextPage = () => {
    count.current += 1;
    setPageNumber(count.current);
  };

  useEffect(() => {
    // count.current = count.current + 1
    // setPageNumber(count)

    // console.log(count);
    // console.log(pageNumber)
    loadNews(pageNumber).then((response) => setSearchResults([...searchResults, ...response.data.articles]));
  }, [pageNumber]);
  //   console.log(searchResults);
  const loadNews = (page) => {
    return axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchAxios}&sortby=popularity&page=${page}&apiKey=${NEWS_API_KEY}`
      )
    //   .then((response) => setSearchResults([...searchResults, ...response.data.articles]));

  }




  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button id="all-news-button" variant="outlined" href="/">
          Home
        </Button>
      </Stack>
      <div id="content">
        <TextField
          label="Search Field"
          type="search"
          variant="outlined"
          onKeyDown={enterKeyPress}
          onChange={textChange}
          value={""}
        />
        <div id="search-button">
          <Button onClick={search} variant="outlined">
            Submit
          </Button>
        </div>
      </div>
        <div>

        </div>
      {/* {searchResults.map((article, index) => (
          <ArticleSearchResults
          key={index}
          title={article.title}
          img={article.urlToImage}
          url={article.url}
        />
        ))} */}
      <div id="articles">
        {searchResults.map((article, index) => (
          <TopArticles
            key={index}
            title={article.title}
            img={article.urlToImage}
            url={article.url}
          />
          ))}
      </div>
      <div id="next-page-button">
        <Button onClick={nextPage} variant="outlined">
          Next Page
        </Button>
      </div>
    </div>
  );
}
