<template>
  <div class="article">
      <div class="container">
          <h2 class="text-center mt-4 title-signup">Crea una cuenta</h2>
          <p class="text-center subtitle mt-3">Unete a nuestra comunidad de jovenes, Zalamea Jal.</p>
          <img src="../../assets/image/young-logo.png" alt="Logo" class="card-img-top logo">

          <h2 class="text-align-account text-center">Crear cuenta</h2>
          <div class="row mt-2">
              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 mx-auto">
                  <form @submit.prevent="createAccount">
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
                              class="form-control form"
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
                              class="form-control form"
                              v-model="password"
                              >
                          </div>
                      </div>

                      <button class="btn btn-signup-color btn-block mt-4">Crear cuenta</button>

                      <GoogleSignUp 
                        @google-sign-up="googleSignUp"
                      />

                      <FacebookSignUp 
                        @facebook-sign-up="facebookSignUp"
                      />
                  </form>
              </div>
          </div>
      </div>

      <h5 class="text-center title-user">¿Ya tienes una cuenta? <span class="signin" @click="$router.push('/')">
          Iniciar sesión</span>
      </h5>
  </div>
</template>

<script>
import GoogleSignUp from '../auth/GoogleSignUp'
import FacebookSignUp from '../auth/FacebookSignUp'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

export default {
    name: 'SignUp',
    props: ['title'],
    components: {
        GoogleSignUp,
        FacebookSignUp
    },

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        createAccount() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then( () => {
                    if(this.email === null || this.password === null) return

                    this.$router.push('profile')
                })
                .catch(error => {
                    console.error(error)
                })
        },

        googleSignUp() {
            const provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithPopup(provider)
                .then(result => {
                    if(result) {
                        this.$router.push('profile')
                    }
                })
                .catch(error => {
                    return error.message;
                })
        },

        facebookSignUp() {
            const provider = new firebase.auth.FacebookAuthProvider()

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
    .article {
        max-width: 100%;
        height: 100vh;
        background-color: #ffffff;
    }

    .title-signup {
        color: #2b2936;
        font-weight: bold;
        font-size: 1.8em;
    }

    .subtitle {
        color: #8c8b96;
        font-size: .9em;
        font-weight: bold;
    }

    .text-align-account {
        margin: 0 auto;
        margin-top: 50px;
        color: #2b2936;
        font-size: 2em;
        font-weight: bold;
    }

    .btn-signup-color {
        background-color: #ff3e3f;
        color: #ffffff;
        border-radius: 20px;
    }

    input:focus {
        border: solid 2px #ff9b9c;
        outline: none;
    }

    .form {
        border-radius: 20px;
    }

    .title-user {
        margin-top: 20px;
        font-size: .8em;
        color: #2b2936;
        font-weight: bold;
    }

    span.signin {
        color: #ff9b9c;
        font-weight: bold;
    }

    .logo {
        display: block;
        margin: 0 auto;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-top: 50px;
        border: 2px solid #ff9b9c;
    }

    h5.title-user {
        cursor: pointer;
    }
</style>