import express from 'express';
import patientsService from '../services/patientsService';
import { body2Patient } from '../utils';
const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.json(patientsService.getNonSensitivePatients());
});

patientsRouter.get('/:id', (req, res) => {
  res.json(patientsService.findById(req.params.id));
});

patientsRouter.post('/', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const patient = body2Patient(req.body);
  res.json(patientsService.addPatient(patient));
});

export { patientsRouter };
