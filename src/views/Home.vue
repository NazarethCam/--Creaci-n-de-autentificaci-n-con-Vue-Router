<template>
  <div>
    <h1>Este es el home</h1>
    <button @click="signOut">Logout</button>
    <br /><br />
    <router-link to="/about">About</router-link>
  </div>
</template>}

<script>
import { logout } from "../firebase.js";
export default {
  methods: {
    signOut() {
      logout();
    },
  },
};
</script>