<template>
    <div class="pamokos part mb-4">
        <div class="pic">
            <img src="../assets/oliver.jpg" alt="man surfing">
            <router-link  class="button" to="/">
                <img src="../assets/blob2.svg" alt="mygtukas">
                <h3>press</h3>
            </router-link>
        </div>
        <div class="text-white">
            <h1 class="mt-4">Nori pabandyti ir išmokti ?</h1>
            <h2 class="mt-4">GERIAUSIA MOKYKLA LIETUVOJE</h2>
            <h3 class="mt-4">Pamokos nuo pradedančiųjų iki pažengusių</h3>   
        </div>

    </div>
</template>

<script>
    export default {
        name: 'PamokosPart',
    }
</script>

<style lang="scss" scoped>
    .pamokos {
        background-image: url("../assets/waves3.svg");
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .pic {
        position: relative;
        display: flex;
        flex-direction: column;
        img {
            margin: auto;
            width: 100%;
        }
    }
    .button {
        bottom: 50px;
        right: 50px;
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