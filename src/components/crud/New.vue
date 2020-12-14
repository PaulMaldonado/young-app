<template>
  <div class="new-form">
      <div class="container">
          <div class="row">
              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 mx-auto">
                  <div class="card form-top">
                      <div class="card-header text-header">
                          Registra un nuevo abono
                      </div>
                      <div class="card-body">
                          <form>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="fas fa-money-bill-alt"></i>
                                        </span>
                                    </div>
                                    <input 
                                    type="number" 
                                    placeholder="Cantidad" 
                                    class="form-control form"
                                    v-model="quantity"
                                    >
                                </div>
                            </div>

                            <div class="form-group mt-4">
                                <div class="input-group mb-3">
                                    <div class="input-group prepend">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="fas fa-calendar-week"></i>
                                        </span>
                                        <input 
                                        type="date" 
                                        class="form-control form"
                                        v-model="date"
                                        >
                                    </div>
                                </div>
                            </div>

                            <button class="btn btn-quantity-color btn-block mt-4" @click.prevent="newRegister">
                                <span>
                                    <i class="fas fa-save"></i>
                                </span>
                                Guardar
                            </button>
                        </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export default {
    name: 'New',

    data() {
        return {
            quantity: '',
            date: '',
        }
    },

    methods: {
        newRegister() {
           const db = firebase.firestore();
           
           db.collection("users").doc(firebase.auth().currentUser.uid)
            .collection("users").add({
                quantity: this.quantity,
                date: this.date
            })
            .then(() => {
                if(this.quantity === null || this.date === null) return;

                this.$router.push('show')
            })
            .catch(error => {
                console.log(error)
            })
        },
    }
}
</script>

<style scoped>
    .new-form {
        max-width: 100%;
        height: 90vh;
        background-color: #ff3e3f;
        border-bottom-left-radius: 50% 50%;
        border-bottom-right-radius: 50% 15%;
    }

    .btn-quantity-color {
        background-color: #ff3e3f;
        color: #ffffff;
        border-radius: 20px;
    }

    .text-header {
        color: #8c8b96;
        font-size: 1.5em;
        font-weight: bold;
    }

    input:focus {
        border: solid 2px #ff9b9c;
        outline: none;
    }

    .form {
        border-radius: 20px;
    }

    .form-top {
        margin-top: 100px;
    }
</style>