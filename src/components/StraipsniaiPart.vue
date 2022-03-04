<template>
    <div class="straipsniai part mb-4">
        <div class="container">
            <div>
                <h1>Naujausi straipsniai ----</h1>
                <div class="wrapper">
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
                    <div class="card">
                        <img class="card-img-top" src="" alt="Card image cap">
                        <div class="card-body">
                            <h2 class="card-title">Bangų anatomija</h2>
                            <p class="card-text">2022 Kovas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        overflow-x: auto;
    }
    .wrapper::-webkit-scrollbar{
        width: 0;
    }
    .card {
        height: 40vh;
        min-width: 60vw;
    }
</style>