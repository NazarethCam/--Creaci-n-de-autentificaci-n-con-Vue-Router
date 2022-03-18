<template>
  <div>
    <h1>Login</h1>
    <div class="container">
      <p>Crear cuenta</p>
      <input type="text" placeholder="Usuario" v-model="crear.usuario" />
      <input
        type="password"
        placeholder="Contraseña"
        v-model="crear.contraseña"
      />
      <button @click="registrar">Registrar</button>
      <p>{{ msg }}</p>
    </div>
    <div class="container">
      <p>Ingresar</p>
      <input type="text" placeholder="Usuario" v-model="ingresar.usuario" />
      <input
        type="password"
        placeholder="Contraseña"
        v-model="ingresar.contraseña"
      />
      <button @click="loginUsuario">Ingresar</button>
    </div>
  </div>
</template>

<script>
import { registerUser, login } from "../firebase.js";
export default {
  data() {
    return {
      msg: "",
      crear: {
        usuario: "",
        contraseña: "",
      },

      ingresar: {
        usuario: "",
        contraseña: "",
      },
    };
  },

  methods: {
    usuarioRegistrado() {
      this.crear.usuario = "";
      this.crear.contraseña = "";

      setTimeout(() => {
        this.msg = "";
      }, 3000);
    },
    registrar() {
      registerUser(
        this.crear.usuario,
        this.crear.contraseña,
        this.usuarioRegistrado
      );
    },

    loginIncorrecto(error) {
      if (error === "auth/invalid-email") {
        alert("Correo incorrecto");
      }

      if (error === "auth/wrong-password") {
        alert("Contraseña incorrecta");
      }
    },

    loginUsuario() {
      login(
        this.ingresar.usuario,
        this.ingresar.contraseña,
        this.loginIncorrecto
      );
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 3rem auto;
}

input {
  margin-bottom: 1rem;
  padding: 0.25rem;
}
</style>