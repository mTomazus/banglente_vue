<template>
    <div class="pamokos part">
        <div class="pic">
            <div>
                <h1 class="mt-4">NORI PABANDYTI?</h1>
                <h2 class="text-white">GERIAUSIA MOKYKLA LIETUVOJE</h2>
            </div>
            <div class="text-white">
                <h3 class="mt-4">Pamokos pradedantiesiems ir ne tik!</h3>   
            </div>
        <router-link  class="button" to="/">
                <img src="@/assets/blob4.svg" alt="mygtukas">
                <h3>press</h3>
            </router-link>
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
        background-image: url("@/assets/waves5.svg");
        height: 93vh;
        display: flex;
        flex-direction: column;
        h1 {
            font-size: 3rem;
        }
    }
    .pic {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 93vh;
        font-family: "DM Serif Display", serif;
        background-image: url("@/assets/Ruozs.jpg");
        background-attachment: fixed;
        background-size: cover;
        justify-content: space-evenly;
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