const client = require("./connection");

client.indices
  .putMapping({
    index: "govpet",
    type: "petitions",
    body: {
      properties: {
        signatures_by_constituency: {
          type: "nested",
          properties: {
            name: {
              type: "keyword"
            }
          }
        },
        signatures_by_country: {
          type: "nested",
          properties: {
            name: {
              type: "keyword"
            }
          }
        }
      }
    }
  })
  .then(response => console.log("Mappings created successfully,", response))
.catch(error => console.log("Error: ", error));
