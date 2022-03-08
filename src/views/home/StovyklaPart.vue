<template>
    <div class="stovykla part">
        <h1>Vaikų dienos stovykla 2022</h1>

        <div id="carouselExampleSlidesOnly" class="carousel slide col w-50" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/stovykla/1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/stovykla/2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/stovykla/3.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <router-link  class="button" to="/">
                <img src="@/assets/blob4.svg" alt="mygtukas">
                <h3>press</h3>
            </router-link>
        </div>
        
        <div class="d-flex flex-column col justify-content-around">
            <h3>Tai puiki proga vaikams praleisti visą dieną prie jūros 
                gamtoje, pagauti savo pirmą bangą ar patobulinti 
                banglenčių sporto įgudžius</h3>
            <h3>REGISTRACIJA JAU PRASIDĖJO.</h3>
        </div>                 
    </div>
</template>

<script>
    export default {
        name: 'StovyklaPart',
    }
</script>

<style lang="scss" scoped>
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
    .stovykla {
        background-image: url("@/assets/waves6.svg");
        background-size: cover;
    }
    .part {
        padding-top: 7vh;
        height: 100vh;
        background-color: white;
        display: flex;
        flex-direction: column;
    }
    h1 {
        font-size: 30px;
        font-weight: 700;
        font-family: Georgia, 'Times New Roman', Times, serif;
        padding-top: 1rem;
    }
    .w-50{
        width: 50%;
        margin: 1rem auto;
    }
</style>