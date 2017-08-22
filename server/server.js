const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3001);

app.get('/api/ok', (req, res) => {
  res.status(200).send('OK');
});

app.listen(app.get('port'), () => {
  console.log(`Server run: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});