import express from 'express';
import {
  addPatient,
  getNonSensitivePatients,
} from '../services/patientsService';
import { body2Patient } from '../utils';
const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.json(getNonSensitivePatients());
});

patientsRouter.post('/', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const patient = body2Patient(req.body);
  res.json(addPatient(patient));
});

export { patientsRouter };
