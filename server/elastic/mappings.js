const client = require("./connection");

client.indices
  .putMapping({
    index: "movies",
    type: "all",
    body: {
      properties: {
        production_countries: {
          type: "nested"
        },
        spoken_languages: {
          type: "nested"
        },
        budget: {
          type: "float"
        },
        revenue: {
          type: "float"
        },
        belongs_to_collection: {
          type: "nested"
        },
        production_companies: {
          type: "nested"
        },
        genres: {
          type: "nested"
        },

        vote_count: {
          type: "integer"
        },
        vote_average: {
          type: "float"
        },
        popularity: {
          type: "float"
        },
        runtime: {
          type: "float"
        },
        release_date: {
          type: "date",
          format: "yyyy-MM-dd"
        }
      }
    }
  })
  .then(resp => console.log("Mappings successfully created", resp))
  .catch(err => console.log("There was an error creating your mappings", err));
