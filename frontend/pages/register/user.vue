<template>
  <div>
    <div>
      <div class="form-group" :class="{ 'form-group--error': $v.user.firstName.$error }">
        <label class="form__label">Username</label>
        <input class="form__input" v-model.trim="$v.user.firstName.$model" />
      </div>
      <div class="error" v-if="!$v.form.userName.required">Field is required.</div>
      <div
        class="error"
        v-if="!$v.form.userName.minLength"
      >Field must have at least {{ $v.form.userName.$params.minLength.min }} characters.</div>
      <div class="form-group" :class="{ 'form-group--error': $v.user.lastName.$error }">
        <label class="form__label">Password</label>
        <input class="form__input" v-model.trim="$v.form.password.$model" type="password" />
      </div>
      <div class="error" v-if="!$v.form.password.required">Field is required.</div>
      <div
        class="error"
        v-if="!$v.form.password.minLength"
      >Field must have at least {{ $v.form.password.$params.minLength.min }} characters.</div>
      <div class="form-group" :class="{ 'form-group--error': $v.form.$error }">
        <div class="error" v-if="$v.form.$error">Form is invalid.</div>
      </div>
      <tree-view :data="$v" :options="{rootObjectKey: '$v', maxDepth: 2}"></tree-view>
    </div>
    <form>
      <label for="fname">First name:</label>
      <br />
      <input v-model="user.firstName" placeholder />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input v-model="user.lastName" placeholder />
      <br />
      <label for="lname">E-mail Adresse:</label>
      <br />
      <input v-model="user.email" placeholder />
      <br />
      <label for="lname">Passwort:</label>
      <br />
      <input v-model="user.pwd" placeholder />
      <br />
      <label for="lname">Passwort:</label>
      <br />
      <input v-model="user.pwd" placeholder />
      <br />
      <input type="checkbox" id="checkbox" v-model="user.agb" />
    </form>
    <button v-on:click="add_user">Add user</button>
  </div>
</template>

<script>
import {
  required,
  email,
  password,
  sameAs,
  minLength
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        pwd: "",
        agb: false
      }
    };
  },
  validations: {
    user: {
      firstName: {
        required,
        minLength: minLength(5)
      },
      lastName: {
        required,
        minLength: minLength(5)
      }
    }
  },
  methods: {
    add_user: async function(event) {
      if (user.agb === true) {
        const ip = await this.$axios.$post("http://localhost:5000/users", {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.pwd
        });
      } else {
      }
      console.log(ip);
    }
  }
};
</script>

<style scoped lang="scss">
</style>

