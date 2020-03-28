<template>
    <div class="container">
        <h1>Neues Password</h1>

        <form method="POST" @submit.prevent="new_pwd">
            <div class="form-group">
                <label for="email">Email</label>
                <input
                    type="email"
                    v-model="email"
                    id="email"
                    name="email"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                />
                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                    <span v-if="!$v.email.user.required">Email is required</span>
                    <span v-if="!$v.email.user.email">Email is invalid</span>
                </div>
            </div>

            <div class="form-group">
                <label for="email">Code</label>
                <input
                    type="text"
                    v-model="code"
                    id="code"
                    name="code"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && $v.user.code.$error }"
                />
                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                    <span v-if="!$v.user.email.required">Email is required</span>
                    <span v-if="!$v.user.email.email">Email is invalid</span>
                </div>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input
                type="password"
                v-model="user.pwd"
                id="password"
                name="password"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.user.pwd.$error }"
                />
                <div v-if="submitted && $v.user.pwd.$error" class="invalid-feedback">
                <span v-if="!$v.user.pwd.required">Password is required</span>
                <span v-if="!$v.user.pwd.minLength">Password must be at least 6 characters</span>
                </div>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                type="password"
                v-model="user.confirmpwd"
                id="confirmPassword"
                name="confirmPassword"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.user.confirmpwd.$error }"
                />
                <div v-if="submitted && $v.user.confirmpwd.$error" class="invalid-feedback">
                <span v-if="!$v.user.confirmpwd.required">Confirm Password is required</span>
                <span v-else-if="!$v.user.confirmpwd.sameAsPassword">Passwords must match</span>
                </div>
            </div>
            
            <div class="form-group">
                <button 
                class="btn btn-secondary" 
                @click.prevent="$router.push('/')">Zurück</button>
                <button class="btn btn-primary">Weiter</button>
            </div>
        </form>
    </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { Auth } from 'aws-amplify'

export default {
    data() {
    return {
      user: {
        email: "",
        pwd: "",
        confirmpwd: ""
      },
      submitted: false
    };
  },
  validations: {
    user: {
      email: { required, email },
      pwd: { required, minLength: minLength(6) },
      confirmpwd: { required, sameAsPassword: sameAs("pwd") },
    }
  },
  methods: {
    async new_pwd() {
        const username = this.user.email,
              code = this.user.code,
              new_password = this.user.pwd;

        await Auth.forgotPasswordSubmit(username, code, new_password)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
  }
}
</script>

<style>
</style>