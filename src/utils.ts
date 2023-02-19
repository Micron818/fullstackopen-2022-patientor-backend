import {
  Entry,
  EntryWithoutId,
  Gender,
  HealthCheckRating,
  Patient,
} from './types';

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

const parseEntries = (entries: unknown): Entry[] => entries as Entry[];

export type PatientBodyFields = {
  name: unknown;
  occupation: unknown;
  gender: unknown;
  ssn: unknown;
  dateOfBirth: unknown;
  entries?: unknown;
};

const body2Patient = ({
  name,
  occupation,
  gender,
  ssn,
  dateOfBirth,
  entries,
}: PatientBodyFields): Omit<Patient, 'id'> => {
  const patient: Omit<Patient, 'id'> = {
    name: parseString(name),
    occupation: parseString(occupation),
    gender: parseGender(gender),
    ssn: parseString(ssn),
    dateOfBirth: parseDate(dateOfBirth),
    entries: parseEntries(entries),
  };

  return patient;
};

const perseHealthCheckRating = (healthCheckRating: HealthCheckRating) => {
  if (!Object.values(HealthCheckRating).includes(healthCheckRating))
    throw new Error('miss or invalid healthCheckRating: ' + healthCheckRating);
  return healthCheckRating;
};

const parseUndefind = (value: unknown) => {
  if (!value) throw new Error('miss required value');
  return 'undefind';
};

const entriesDataVerify = (entry: EntryWithoutId) => {
  if (!(entry.description && entry.date && entry.specialist))
    throw new Error('miss required value');
  switch (entry.type) {
    case 'HealthCheck': {
      perseHealthCheckRating(entry.healthCheckRating);
      break;
    }
    case 'Hospital': {
      parseUndefind(entry.discharge);
      break;
    }
    case 'OccupationalHealthcare': {
      parseString(entry.employerName);
      break;
    }
    default:
      break;
  }
  return entry;
};

export { body2Patient, entriesDataVerify };
