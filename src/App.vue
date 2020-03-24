<template>
  <div id="app" class="container-xl my-3 mx-auto">
    <TheHeader></TheHeader>
    <router-view class="my-3"/>
  </div>
</template>

<script lang="ts">
    import { TheHeader } from '@/components/index.ts';

    export default {
        name: 'App',
        components: {
            TheHeader
        }
    };
</script>

<style lang="scss">
  @import './assets/index.scss';
</style>
