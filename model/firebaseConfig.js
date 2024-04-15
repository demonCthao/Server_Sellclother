// firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('../firebasee/firebaseConfig.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  apiKey: "AIzaSyAa5OD3p7VykeiCfKlGw-ldlFDKsqJNkSs",
  authDomain: "product-sapp.firebaseapp.com",
  projectId: "product-sapp",
  storageBucket: "product-sapp.appspot.com",
  messagingSenderId: "511656403022",
  appId: "1:511656403022:web:63d39c823313988d64a31f",
  measurementId: "G-TSR4T43JS5"
});

const db = admin.firestore();

module.exports = db;
