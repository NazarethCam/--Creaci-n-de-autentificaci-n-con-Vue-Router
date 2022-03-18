<template>
  <div id="app">
    <div class="loader" :class="{ show: $root.loading }">
      <p>LOADING...</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.loader {
  width: 100%;
  height: 100vh;
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background: #fff;
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
}

.loader.show {
  opacity: 1;
  visibility: visible;
}
</style>
