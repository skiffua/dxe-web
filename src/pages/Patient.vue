<template>
  <div>
    <div class="my-3">
      <b-tabs content-class="mt-3">
        <b-tab title="Info" active><ThePatientInfoTab /></b-tab>
        <b-tab title="Add Procedure"><TheProcedureTab /></b-tab>
      </b-tabs>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
    import { ThePatientInfoTab, TheProcedureTab } from '@/components/';

    export default {
        name: 'Patient',
        components: {
            ThePatientInfoTab,
            TheProcedureTab
        }
    };
</script>
