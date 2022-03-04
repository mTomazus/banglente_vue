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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  height: 7vh;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
}
nav {

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: x-large;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
