const client = require("./connection");

client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 8000,
      query: {
        match_all: {}
      }
    }
  })
  .then(response => console.log(response.hits.hits.length))
  .catch(error => console.log(error));
