<template>
  <HeaderMain/>
  <div class="main container-md col-lg-9">
    <video id="background-video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
      <source src="@/assets/video.mp4" type="video/mp4">
    </video>
    <BurgerNav/>
    <router-view/>
  </div>
</template>

<script>
  import HeaderMain from "./components/HeaderMain"
  import BurgerNav from "./components/BurgerNav"
  export default {
    name: "App",
    components: {
      HeaderMain,
      BurgerNav
    }
  }
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@800&display=swap');
  $primary-color: #655CE0;
  #app {
    font-family: 'Alegreya Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;
  }
  .main {
    position: relative;
    color: white;
    height: 100%;
    overflow: auto;
  }
  #background-video {
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: brightness(0.4) sepia(7) hue-rotate(165deg) saturate(10);
  }
</style>
