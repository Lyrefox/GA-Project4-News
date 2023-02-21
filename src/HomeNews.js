import { useState, useEffect } from "react";

import TopArticles from "./TopArticles";
import axios from "axios";

export const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export default function News() {
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=au&apiKey=${NEWS_API_KEY}`
      )
      .then((response) => setTopArticles(response.data.articles));
  }, []);

  console.log(topArticles);
  return (
    <div>
      {topArticles.map((article, index) => (
        <TopArticles key={index}
        title={article.title}
        img={article.urlToImage}
        url={article.url}
        />
      ))}
    </div>
  );
}
