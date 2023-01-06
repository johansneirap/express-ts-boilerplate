import express from 'express';
const app = express();
app.use(express.json()); //middleware to parse req body to json

const PORT = 3000;
app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
