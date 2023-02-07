import { v4 as uuid } from 'uuid';
import patientsData from '../../data/patients.json';
import { Patient } from '../types';

const patients: Patient[] = patientsData;

const getPatients = (): Patient[] => {
  return patients;
};

const getNonSensitivePatients = (): Omit<Patient, 'ssn'>[] =>
  patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));

const addPatient = (patieny: Omit<Patient, 'id'>) => {
  return { id: uuid(), ...patieny };
};

export { getPatients, getNonSensitivePatients, addPatient };
