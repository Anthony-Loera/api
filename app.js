const express = require("express");
const app = express();
const port = 80;
const axios = require("axios");
var cors = require("cors");

app.use(cors());

app.get("/posts", async (request, response) => {
  try {
    const results = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    response.json(results.data);
  } catch (error) {
    console.log(error.repsonse);
  }
});

app.get("/posts/:postId", async (request, response) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${request.params.postId}`
  );
  response.json(results.data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
