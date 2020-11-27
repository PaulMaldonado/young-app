<template>
  <div>
      <div class="container">
        <div class="row mt-4">
          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4" v-for="user in users" :key="user.id">
            <div class="card top-card">
              <div class="card-header title-header">Abono</div>
              <div class="card-body">
                <h5 class="card-title quantity">Cantidad: {{ user.quantity }}</h5>
                <p class="card-text date">Fecha: {{ user.date }}</p>

                <button class="btn btn-danger" @click="deleteData(user.id)">
                  <span>
                    <i class="fas fa-trash-alt"></i>
                  </span>
                </button>
                <router-link :to="{name: 'Edit', params: { id: user.id }}" class="btn btn-success move-left">
                  <span>
                    <i class="far fa-edit"></i>
                  </span>
                </router-link>
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
    name: 'List',

    data() {
        return {
            users: []
        }
    },

    created() {
        this.showCollection()
    },

    methods: {
        showCollection() {
        const db = firebase.firestore();

        db.collection('users').onSnapshot((querySnapshot) => {
          this.users = [];

          querySnapshot.forEach((doc) => {
            this.users.push({
              id: doc.id,
              quantity: doc.data().quantity,
              date: doc.data().date
            })
          })
        })
      },

      deleteData(id) {
        const db = firebase.firestore();

        db.collection('users').doc(id).delete().then(() => {
          console.log('deleted successfully')
        })
        .catch(error => {
          console.error(error)
        })
      },

    }
}
</script>

<style scoped>
    .top-card {
        margin-top: 30px;
        border-top-right-radius: 20%;
        border-top-left-radius: 20%;
        border: 2px solid #2b2936;
        -webkit-box-shadow: 0 0 9px rgba(0, 0, 0, 0.5) !important;
        -moz-box-shadow: 0 0 9px rgba(0, 0, 0, 0.5) !important;
        box-shadow: 0 0 9px rgba(0, 0, 0, 0.5) !important;
    }

    .move-left {
      margin-left: 15px;
    }

    .quantity {
      color: #2b2936;
      font-size: 1.5em;
      font-weight: 900;
    }

    .date {
      color: #8c8b96;
      font-size: 1.2em;
      font-weight: 700;
    }

    .title-header {
      color: #8c8b96;
      font-size: .9em;
      font-weight: bold;
      border-bottom: 2px solid #2b2936;
    }
</style>