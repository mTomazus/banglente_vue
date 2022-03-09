<template>
    <li><router-link class="link" :to="{name: 'home'}">Pradžia</router-link></li>
    <li><router-link class="link" :to="{name: 'pamokos' }">Pamokos</router-link></li>
    <li><router-link class="link" :to="{name: 'stovykla' }">Stovykla</router-link></li>
    <li><router-link class="link" to="{name: '' }">Nuoma</router-link></li>
    <li><router-link class="link" to="{name: '' }">Kelionės</router-link></li>
    <li><router-link class="link" :to="{name: 'about' }">Apie mus</router-link></li>
    <li><router-link class="link" :to="{name: 'straipsniai'}">Straipsniai</router-link></li>
    <li>social</li>
</template>

<script>
    export default {
        name: 'MobileNav',
    }
</script>