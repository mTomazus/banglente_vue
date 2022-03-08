<template>
  <BurgerNav/>
  <router-view/>
</template>

<script>
import BurgerNav from "./components/BurgerNav"
export default {
  name: "App",
  components: {
    BurgerNav,
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
#app {
  font-family: 'DM Serif Display', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  height: 7vh;
  width: 100%;
  background: #438496;
  display: flex;
  position: fixed;
  justify-content: space-around;
  z-index: 1000;
}
nav {
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    font-size: x-large;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
a:hover {
  color: #CD5360;
}
</style>
