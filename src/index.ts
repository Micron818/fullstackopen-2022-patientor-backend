import express from 'express';
import patients from './routes/patients';
import cors from 'cors';
import diagnoses from './routes/diagnoses';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use('/api/patients', patients.router);

app.use('/api/diagnoses', diagnoses.router);

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
