import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

initializeApp(firebaseConfig);

const auth = getAuth();

// Registrar usuario
const registerUser = (email, password, callback) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);

      callback();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

// Login
const login = (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

      callback(errorCode);
    });
};

// Logout
const logout = () => {
  signOut(auth)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Observador

// Aca entra a login si no estamos logeados
const observer = (to, next) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Aca entra cuando esta logeado el usuario
      if (to.path === "/login") {
        next("/"); //redirige al Home
      } else {
        next(); // Aca entra al Home el usuario
      }
    } else {
      // Aca entra cuando no esta logeado el usuario
      if (to.path !== "/login") {
        next("/login");
      } else {
        next(); // Aca entra al login
      }
    }
  });
};

export { registerUser, login, logout, observer };
