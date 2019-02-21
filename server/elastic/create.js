const client = require("./connection");

client.indices
  .create({
    index: "windturbine"
  })
  .then(response => console.log("Index successfully created", response))
  .catch(error =>
    console.log("Oops, an error ocurred while creating the index", error)
  );
