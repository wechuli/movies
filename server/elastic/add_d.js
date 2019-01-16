const client = require("./connection.js");
const data = require('./sample.json')

client
  .index({
    index: "movies",
    id: 1,
    type: "all",
    ignore: [404],
    body:data
  })
  .then(response => console.log("Document indexed,", response))
  .catch(err =>
    console.log("An error occured while trying to index your document", err)
);