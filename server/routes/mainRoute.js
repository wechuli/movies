const express = require("express");
const client = require("../elastic/connection");

const router = express.Router();

router.get("/:count", async (req, res) => {
  let { count } = req.params;
  try {
    if (!count) {
      count = 0;
    }
    const response = await client.search({
      index: "movies",
      body: {
        from: count,
        size: 21,
        query: {
          match_all: {}
        }
      }
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/movie/:movie", async (req, res) => {
  const { movie } = req.params;
  try {
    const response = await client.search({
      index: "movies",
      body: {
        size:30,
        query: {
          multi_match: {
            
            query: movie,
            minimum_should_match:2,
            fields: ["title", "actors", "director"]
          }
        }
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

module.exports = router;
