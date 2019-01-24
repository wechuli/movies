//const allData = require('./convertcsv.json');
const axios = require("axios");
const testData = require("./test.json");
const client = require("./connection");

// async uploadData(){

// }
console.log(testData.length)

const uploadData = () => {
  testData.forEach(data => {
    //
    //console.log(data);
    data.belongs_to_collection = data.belongs_to_collection.replace(/'/g, '"');
    data.genres = data.genres.replace(/'/g, '"');
    data.production_companies = data.production_companies.replace(/'/g, '"');
    data.production_countries = data.production_countries.replace(/'/g, '"');
    data.spoken_languages = data.spoken_languages.replace(/'/g, '"');

    //    data.belongs_to_collection = JSON.parse(data.belongs_to_collection);
    data.genres = JSON.parse(data.genres);
    data.production_companies = JSON.parse(data.production_companies);
    data.production_countries = JSON.parse(data.production_countries);
    data.spoken_languages = JSON.parse(data.spoken_languages);
    axios
      .get(`http://www.omdbapi.com/?i=${data.imdb_id}&apikey=74fd0721`)
      .then(response => {
        console.log(response.data);
        data.poster = response.data.Poster;
        data.categories = response.data.Genre;
        data.actors = response.data.Actors;
        data.director = response.data.Director;
        data.language = response.data.Language;
        data.production = response.data.Production;
       // console.log(data);
        //result.push(response.data);
        client
          .index({
            index: "movies",
            id: data.imdb_id,
            type: "all",
            ignore: [404],
            body: data
          })
          .then(response => console.log(response))
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(`Some kind of error occurred ${error}`);
      });
  });
};

uploadData();

