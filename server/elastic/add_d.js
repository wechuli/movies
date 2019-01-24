const client = require("./connection.js");

const data = {
  adult: "False",
  belongs_to_collection:
    "{'id': 10194, 'name': 'Toy Story Collection', 'poster_path': '/7G9915LfUQ2lVfwMEEhDsn3kT4B.jpg', 'backdrop_path': '/9FBwqcd9IRruEDUrTdcaafOMKUq.jpg'}",
  budget: "30000000",
  genres:
    "[{'id': 16, 'name': 'Animation'}, {'id': 35, 'name': 'Comedy'}, {'id': 10751, 'name': 'Family'}]",
  homepage: "http://toystory.disney.com/toy-story",
  id: "862",
  imdb_id: "tt0114709",
  original_language: "en",
  original_title: "Toy Story",
  overview:
    "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
  popularity: "21.946943",
  poster_path: "/rhIRbceoE9lR4veEXuwCC2wARtG.jpg",
  production_companies: "[{'name': 'Pixar Animation Studios', 'id': 3}]",
  production_countries:
    "[{'iso_3166_1': 'US', 'name': 'United States of America'}]",
  release_date: "1995-10-30",
  revenue: 373554033,
  runtime: 81,
  spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
  status: "Released",
  tagline: "",
  title: "Toy Story",
  video: false,
  vote_average: 7.7,
  vote_count: 5415
};

data.belongs_to_collection = data.belongs_to_collection.replace(/'/g, '"');
data.genres = data.genres.replace(/'/g, '"');
data.production_companies = data.production_companies.replace(/'/g, '"');
data.production_countries = data.production_countries.replace(/'/g, '"');
data.spoken_languages = data.spoken_languages.replace(/'/g, '"');

data.belongs_to_collection = JSON.parse(data.belongs_to_collection);
data.genres = JSON.parse(data.genres);
data.production_companies = JSON.parse(data.production_companies);
data.production_countries = JSON.parse(data.production_countries);
data.spoken_languages = JSON.parse(data.spoken_languages);

console.log(data);

client
  .index({
    index: "movies",
    id: 1,
    type: "all",
    ignore: [404],
    body: data
  })
  .then(response => console.log("Document indexed,", response))
  .catch(err =>
    console.log("An error occured while trying to index your document", err)
  );
