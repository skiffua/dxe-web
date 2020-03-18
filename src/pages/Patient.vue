<template>
  <div>
    <h1>User {{ $route.params.id }}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Patient'
}
</script>

<style scoped>

</style>
