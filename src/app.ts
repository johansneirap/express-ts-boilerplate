import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json()); //middleware to parse req body to json
app.use(cors()); // middleware to handle cors

const PORT = 3000;
app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
