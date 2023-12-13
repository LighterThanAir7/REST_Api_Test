const express = require('express');
const app = express();
const PORT = 8080;

// Middleware, converting BODY to a JSON
app.use( express.json() )

app.listen(
  PORT,
  () => console.log(`The API is ready on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: '👕',
    size: 'L'
  });
  // run this function when the route is requested
});

// :id - route params, capture dynamic values in the URL
app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: 'We need a logo' })
  }

  // Assuming we do have a valid logo
  res.send({
    tshirt: `👕 with your ${logo} and ID of ${id}`,
  });
});

// GET http:localhost:8080/tshirt