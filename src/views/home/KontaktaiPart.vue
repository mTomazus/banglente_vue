<template>
    <div class="kontaktai">
            <h1>Susisiekite su mumis</h1>
            <div>
                <p>Mob: <i>+370 686 02356</i></p>
                <p>Email: <i> sales@banglente.com</i></p>
                <p>Adresas: Vėtros g. 8 Klaipėdoje</p>
                <p>VšĮ Banglentė</p>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'KontaktaiPart',
    }
</script>

<style lang="scss" scoped>
    .kontaktai {
        height: 93vh;
        padding: 0 0 7vh;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h1 {
            padding: 1rem 0;
            font-family: "DM Serif Display", serif;
            font-weight: 700;
            text-transform: uppercase;
        }
        div {
            font-size: 1.2rem;
            text-transform: uppercase;
        }
    }
</style>