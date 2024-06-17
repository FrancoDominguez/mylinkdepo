import express from "express";
import path from "path";
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
