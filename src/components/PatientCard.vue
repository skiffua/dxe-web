<template>
  <b-card
    no-body
    style="min-width: 15rem;"
    class="h-100"
  >
    <b-card-body class="d-flex flex-column">
      <b-card-title>{{ this.name }}</b-card-title>
      <b-card-text>
        {{ procedureCurrent ? procedureCurrent : 'Patient has no procedure for today' }}
      </b-card-text>
      <b-button-group class="mt-auto d-block">
        <b-row>
          <b-col md="6" >
            <b-button :to="patientUri" variant="primary" class="w-100" >Review</b-button>
          </b-col>
        </b-row>
      </b-button-group>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'PatientCard',
        computed: {
            patientUri (): string {
                return '/patient/' + this.patientId.toString();
            }
        },
        props: {
            patientId: Number,
            name: String,
            procedureCurrent: String
        }
    });
</script>
