import { v4 as uuid } from 'uuid';
import patients from '../../data/patients';
import { Patient, PublicPatient } from '../types';

const getPatients = (): Patient[] => patients;

const getNonSensitivePatients = (): PublicPatient[] =>
  patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));

const findById = (id: string) => patients.find((v) => v.id === id);

const addPatient = (patieny: Omit<Patient, 'id'>) => {
  return { id: uuid(), ...patieny };
};

export default { getPatients, getNonSensitivePatients, addPatient, findById };
