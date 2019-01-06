import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAEBCK1anT0ZR7PsTk0-ikoFFpD3V3ilHQ",
  authDomain: "vuedemo-75f01.firebaseapp.com",
  databaseURL: "https://vuedemo-75f01.firebaseio.com",
  projectId: "vuedemo-75f01",
  storageBucket: "vuedemo-75f01.appspot.com",
  messagingSenderId: "633676258324"
}
firebase.initializeApp(config)
export const db = firebase.database()