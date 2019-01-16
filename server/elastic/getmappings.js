const client = require("./connection");

client.indices
  .getMapping({
    index: "movies",
    type: "all"
  })
  .then(data => console.log(data.movies.mappings.all.properties))
  .catch(err => console.log(err));
