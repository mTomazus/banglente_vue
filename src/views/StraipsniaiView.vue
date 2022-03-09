<template>
  <div class="straipsniai">
      <div v-show="isExactActive">
          <h1>straipsniai</h1>
          <router-link :to="{name: '1'}">pirmas</router-link>
      </div>
      <router-view ref="rv"></router-view>
  </div>
  
</template>

<script>
    export default {

        data() {
            return {
                isExactActive: true,
            }
        },

        updated() {
            this.isExactActive = typeof this.$refs.rv === 'undefined';
        },

        mounted() {
            this.isExactActive = typeof this.$refs.rv === 'undefined';
        }

    }
</script>


<style scoped>
    h1 {
        padding: 6rem;
        font-size: 4rem;
    }
</style>