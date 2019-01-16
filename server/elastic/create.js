const client = require("./connection");

client.indices
  .create({
    index: "movies"
  })
  .then(response => console.log("Index successfully created", response))
  .catch(error =>
    console.log("Oops, an error ocurred while creating the index", error)
  );
