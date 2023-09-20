import React, { useState, useEffect } from "react";
import axios from "axios";

export default function News(props) {
  const [news, setNews] = useState([]);
  const apiKey = "0a88c3de8ff949a5923a595decaa6b61";

  // Function to format the date string
  const formatDate = (dateString) => {
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("cs-CZ", options);
  };

  // Function to fetch news data
  const fetchNewsData = () => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=cz&apiKey=${apiKey}`)
      .then((response) => {
        const articles = response.data.articles.map((article) => ({
          ...article,
          publishedAt: formatDate(article.publishedAt),
        }));
        setNews(articles);
        console.log(articles)
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  // Fetch news data when the component mounts
  useEffect(() => {
    fetchNewsData(); // Added fetchNewsData to the dependency array
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={props.darkMode ? "dark-container" : "container"}>
      <div className="circle-container">
        <div
          className={`circle ${
            props.activeComponent === "Main" ? "circle-clicked" : ""
          }`}
          onClick={() => props.handleComponentChange("Main")}
        >
          <p>Home</p>
        </div>
        <div
          className={`circle ${
            props.activeComponent === "About" ? "circle-clicked" : ""
          }`}
          onClick={() => props.handleComponentChange("About")}
        >
          <p>About</p>
        </div>
        <div
          className={`circle ${
            props.activeComponent === "News" ? "circle-clicked" : ""
          }`}
          onClick={() => props.handleComponentChange("News")}
        >
          <p>News</p>
        </div>
        <div
          className={`circle ${
            props.activeComponent === "Analytics" ? "circle-clicked" : ""
          }`}
          onClick={() => props.handleComponentChange("Analytics")}
        >
          <p>Analytics</p>
        </div>
      </div>

      <div className={props.darkMode ? "dark-news-container" : "news-container"}>
        <h1>TOP 20 News from Czech News API - https://newsapi.org</h1>
        {/* Reload button */}
        <button className="reload-button" onClick={fetchNewsData}>Reload</button>
        {news.map((article, index) => (
          <div className="note" key={index}>
            <hr />
            <div className="title">
              <h2>Author: {article.author}</h2>
            </div>
            <h3>{article.title}</h3>
            <a href={article.url}>URL TO THIS ARTICLE</a>
            <div>
              <p>Published: {article.publishedAt}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}