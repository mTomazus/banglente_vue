<template>
    <div class="pamokos part">
        <div class="pic">
            <div>
                <h1 class="bg-white mt-4">NORI PABANDYTI?</h1>
                <h2 class="text-white">GERIAUSIA MOKYKLA LIETUVOJE</h2>
            </div>
            <div class="text-white">
                <h3 class="mt-4">Pamokos pradedantiesiems ir ne tik!</h3>   
            </div>
            <router-link  class="button" :to="{name: 'pamokos'}">
                <h3>Daugiau info čia</h3>
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
            color: black;
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
        background-position-x: center;
        justify-content: space-evenly;
    }
    .button {
        bottom: 50px;
        padding: 1rem;
        position: absolute;
        text-decoration: none;
        right: 0;
        background: white;
        img {
            width: 100px;
        }
        h3 {
            color: black;
            text-transform: uppercase;
            margin: 0;
            background: linear-gradient(90deg, rgba(8,2,106,1) 0%, rgba(52,25,143,1) 33%, rgba(18,109,187,1) 66%, rgba(0,212,255,1) 100%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: blink 2s infinite;
        }
    }
    @keyframes blink {
        0% {opacity: 0.2;}
        50% {opacity: 1;}
        100% {opacity: 0.2;}
    }
</style>