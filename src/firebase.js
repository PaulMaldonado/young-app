import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import store from './store'


const firebaseConfig = {
    apiKey: "AIzaSyCzs5HaVN1oz4U9tbJSWA5v2Um4CFxL450",
    authDomain: "young-app-af040.firebaseapp.com",
    databaseURL: "https://young-app-af040.firebaseio.com",
    projectId: "young-app-af040",
    storageBucket: "young-app-af040.appspot.com",
    messagingSenderId: "816688813693",
    appId: "1:816688813693:web:c5826575b5b7e6280a0314"
  };
  
  firebase.initializeApp(firebaseConfig);

  // Manejando el estado del usuario
  firebase.auth().onAuthStateChanged(user => {
    store.dispatch('getUser', user);
  });

  export default firebase;

