const express = require('express');
const app = express();
const router = express.Router();
const errorController=require('./controllers/error')
const port = 3000; // Choose a port number

app.get('/', (req, res) => {
  res.send('Hello, worldd!'); // Send a response to the root route
});
app.use (errorController.get404);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
