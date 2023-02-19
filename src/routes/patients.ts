import express from 'express';
import { body } from 'express-validator';
import patientsService from '../services/patientsService';
import { body2Patient, entriesDataVerify, PatientBodyFields } from '../utils';
import { EntryWithoutId } from './../types';
const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientsService.getNonSensitivePatients());
});

router.get('/:id', (req, res) => {
  res.json(patientsService.findById(req.params.id));
});

router.post('/', (req, res) => {
  const patient = body2Patient(req.body as PatientBodyFields);
  res.json(patientsService.addPatient(patient));
});

router.post('/:id/entries', body().custom(entriesDataVerify), (req, res) => {
  const entry = entriesDataVerify(req.body as EntryWithoutId);
  res.json(patientsService.addEntries(entry));
});

export default { router };
