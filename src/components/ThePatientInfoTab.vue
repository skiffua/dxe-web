<template>
  <b-container fluid>
    <p class="mb-2"><strong>Procedures</strong></p>
    <b-row>
      <b-col md="3" class="px-0">
        <b-list-group>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Cras justo odio
            <b-badge variant="primary" pill>14</b-badge>
          </b-list-group-item>

          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <b-badge variant="primary" pill>2</b-badge>
          </b-list-group-item>

          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Morbi leo risus
            <b-badge variant="primary" pill>1</b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-col>
<!--      // Form-->
      <b-col md="9" class="px-0 pl-3" >
        <b-form @submit="onSubmit">
          <b-row>
            <b-col md="6">
              <b-form-group id="input-group-1" label="Email" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group id="input-group-2" label="Phone" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.phone"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-form-group id="input-group-3" label="Address" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.address"
              required
              placeholder="1234 Main St"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Address2" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.address2"
              placeholder="Apartment, studio or floor"
            ></b-form-input>
          </b-form-group>

          <b-row>
            <b-col md="6">
              <b-form-group id="input-group-5" label="City" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="form.city"
              required
            ></b-form-input>
          </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group id="input-group-6" label="State" label-for="input-6">
            <b-form-select
              id="input-6"
              v-model="form.state"
              :options="states"
              required
            ></b-form-select>
          </b-form-group>
            </b-col>
            <b-col md="2">
              <b-form-group id="input-group-7" label="Zip" label-for="input-7">
            <b-form-input
              id="input-7"
              v-model="form.zip"
              required
            ></b-form-input>
          </b-form-group>
            </b-col>
          </b-row>

          <b-form-group id="input-group-8">
            <b-form-checkbox
              id="checkboxes-7"
              value=true
              v-model="form.garantor"
            >Garantor</b-form-checkbox>
          </b-form-group>

          <b-button type="submit" variant="primary">Update</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: 'ThePatientInfoTab',
        data () {
            return {
                form: {
                    email: '',
                    phone: '',
                    address: '',
                    address2: '',
                    city: '',
                    state: null,
                    zip: '',
                    garantor: false
                },
                states: [{ text: 'Chose...', value: null }, 'Alabama', 'Illinois', 'Virginia', 'Nevada']
            };
        },
        methods: {
            onSubmit (evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            }
        }
    };
</script>
