import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import { Patient, Patients } from '@/models/patients';

import patientsMock from '../../public/mock/patients.json';

Vue.use(Vuex);

const patients: Patient[] = [...patientsMock];

const store: Store<Patients> = new Store({
  state: {
    patients: patients
  }
});

export default store;
