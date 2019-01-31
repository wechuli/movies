import React, { useState, useEffect } from "react";
import Hero from "../layout/Hero";
import MovieCard from "./MovieCard";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [cleared, setCleared] = useState(false);
  const changeTerm = e => {
    if (e.target.value) {
      setSearchTerm(e.target.value);
    } else {
      setMovies([]);
      setSearchTerm(e.target.value);
      setCleared(!cleared);
      setCount(0);
    }
  };
  useEffect(
    () => {
      axios
        .get(`http://127.0.0.1:8080/movies/${count}`)
        .then(response => {
          const data = response.data.hits.hits;
          setMovies(movies.concat(data));
          console.log(data);
        })
        .catch(error => console.log(error));
    },
    [count, cleared]
  );
  useEffect(
    () => {
      axios
        .get(`http://127.0.0.1:8080/movies/movie/${searchTerm}`)
        .then(response => {
          const data = response.data.hits.hits;
          setMovies(data);
          console.log(data);
        })
        .catch(error => console.log(error));
    },
    [searchTerm]
  );
  return (
    <React.Fragment>
      <Hero />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <label className="subtitle m-b-sm m-t-md" htmlFor="search">
              Search Gallery
            </label>
            <input
              value={searchTerm}
              onChange={changeTerm}
              type="text"
              className="input"
              placeholder="Search movie,actors,directorsloca"
            />
            <button className="button is-dark m-t-sm">Search</button>
          </div>
        </div>

        <div className="columns">
          <div className="column is-one-quarter">
            <code>Filter</code>
          </div>
          <div className="column">
            <div className="columns is-multiline">
              {movies.map(movie => {
                return (
                  <div key={movie._id} className="column is-4">
                    <MovieCard {...movie} />
                  </div>
                );
              })}
              {!searchTerm ? (
                <div className="column is-12 is-centered">
                  <button
                    onClick={() => setCount(count + 21)}
                    className="button is-primary is-outlined"
                  >
                    Load More
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
