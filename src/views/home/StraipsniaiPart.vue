<template>
    <div class="straipsniai part">
        <h1>Naujausi straipsniai ----</h1>
        <div class="wrapper">
            <div class="card">
                <img class="card-img-top" src="@/assets/straipsniai/a-wave.png" alt="Card image cap">
                <div class="card-body">
                    <h2 class="card-title">Bangų anatomija</h2>
                    <p class="card-text">2022 Kovas</p>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="" alt="Card image cap">
                <div class="card-body">
                    <h2 class="card-title">Bangų anatomija</h2>
                    <p class="card-text">2022 Kovas</p>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="" alt="Card image cap">
                <div class="card-body">
                    <h2 class="card-title">Bangų anatomija</h2>
                    <p class="card-text">2022 Kovas</p>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="" alt="Card image cap">
                <div class="card-body">
                    <h2 class="card-title">Bangų anatomija</h2>
                    <p class="card-text">2022 Kovas</p>
                </div>
            </div>
        </div>
        <h2>Daugiau rasite čia</h2>
    </div>
</template>

<script>
    export default {
        name: 'StraipsniaiPart',
    }
</script>

<style lang="scss" scoped>
    h1 {
        margin: 3rem 0;
        font-size: 3rem;
    }
    .straipsniai {
        height: 93vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-image: url("@/assets/circle2.svg");
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin: 0 1rem;
        overflow-x: auto;
    }
    .wrapper::-webkit-scrollbar{
        width: 0;
    }
    .card {
        height: 400px;
        min-width: 60vw;
    }
    .card-body {
        min-height: 100px;
        background: floralwhite;
    }
    .card-img-top {
        height: 300px;
    }
</style>