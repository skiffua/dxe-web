<script lang="ts">
    import Vue from 'vue';
    import { PatientCard } from '@/components/index.ts';

    import { Patient } from '@/models/patients';
    import { Procedure } from '@/models/procedure';

    interface PatientsPage {
        patients: Patient[] | [];
        isLoading: boolean;
        error: string;
    }

    export default Vue.extend({
        name: 'Patients',

        data (): PatientsPage {
            return {
                patients: [],
                isLoading: true,
                error: 'Cannot get patients information, try to reload page ;)'
            };
        },

        methods: {
            procedureForToday (patientId: number): string | null {
                const dateToday = new Date();
                dateToday.setHours(0, 0, 0, 0);

                const procedureForToday: Procedure | undefined = this.patients[patientId].procedures.find((procedure) => (
                    new Date(procedure.date).getTime() === dateToday.getTime()));

                return procedureForToday ? procedureForToday.title : null;
            }
        },

        created () {
            if (this.$store.state.patients.length) {
                setTimeout(() => {
                    this.patients = this.$store.state.patients;
                    this.isLoading = false;
                }, 2000);
            }
        },
        components: {
            PatientCard
        }
    });
</script>

<template>
  <b-container fluid class="my-3">

    <div class="text-center" v-if="isLoading">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    </div>

    <b-row
      cols-md="3"
      cols-sm="2"
      v-else-if="patients.length"
    >
      <b-col
        class="mb-2 px-0"
        v-for="(patient, index) in patients"
        :key="patient.patientId"
      >
        <PatientCard
         :patientId="patient.patientId"
         :name="patient.name"
         :procedureCurrent="procedureForToday(index)"
        >
        </PatientCard>
      </b-col>
    </b-row>

    <div v-else>
      {{ error }}
    </div>
  </b-container>
</template>

<style lang="scss" scoped>
  @import '~bootstrap/scss/bootstrap';
  .row {
    &>*:not(:nth-child(3n)) {
      // Medium devices (tablets, 768px and up)
      @media (min-width: 768px) {
        padding-right: ($spacer * 0.5) !important;
      }
    }
  }
</style>
