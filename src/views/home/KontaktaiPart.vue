<template>
    <div class="kontaktai">
            <h1>Susisiekite su mumis</h1>
            <div>
                <p>Mob: <i>+370 686 02356</i></p>
                <p>Email: <i> sales@banglente.com</i></p>
                <p>Adresas: Vėtros g. 8 Klaipėdoje</p>
            </div>
        <form class="container" @submit.prevent="submit">
            <div class="form-group mb-3">
                <label for="exampleInputName">Vardas</label>
                <input type="text" v-model="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Įveskite pilną vardą">
            </div>
            <div class="form-group mb-3">
                <label for="exampleInputEmail">El.paštas </label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Įveskite savo el.paštą">
            </div>
            <div class="form-group mb-3">
                <label for="exampleInputPhone">Tel.numeris</label>
                <input type="phone" v-model="phone" class="form-control" id="exampleInputPhone" aria-describedby="phonelHelp" placeholder="Įveskite savo telefono numerį">
            </div>
            <div class="form-group mb-3">
                <label for="exampleFormControlTextarea">Tekstas</label>
                <textarea class="form-control" v-model="message" id="exampleFormControlTextarea" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
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
        background: #438496;
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