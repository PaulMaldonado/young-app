<template>
  <div class="profile-user">
      <div class="container">
        <div class="row">
          <h1 class="title-app mt-4">Young app</h1>
        </div>
      </div>

      <img :src="user.data.photoURL" :alt="user.data.photoURL" class="profile-img">
      <h2 class="profile-name mt-3">{{ user.data.displayName }}</h2>
      <p class="profile-email">{{ user.data.email }}</p>

      <button class="btn btn-signout" @click.prevent="logOut">
        Cerrar sesión
      </button>
      
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
    name: 'Profile',

    methods: {
      logOut() {
        firebase.auth().signOut()
          .then(() => {
            this.$router.replace('/')
          })
          .catch(error => {
            return error.message
          })
      },

    },

    computed: {
      ...mapGetters({
        user: 'user'
      })
    }
}
</script>

<style scoped>
  .profile-user {
    max-width: 100%;
    height: 70vh;
    background-color: #ff3e3f;
    border-bottom-left-radius: 50% 40%;
  }

  .title-app {
    color: #ffffff;
    font-size: 2em;
    margin: 0 auto;
  }

  .profile-img {
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    border: 2px solid #ffffff;
    border-radius: 50%;
  }

  .profile-name {
    color: #ffffff;
    font-size: 1.8em;
    text-align: center;
  }

  .profile-email {
    color: #ffffff;
    font-size: .9em;
    text-align: center;
  }

  .btn-signout {
    background-color: #2b2936;
    color:  #ffffff;
    display: block;
    margin: 0 auto;
  }
</style>