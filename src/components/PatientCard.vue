<template>
  <b-card
    title="Patient name"
    tag="article"
    style="max-width:22rem; min-width: 15rem;"
    class="mb-2"
  >
    <b-card-text>
      Patient procedure for today
    </b-card-text>

    <b-button to="/patient/:6" variant="primary">Review</b-button>
  </b-card>
</template>

<script>
    export default {
        name: 'PatientCard'
    };
</script>

<style scoped>

</style>
