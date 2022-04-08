<template>
    <div class="stovykla part">
        <h2>puiki proga vaikams praleisti atvyrame ore prie jūros.</h2>
        <h1>Vaikų dienos stovykla 2022</h1>
        <h2>pagauti savo pirmą bangą ar pasitobulinti įgūdžius</h2>               
        <router-link type="button" class="button" :to="{name: 'stovykla'}">
            <h3>REGISTRACIJA</h3>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'StovyklaPart',
    }
</script>

<style lang="scss" scoped>
        
    .button {
        bottom: 50px;
        padding: 1rem;
        width: max-content;
        margin: 0 1rem 2.5rem;
        text-decoration: none;
        background: white;
        h3 {
            color: black;
            text-transform: uppercase;
            font-family: "DM Serif Display";
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
    .part {
        height: 93vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-weight: 700;
        color: white;
        text-transform: uppercase;
    }
    h1 {
        font-size: 40px;
        font-family: "DM Serif Display", serif;
        font-weight: 700;
        padding-top: 1rem;
        letter-spacing: 2px;
    }
    h2 {
        text-align: left;
        font-size: 25px;
        font-family: Alegreya Sans;
        padding: 0 1rem;
    }
    .desktop {
        h1 {
            font-size: 60px;
        }  
        h2 {
            width: fit-content;
            font-size: 40px;
            text-align: center;
            width: 80%;
            margin: 3rem auto 0;
            background: #ffffff54;
        }
    }
    .w-50{
        margin: auto;
    }
</style>