import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "./AllNews.css";
import ArticleSearchResults from "./ArticleSearchResults.js";
import { NEWS_API_KEY } from "./HomeNews";

export default function AllNews() {
  const [search, setSearch] = useState("");
  const [searchAxios, setSearchAxios] = useState("Google");
  const [searchResults, setSearchResults] = useState([]);

  const textChange = (event) => {
    setSearch(event.target.value);
  };

  const enterKeyPress = (event) => {
    if (event.key === "Enter") {
      changeState();
    }
  };

  const changeState = () => {
    setSearchAxios(search);
  };

  useEffect(() => {
    console.log(searchAxios);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchAxios}&apiKey=${NEWS_API_KEY}`
      )
      .then((response) => setSearchResults(response.data.articles));
  }, [searchAxios]);
  console.log(searchResults);
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
        />
        <div id="search-button">
          <Button onClick={changeState} variant="outlined">
            Submit
          </Button>
        </div>
      </div>

        {searchResults.map((article, index) => (
          <ArticleSearchResults
          key={index}
          title={article.title}
          img={article.urlToImage}
          url={article.url}
        />
        ))}
    </div>
  );
}
