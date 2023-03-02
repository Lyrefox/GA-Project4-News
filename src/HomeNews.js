import { useState, useEffect } from "react";
import TopArticles from "./TopArticles";
import axios from "axios";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount, setStateValue } from './features/counter/counterSlice'
import { addItem } from "./actions"

import "./HomeNews.css";

export const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export default function News() {
  const [topArticles, setTopArticles] = useState([]);
  const [region, setRegion] = useState(["au"]);
  const [favourite, setFavourite] = useState([])

//   const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  useEffect(() => {
    //   dispatch(setStateValue(localStorage.getItem("favourites")))
    //   console.log(count)

    // console.log(Object.keys(items.List)[0])

    // for (n in items.List) {
    //     console.log(n)
    // }
    // for (b of items) {
    //     console.log(b)
    // }
    // items.map((item) => (
    //     console.log(item)
    // ))
      axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${region}&apiKey=${NEWS_API_KEY}`
      )
      .then((response) => setTopArticles(response.data.articles));
  }, [region]);

  //   console.log(topArticles);

  const changeRegion = (event) => {
    setRegion(event.target.value);
    // console.log(region)
  };
  const favouriteArticle = (e) => {
    // console.log("This is from HomeNews")
    // console.log(e.target.id)
    // dispatch(incrementByAmount([topArticles[e.target.id]]))
    // console.log(topArticles[e.target.id])
    // const stringify = JSON.stringify(topArticles[e.target.id])
    // localStorage.setItem("favourites", )
    // setFavourite(count)
    dispatch(addItem(topArticles[e.target.id]))
    // localStorage.setItem("favourites", count)
    // console.log(count)
  }



  return (
    <div id="home-main-content">
        {/* <Button onClick={() => {
            dispatch(incrementByAmount(["Test"]))
            console.log(count)
            }}>
            Increment
        </Button>
        <h1>{count}</h1>
        <Button onClick={() => dispatch(decrement())}>
            Decrement
        </Button> */}
      <h1 id="main-title">World Wide News App</h1>
      <div id="all-news-button">
        <Stack spacing={2} direction="row">
          <Button id="all-news-button" variant="outlined" href="/allnews">
            Search News
          </Button>
          <Button id="favourites-button" variant="outlined" href="/favourites">
            Favourites
          </Button>
        </Stack>
      </div>
      <div id="dropdown-menu">
          <FormControl>
            <InputLabel id="country-selection">Region</InputLabel>
            <Select
              labelId="region-selection-label"
              id="region-selection"
              value={region}
              label="Region"
              onChange={changeRegion}
            >
              <MenuItem value="ar">Argentina</MenuItem>
              <MenuItem value="ru">Russia</MenuItem>
              <MenuItem value="au">Australia</MenuItem>
              <MenuItem value="ae">United Arab Emirates</MenuItem>
              <MenuItem value="us">United States</MenuItem>
            </Select>
          </FormControl>
      </div>
      <div>
        <h2>Top Headlines</h2>
      </div>
      <div id="articles">
        {topArticles.map((article, index) => (
          <TopArticles
            key={index}
            title={article.title}
            img={article.urlToImage}
            url={article.url}
            onClick={favouriteArticle}
            description={article.description}
            index={index}
          />
        ))}

      </div>
    </div>
  );
}
