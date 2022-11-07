const express = require("express");
// const fs = require("fs/promises");
const collector = require("./genratedata.js");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

/* 
rendering pages based on URL
*/
app.use("/", express.static("./public"));
app.use("/photos", express.static("./public"));
app.use("/home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

/* 
/images endpoint Handling 
can handle images/?folder=first || second
*/
app.get("/images", async (req, res, next) => {
  const photos = await collector(req.query.folder);
  res.status(200).json({
    message: "Sucess",
    response: "ok",
    data: photos,
  });
});

app.use("*", (req, res, next) => {
  res.status(404).json({
    message: "This Route is not defined",
    response: "Fail",
    data: null,
  });
});

app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
});
