import { v4 as uuid } from 'uuid';
import patients from '../../data/patients';
import { EntryWithoutId, Patient, PublicPatient } from '../types';

const getPatients = (): Patient[] => patients;

const getNonSensitivePatients = (): PublicPatient[] =>
  patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));

const findById = (id: string) => getPatients().find((v) => v.id === id);

const addPatient = (patieny: Omit<Patient, 'id'>) => {
  return { id: uuid(), ...patieny };
};

const addEntries = (entry: EntryWithoutId) => {
  return { id: uuid(), ...entry };
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient,
  findById,
  addEntries,
};
