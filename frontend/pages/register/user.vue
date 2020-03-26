<template>
  <div>
    <sidebarLogin />
    <form @submit.prevent="submit">
      <div class="form-group">
    <label for="firstName">First Name</label>
    <input type="text" v-model="user.firstName" id="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" />
    <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">First Name is required</div>
</div>
<div class="form-group">
    <label for="lastName">Last Name</label>
    <input type="text" v-model="user.lastName" id="lastName" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }" />
    <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback">Last Name is required</div>
</div>
<div class="form-group">
    <label for="email">Email</label>
    <input type="email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
        <span v-if="!$v.user.email.required">Email is required</span>
        <span v-if="!$v.user.email.email">Email is invalid</span>
    </div>
</div>
<div class="form-group">
    <label for="password">Password</label>
    <input type="password" v-model="user.pwd" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.user.pwd.$error }" />
    <div v-if="submitted && $v.user.pwd.$error" class="invalid-feedback">
        <span v-if="!$v.user.pwd.required">Password is required</span>
        <span v-if="!$v.user.pwd.minLength">Password must be at least 6 characters</span>
    </div>
</div>
<div class="form-group">
    <label for="confirmPassword">Confirm Password</label>
    <input type="password" v-model="user.confirmpwd" id="confirmPassword" name="confirmPassword" class="form-control" :class="{ 'is-invalid': submitted && $v.user.confirmpwd.$error }" />
    <div v-if="submitted && $v.user.confirmpwd.$error" class="invalid-feedback">
        <span v-if="!$v.user.confirmpwd.required">Confirm Password is required</span>
        <span v-else-if="!$v.user.confirmpwd.sameAsPassword">Passwords must match</span>
    </div>
</div>
      <!-- 
     <div class="form-group" :class="{ 'form-group--error': $v.user.pwd.$error }">
        <label class="form__label">Passwort</label>
        <input class="form__input" v-model.trim="$v.user.pwd.$model"/>
    </div>
    <div class="error" v-if="!$v.user.firstName.required">Name is required</div>

     <div class="form-group" :class="{ 'form-group--error': $v.user.pwd.$error }">
        <label class="form__label">Passwort</label>
        <input class="form__input" v-model.trim="$v.user.pwd.$model"/>
    </div>
      <div class="error" v-if="!$v.user.firstName.required">Name is required</div>-->

      <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
    </form>
    <!-- <form>

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
    <button v-on:click="add_user">Add user</button>-->
  </div>
</template>

<script>
import {
  required,
   email, minLength, sameAs
} from "vuelidate/lib/validators";
import sidebarLogin from "@/components/sidebar_login.vue";

export default {
  components: {
    sidebarLogin
  },
  data() {
    return {
       submitted: false ,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        pwd: "",
        confirmpwd: "",
        agb: false
      }
    };
  },
  validations: {
   submitted: false,
   user: {
                firstName: { required },
                lastName: { required },
                email: { required, email },
                pwd: { required, minLength: minLength(6) },
                confirmpwd: { required, sameAsPassword: sameAs('pwd') }
            }
  },
  methods: {
    submit() {
       this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    }
  },
  add_user: async function(event) {
 
      //   if (user.agb === true) {
      //     const ip = await this.$axios.$post("http://localhost:5000/users", {
      //       firstName: this.user.firstName,
      //       lastName: this.user.lastName,
      //       email: this.user.pwd
      //     });
      //   } else {
      //   }
      //   console.log(ip);
    
  }
};
</script>

<style scoped lang="scss">
</style>

