<template>
<div>
    <form>
        <label for="fname">First name:</label><br>
        <input v-model="user.firstName" placeholder="edit me">
        <label for="lname">Last name:</label><br>
        <input v-model="user.lastName" placeholder="edit me">
        <label for="lname">E-mail Adresse:</label><br>
        <input v-model="user.email" placeholder="edit me">
        <label for="lname">Passwort:</label><br>
        <input v-model="user.pwd" placeholder="edit me">
      </form>
   <button v-on:click="add_user">Add user</button>
</div>
</template>

<script>
export default {
data() {
    return {
        user:{
            firstName: '',
            lastName:'',
            email: '',
            pwd:''
        },

    }
},
methods: {
    add_user: async function(event){
         const ip = await this.$axios.$post('http://localhost:5000/users',
         {
             firstName:this.user.firstName,
             lastName:this.user.lastName,
             email:this.user.pwd
ag
         }
         )
         console.log(ip);

    }
}
}
</script>

<style scoped lang="scss">


</style>

