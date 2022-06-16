import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

// Styles
import "./JokeStyles.scss";

// React bootstrap components
import { Button } from "react-bootstrap";

function Joke({ match }) {
  const myKey = useLocation().key;

  const search = useLocation().search;
  const category = new URLSearchParams(search).get("category");

  const [state, setState] = useState({ joke: "" });

  useEffect(() => {
    fetchData();
  }, [category, myKey]);

  const fetchData = async () => {
    const url = "https://api.chucknorris.io/jokes/random";
    const joke = await axios.get(
      category ? url + `?category=${category}` : url
    );
    setState({
      ...state,
      joke: joke.data.value,
    });
  };

  return (
    <div>
      <h2 className="joke-title">
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "Random"}
        Joke
      </h2>
      <div className="joke-container">
        <blockquote>
          <p className="joke-value"><i className="fa-solid fa-person-rifle"></i> {state.joke} </p>
        </blockquote>
        <Button variant="dark">
          <Link to="/random">
            Random Joke
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Joke;
