import express from 'express';
import { patientsRouter } from './routes/patients';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use('/api/patients', patientsRouter);

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.get('/api/diagnoses', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
