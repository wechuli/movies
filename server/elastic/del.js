const client = require("./connection");

client.indices
  .delete({
    index: "movies"
  })
  .then(resp => console.log("Index successfully deleted"))
  .catch(err =>
    console.log("An error occurred while deleting the document", err)
  );
