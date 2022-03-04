<template>
  <div class="home">
    <div class="container">
      <StovyklaPart/>
      <PamokosPart/>
      <StraipsniaiPart/>
      <KontaktaiPart/>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import StovyklaPart from '@/components/StovyklaPart.vue'
import StraipsniaiPart from '@/components/StraipsniaiPart.vue'
import PamokosPart from '@/components/PamokosPart.vue'
import KontaktaiPart from '@/components/KontaktaiPart.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    StovyklaPart,
    StraipsniaiPart,
    PamokosPart,
    KontaktaiPart
  }
}
</script>

<style lang="scss" scoped>
  .home {
    font-family: serif;
  }
  .button {
    bottom: -50px;
    left: 0;
    right: 0;
    position: absolute;
    img {
        width: 100px;
    }
    h3 {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 30px;
        color: white;
        text-decoration: none;
    }
}
</style>