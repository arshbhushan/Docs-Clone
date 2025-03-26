import express from "express";
//import { get404 } from "./controllers/error.js"; 

const app = express();
const port = 3000; // Choose a port number

app.get("/", (req, res) => {
  res.send("Hello, world!"); // Send a response to the root route
});

//app.use(get404);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
