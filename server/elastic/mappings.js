const client = require("./connection");

client.indices
  .putMapping({
    index: "movies",
    type: "all",
    body: {
      properties: {
        Year: {
          type: "date",
          format: "yyyy"
        },
        Ratings: {
          type: "nested"
        },
        Metascore: {
          type: "integer"
        },
        imdbRating: {
          type: "float"
        }
      }
    }
  })
  .then(resp => console.log("Mappings successfully created", resp))
  .catch(err => console.log("There was an error creating your mappings", err));
