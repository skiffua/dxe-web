<template>
  <b-button
    :size="size"
    :to="link"
    :class="customClass"
    :type="type"
    :variant="variant"
  >{{ message }}</b-button>
</template>

<script lang="ts">
    export default {
        name: 'BaseButton',

        props: {
            link: {
                type: String
            },
            size: {
                type: String
            },
            customClass: {
                type: String
            },
            type: {
                type: String
            },
            variant: {
                type: String
            },
            message: {
                type: String
            }
        }
    };
</script>

<style scoped>

</style>
