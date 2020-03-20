<template>
  <div>
    <b-navbar toggleable="md" class="top-header">
      <b-navbar-brand to="/">DXE</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" exact active-class="active">Home</b-nav-item>
          <b-nav-item to="/patients" active-class="active">Patients</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Patient search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="outline-primary">Search</b-button>
          </b-nav-form>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Header extends Vue {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
