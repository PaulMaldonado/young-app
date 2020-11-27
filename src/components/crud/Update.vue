<template>
  <div class="new-form">
      <div class="container">
          <div class="row mt-4">
              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 mx-auto">
                  <div class="card form-top">
                      <div class="card-header text-header">
                          Editar abono
                      </div>
                      <div class="card-body">
                          <form @submit.prevent="updateData">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="fas fa-money-bill-alt"></i>
                                        </span>
                                    </div>
                                    <input 
                                    type="number" 
                                    placeholder="Editar cantidad" 
                                    class="form-control form"
                                    v-model="user.quantity"
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
                                        v-model="user.date"
                                        >
                                    </div>
                                </div>
                            </div>

                            <button class="btn btn-quantity-color btn-block mt-4">
                                <span>
                                    <i class="fas fa-edit"></i>
                                </span>
                                Editar
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

export default {
    name: 'Edit',

    data() {
        return {
            user: {

            }
        }
    },

    created() {
        const db = firebase.firestore();

        const dbRef = db.collection('users').doc(this.$route.params.id);

        dbRef.get().then((doc) => {
           this.user = doc.data();
        })
        .catch(error => {
            console.error(error)
        })
    },

    methods: {
        updateData() {
            const db = firebase.firestore();

            db.collection('users').doc(this.$route.params.id)
                .update(this.user).then(() => {
                    console.log('Se actualizaron los datos')
                    this.$router.push('/show')
                })
                .catch(error => {
                    console.error(error)
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