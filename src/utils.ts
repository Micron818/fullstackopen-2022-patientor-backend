import { Gender, Patient } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseString = (value: unknown): string => {
  if (!value || !isString(value)) {
    throw new Error('Incorrect or missing format' + value);
  }
  return value;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

export type PatientBodyFields = {
  name: unknown;
  occupation: unknown;
  gender: unknown;
  ssn: unknown;
  dateOfBirth: unknown;
};

const body2Patient = ({
  name,
  occupation,
  gender,
  ssn,
  dateOfBirth,
}: PatientBodyFields): Omit<Patient, 'id'> => {
  const patient: Omit<Patient, 'id'> = {
    name: parseString(name),
    occupation: parseString(occupation),
    gender: parseGender(gender),
    ssn: parseString(ssn),
    dateOfBirth: parseDate(dateOfBirth),
  };

  return patient;
};

export { body2Patient };
