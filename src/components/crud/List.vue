<template>
  <div>
      <div class="container">
        <div class="row mt-4">
          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4" v-for="user in users" :key="user.key">
            <div class="card top-card">
              <div class="card-header">Abono</div>
              <div class="card-body">
                <h5 class="card-title">Cantidad: {{ user.quantity }}</h5>
                <p class="card-text">Fecha: {{ user.date }}</p>

                <button class="btn btn-danger" @click="deleteUser(user.key)">Eliminar</button>
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
              quantity: doc.data().quantity,
              date: doc.data().date
            })
          })
        })
      },

     deleteUser(id) {
        const db = firebase.firestore();
        
        db.collection("users").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      }

    }
}
</script>

<style scoped>
    .top-card {
        margin-top: 30px;
    }
</style>