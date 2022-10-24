const express = require("express");
const fs = require("fs/promises");
const app = express();
const PORT = process.env.PORT || 8000;
const data = {
  content: [
    {
      name: "learning",
      pfad: "./images/Learning.avif",
      modified: "22/10/2022",
    },
    {
      name: "learning",
      pfad: "./images/Learning.avif",
      modified: "22/10/2022",
    },
    {
      name: "learning",
      pfad: "./images/Learning.avif",
      modified: "22/10/2022",
    },
    {
      name: "learning",
      pfad: "./images/Learning.avif",
      modified: "22/10/2022",
    },
    {
      name: "learning",
      pfad: "./images/Learning.avif",
      modified: "22/10/2022",
    },
  ],
};

app.use((req, res, next) => {
  res.writeHead(200, "OK", {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET, POST",
    "Access-Control-Allow-Origin": "*",
  });
  next();
});

app.get("/photos", (req, res, next) => {
  console.log(req.url);
  res.end(JSON.stringify(data));
});

app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
});
