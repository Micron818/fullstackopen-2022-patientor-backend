import express from 'express';
import { patientsRouter } from './routes/patients';
const app = express();
app.use(express.json());

const PORT = 3001;

app.use('/api/patients', patientsRouter);

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.get('/api/diagnoses', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
