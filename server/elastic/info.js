const client = require("./connection");

client
  .count({
    index: "movies",
    type: "all"
  })
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
