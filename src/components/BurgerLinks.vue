<template>
    <li><router-link class="link" :to="{name: 'home'}">Pradžia</router-link></li>
    <li><router-link class="link" :to="{name: 'pamokos'}">Pamokos</router-link></li>
    <li><router-link class="link" :to="{name: 'stovykla'}">Stovykla</router-link></li>
    <li><router-link class="link" :to="{name: 'nuoma' }">Nuoma</router-link></li>
    <li><router-link class="link" :to="{name: 'keliones'}">Kelionės</router-link></li>
    <li><router-link class="link" :to="{name: 'about' }">Apie mus</router-link></li>
    <li><router-link class="link" :to="{name: 'straipsniaihome'}">Straipsniai</router-link></li>
    <li>social</li>
</template>

<script>
    export default {
        name: 'BurgerLinks',
    }
</script>

<style lang="scss" scoped>
    nav a {
        letter-spacing: 5px;
        font-family: "DM Serif Display", serif;
        font-weight: bold;
        color: white;
        text-decoration: none;
        font-size: x-large;
        &.router-link-exact-active {
            color: #5c59f7;
        }
    }
    nav a:hover {
        color: #B355ED;
    }

</style>