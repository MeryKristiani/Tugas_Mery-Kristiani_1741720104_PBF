import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDv72QmtX2PZwTmQoBjynCEdKbNkombBhU",
  authDomain: "uas-mery.firebaseapp.com",
  databaseURL: "https://uas-mery.firebaseio.com",
  projectId: "uas-mery",
  storageBucket: "uas-mery.appspot.com",
  messagingSenderId: "522385985946",
  appId: "1:522385985946:web:3ed0cfd16d66feb6812a23",
  measurementId: "G-EQS9Y0RCKC"
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

  // doPasswordUpdate = password =>
  //   this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;