<template>
  <div v-bind:class="{ mobile: mobile, desktop: !mobile }" class="home">
    <div id="carouselSlidesOnly" class="carousel slide h-100" data-bs-interval="false" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselSlidesOnly" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
          <div class="carousel-item active">
              <StovyklaPart/>
          </div>
          <div class="carousel-item">
              <PamokosPart/>
          </div>
          <div class="carousel-item">
              <StraipsniaiPart/>
          </div>
          <div class="carousel-item">
              <KontaktaiPart/>
          </div>
      </div>
    </div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/> --->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import StovyklaPart from '@/views/home/StovyklaPart.vue'
import StraipsniaiPart from '@/views/home/StraipsniaiPart.vue'
import PamokosPart from '@/views/home/PamokosPart.vue'
import KontaktaiPart from '@/views/home/KontaktaiPart.vue'

import screenSize from '@/mixins/ScreenSize'

export default {
  name: 'HomeView',
  mixins:[screenSize],
  components: {
    // HelloWorld,
    StovyklaPart,
    StraipsniaiPart,
    PamokosPart,
    KontaktaiPart
  }
}
</script>

<style lang="scss" scoped>
  .home.desktop{
    height: 100%;
    overflow: hidden;
    .pic {
      background-position-y: center;
    }
  }
</style>