import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from '../config';

class Firebase {

  constructor() {
    firebase.initializeApp(config.firebase);

    this.app = firebase.app();
    this.auth = firebase.auth(this.app);
    this.db = firebase.firestore();
    
    this.listeners = [];

    let self = this;
    this.auth.onAuthStateChanged(function(user) {
      self.listeners.forEach(function(func) {
        func(user);
      });
    });

    this.logout = this.logout.bind(this);
  }

  addListener = function(func) {
    this.listeners.push(func);
  }

  clearListener = function() {
    this.listeners = [];
  }

  getUser = function() {
    return this.auth.currentUser;
  }

  logout = function() {
    this.auth.signOut();

    this.listeners.forEach(function(func) {
      func(null);
    })
  }

  createAccount = function(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        throw error
      });
  }

  createUserMetadata = function(uid, data) {
    data.uid = uid;
    return this.db.collection("users").add(data)
      .catch(function(error) {
        throw error;
      });
  }

  getUserMetadata = function(uid) {
    return this.db.collection("users").where("id", "==", uid)
      .catch(function(error) {
        throw error;
      });
  }

  updateUserMetadata = function(uid, data) {
    return this.db.collection("users").doc(uid).update(data)
      .catch(function(error) {
        throw error;
      });
  }

  deleteUserMetadata = function(uid) {
    return this.db.collection("users").doc(uid).delete()
      .catch(function(error) {
        throw error;
      })
  }

  sendVerifyEmail = function() {
    let user = this.getUser();
    return user.sendEmailVerification()
      .catch(function(error) {
        throw error;
      });
  }

  verifyEmail = function(code) {
    return this.auth.applyActionCode(code)
      .catch(function(error) {
        throw error
      });
  }

  sendPasswordResetEmail = function(email) {
    return this.auth.sendPasswordResetEmail(email)
      .catch(function(error) {
        throw error
      });
  }

  confirmPasswordReset = function(code, password) {
    return this.auth.confirmPasswordReset(code, password)
      .catch(function(error) {
        throw error
      });
  }

  emailAndPassword = function(username, password) {
    return this.auth.signInWithEmailAndPassword(username, password)
      .catch(function(error) {
        throw error;
      });
  };
}

const singleton = new Firebase();

window.logout = singleton.logout;

export default singleton