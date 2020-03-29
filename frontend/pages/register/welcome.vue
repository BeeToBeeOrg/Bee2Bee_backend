<template>
    <div class="container">
        <img :src="img" alt="Profile picture">

        <h1>Willkommen {{ name }}</h1>

        <p>
            Du bist jetzt in der Suche auffindbar. Entdecke Personalpartner, die deinem Profil entsprechen. Die Kriterien kannst du jeder Zeit in deinem Profil anpassen.
        </p>

        <nuxt-link to="/dashboard" class="button">Profil ansehen</nuxt-link>
        <nuxt-link to="/search" class="button">Personalpartner anzeigen</nuxt-link>
    </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
    data() {
        return {
            img: '',
            name: ''
        }
    },
    middleware: 'authenticated',
    asyncData({ redirect, req, store, app }) {
        // if(process.server) {
        //     console.log('blocked access')
        //     console.log(app.store.auth)
        //     Auth.currentAuthenticatedUser().then((user)=>{
        //         console.log('user = ' + JSON.stringify(user.pool))
        //     });


    // if(process.server) {
    //   console.log('server')
    // //   const accessToken = app.$cookies.get('access_token')
    // //   if(accessToken === undefined) {
    // //     redirect('/login')
    // //   }
    // } else {

    //   if(!$auth.isAuthenticated) {
    //     redirect('/register/login')
    //   }
    // }
    },
    methods: {
        getUser() {
            const user = this.$axios.get('localhost:5000/users/1')
            this.img = user.profile_img
            this.name = user.firstName
        }
    },
    created() {
        this.getUser()
    },
    middelware:'authenticated'
}
</script>

<style lang="scss" scoped>
.container {
    text-align: center;

    img {
        width: 50vw;
        height: 50vw;
        border-radius: 50%;
        object-fit: cover;
    }

    h1 {
        margin: 20px;
    }

    p {
        width: 70vw;
        position: relative;
        left: 15vw;
    }

    .button {
        background: deepskyblue;
        color: #fff;
        text-decoration: none;
        border-radius: 20px;
        padding: 10px 15px;
        margin: 20px;
    }
}

@media only screen and (max-width: 786px) {
    img {
        width: 60vw;
        height: 60vw;
    }
}
</style>
