import { Procedure } from './procedure';

export interface Patient {
  patientId: number | null;
  email: string;
  phone: string;
  name: string;
  address: string;
  address2?: string;
  city: string;
  state?: string;
  zip: string;
  garantor: boolean;
  procedures: Array<Procedure>;
  visiting: number | null;
  operations: number | null;
}

export interface Patients {
  patients: Patient[];
}
