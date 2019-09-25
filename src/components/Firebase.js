import firebase from 'firebase/app';
import 'firebase/auth'
import config from '../config';

class Firebase {

  constructor() {
    firebase.initializeApp(config.firebase);

    this.app = firebase.app();
    this.auth = firebase.auth(this.app);
    
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

  getUser = function() {
    return this.auth.currentUser;
  }

  logout = function() {
    this.auth.signOut();

    this.listeners.forEach(function(func) {
      func(null);
    })
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