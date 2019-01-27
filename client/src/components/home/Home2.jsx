import React, { useState, useEffect } from "react";
import Hero from "../layout/Hero";
import MovieCard from "./MovieCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Home2 = () => {
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
          <InfiniteScroll 
              dataLength={movies.length} //This is important field to render the next data
              next={() => setCount(count + 12)}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{textAlign: 'center'}}>
                  <b>Yay! You have seen it all</b>
                </p>}
              >
            <div className="columns is-multiline">
           
                {movies.map(movie => {
                  return (
                    <div key={movie._id} className="column is-4">
                      <MovieCard {...movie} />
                    </div>
                  );
                })}
            

              <div className="column is-12 is-centered">
                <button
                  onClick={() => setCount(count + 12)}
                  className="button is-primary is-outlined"
                >
                  Load More
                </button>
              </div>
            </div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home2;
