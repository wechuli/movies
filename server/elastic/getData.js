const client = require("./connection");

client
  .search({
    index: "movies",
    type: "all",
    body: {
      query: {
        match_all: {}
      }
    }
  })
  .then(response => console.log(response.hits.hits))
  .catch(error => console.log(error));
