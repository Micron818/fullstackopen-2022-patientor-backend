import { v4 as uuid } from 'uuid';
import patientsData from '../../data/patients.json';
import { Patient, PublicPatient } from '../types';
import { body2Patient } from '../utils';

const patients: Patient[] = patientsData.map((v) => ({
  ...body2Patient(v),
  entries: [],
  id: v.id,
}));

const getPatients = (): Patient[] => {
  return patients;
};

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
