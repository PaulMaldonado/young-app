<template>
  <div class="content">
      <div class="container">
          <h2 class="text-center mt-4 title-content">Bienvenido!</h2>
          <p class="text-center p-subtitle">Iniciar sesión para continuar</p>
          <div class="row">
              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 mx-auto">
                  <form @submit.prevent="signIn">
                      <div class="form-group mt-4">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon1">
                                      <i class="fas fa-user"></i>
                                  </span>
                              </div>
                              <input 
                              type="email" 
                              placeholder="Correo electronico" 
                              class="form-control form-radius"
                              v-model="email"
                              >
                          </div>
                      </div>
                      <div class="form-group mt-4">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon1">
                                      <i class="fas fa-lock"></i>
                                  </span>
                              </div>
                              <input 
                              type="password" 
                              placeholder="Contraseña" 
                              class="form-control form-radius"
                              v-model="password"
                              >
                          </div>
                      </div>

                      <p class="forget">¿Olvidaste tú contraseña?</p>

                      <button class="btn btn-app btn-block mt-4">Iniciar sesión</button>

                      <GoogleSignIn 
                        @google-sign-in="googleSignIn"
                      />

                      <FacebookSignIn 
                        @facebook-sign-in="facebookSignIn"
                      />
                  </form>
              </div>
          </div>
      </div>


      <h5 class="text-center title-new-user">¿Eres nuevo? <span class="signup" @click="$router.push('register')">
          Crear cuenta
          </span></h5>
  </div>
</template>

<script>
import GoogleSignIn from '../auth/GoogleSignIn'
import FacebookSignIn from '../auth/FacebookSignIn'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

export default {
    name: 'Content',
    props: ['titleGoogle'],
    components: {
        GoogleSignIn,
        FacebookSignIn
    },

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    if(this.email === null || this.password === null || this.email !== this.email) return

                    this.$router.push('profile')
                })
                .catch(error => {
                    console.error(error)
                })
        },

        googleSignIn() {
            const provider = new firebase.auth.GoogleAuthProvider()
            
            firebase.auth().signInWithPopup(provider)
                .then(result => {
                    if(result) {
                        this.$router.push('profile')
                    }
                })
                .catch(error => {
                    return error.message
                })
        },

        facebookSignIn() {
            const provider = new firebase.auth.FacebookAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then(result => {
                    if(result) {
                        this.$router.push('profile')
                    }
                })
                .catch(error => {
                    return error.message
                })
        }
    }
}
</script>

<style scoped>
    .content {
        max-width: 100%;
        height: 70vh;
        background-color: #ffffff;
    }

    .title-content {
        color: #2b2936;
        font-size: 1.8em;
        font-weight: bold;
    }

    .p-subtitle {
        color: #8c8b96;
        font-size: 1em;
        font-weight: bold;
    }

    input:focus {
        border: solid 2px #ff9b9c;
        outline: none;
    }

    .btn-app {
        background-color: #ff3e3f;
        color: #ffffff;
        border-radius: 20px;
    }

    .title-new-user {
        margin-top: 50px;
        font-size: .8em;
        color: #2b2936;
        font-weight: bold;
    }

    span.signup {
        color: #ff9b9c;
        font-weight: bold;
    }

    .form-radius {
        border-radius: 20px;
    }

    .forget {
        text-align: right;
        font-size: .8em;
        color: #ff9b9c;
        font-weight: bold;
    }

    h5.title-new-user {
        cursor: pointer;
    }
</style>