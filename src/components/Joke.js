import React from "react";

import Button from "./button.js";
import "./Joke.css";

const Joke = () => {
  const [Joke, setJoke] = React.useState("");

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };
  return (
    <div className="Piadoca">
      <Button callApi={fetchApi} />
      <section className="Merda">
        <p>{Joke}</p>
      </section>
    </div>
  );
};

export default Joke;
