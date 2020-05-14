import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDxu6YTxI1zS7dwOEpO5H9jYNDv828oCVQ",
  authDomain: "uas-pbf-mery.firebaseapp.com",
  databaseURL: "https://uas-pbf-mery.firebaseio.com",
  projectId: "uas-pbf-mery",
  storageBucket: "uas-pbf-mery.appspot.com",
  messagingSenderId: "677955513395",
  appId: "1:677955513395:web:21645e06dcb791aed54746",
  measurementId: "G-XLNF9JGLBN"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;