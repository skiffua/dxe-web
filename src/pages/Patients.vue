<template>
  <b-container fluid class="my-3">
    <b-row cols-md="3" cols-sm="2" class="justify-content-between">
      <b-col class="px-0"><PatientCard></PatientCard></b-col>
      <b-col class="px-0"><PatientCard></PatientCard></b-col>
      <b-col class="px-0"><PatientCard></PatientCard></b-col>
      <b-col class="px-0"><PatientCard></PatientCard></b-col>
      <b-col class="px-0"><PatientCard></PatientCard></b-col>
    </b-row>
  </b-container>

</template>

<script lang="ts">
    import PatientCard from '../components/PatientCard.vue';

    export default {
        name: 'Patients',
        components: {
            PatientCard
        }
    };
</script>

<style lang="scss">
  .row::after {
    content: '';
    flex: auto;
  }
</style>
