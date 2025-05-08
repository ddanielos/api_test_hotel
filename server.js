const express = require('express');
const cors = require('cors');
const hoteles = require('./hoteles.json');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/api/hoteles', (req, res) => {
  res.json(hoteles);
});

app.get('/', (req, res) => {
  res.send('API de Hoteles funcionando. GET /api/hoteles');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
