//const allData = require('./convertcsv.json');
const axios = require("axios");
//const testData = require("./staging.json");
const testData = require("./convertcsv.json");
const client = require("./connection");

// async uploadData(){

// }
//console.log(testData.length);

const uploadData = async () => {
  testData.forEach(data => {
    client
      .index({
        index: "moviestoo",
        id: data.imdb_id,
        type: "all",
        ignore: [404],
        body: data
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  });
};

uploadData();
