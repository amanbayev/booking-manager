import firebase from 'firebase/app'

var firebaseConfig = {
  apiKey: "AIzaSyDEm4f_B3AcDZyTmStuOI_AZezEpaW-WmI",
  authDomain: "booking-manager-c8005.firebaseapp.com",
  projectId: "booking-manager-c8005",
  storageBucket: "booking-manager-c8005.appspot.com",
  messagingSenderId: "774185451512",
  appId: "1:774185451512:web:1a3ec44b2cf61c5d8fa00d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase