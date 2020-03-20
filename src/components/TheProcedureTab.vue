<template>
  <b-container fluid>
    <p class="mb-2"><strong>Add procedure</strong></p>
        <b-form @submit="onSubmit">
          <b-row>
            <b-col md="6" class="px-0">
              <b-row>
                <b-col md="6">
                  <b-form-group id="input-group-1" label="Title" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="form.title"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col md="6">
                  <b-form-group id="input-group-2" label="Date" label-for="input-2">
                    <b-form-datepicker
                      id="input-2"
                      v-model="form.date"
                      required
                    ></b-form-datepicker>
                  </b-form-group>
                </b-col>
              </b-row>

                <b-form-group id="input-group-3" label="Provider" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.provider"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-row>
                  <b-col md="7">
                    <b-form-group id="input-group-4" label="Status" label-for="input-6">
                      <b-form-select
                        id="input-6"
                        v-model="form.status"
                        :options="statuses"
                        required
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-form-group id="input-group-5">
                  <b-form-checkbox
                    id="checkboxes-12"
                    value=true
                    v-model="form.insuranse"
                  >Bill to insuranse</b-form-checkbox>
                </b-form-group>

                <b-form-group id="input-group-6" label="Amount" label-for="input-4">
                  <b-form-input
                    id="input-4"
                    v-model="form.amount"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-7" label="Note" label-for="input-7">
                  <b-form-textarea
                    id="input-7"
                    v-model="form.note"
                    required
                  ></b-form-textarea>
                </b-form-group>

                <b-button type="submit" variant="primary">Add</b-button>
            </b-col>
          </b-row>
        </b-form>
  </b-container>
</template>

<script>
    export default {
        name: 'TheProcedureTab',
        data () {
            return {
                form: {
                    title: '',
                    date: '',
                    provider: '',
                    status: null,
                    insuranse: false,
                    amount: null,
                    note: ''
                },
                statuses: [{ text: 'Chose...', value: null }, 'Pending', 'In progress', 'Complited']
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
