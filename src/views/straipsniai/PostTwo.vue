<template>
    <div class="straipsnis d-flex flex-column w-100">
        <div class="title my-3">
            <h1>Banglentininkų etiketas</h1>
            <h3>2022 Kovo 1 d.</h3>  
        </div>
        <p>Su vis didesnį populiarumą įgaunančiu banglenčių sportu, 
            žmonių skaičius vandenyje auga ir, 
            dėja banglentininkų etiketo suvokimas palaipsniui mažėja.
            Pabandom tai ištaisyti :)</p>
        <img src="@/assets/straipsniai/etiketas.jpg" alt="">
        <div>
            <h3>TAISYKLĖ #1: PIRMUMO TEISĖ</h3>
            <p>Serferis, esantis arčiausiai bangos piko, turi pirmumo teisę.</p>
        </div>
        <div>
            <h3>TAISYKLĖ #2: NE DROP-IN'ink</h3>
            <p>Tai reiškia, kad kažkas su pirmenybe 
                jau stojasi ar jau čiuožia
                ir tu bandai gaudyti tą pačią bangą</p>
        </div>
        <div>
            <h3>TAISYKLĖ #3: PADDLING</h3>
            <p> Nesiirk tiesiai per lineup'ą, kur žmonės gaudo bangas. 
                Išsiirk per kanalą, kur nelūžta bangos 
                ir žmonės negaudo bangų.</p>
        </div>
        <div>
            <h3>TAISYKLĖ #4: LENTA</h3>
            <p> Visada laikykis savo lentos. 
                Stenkis jos niekada nepaleisti. 
                Leash'as nevisada suveikia.</p>
        </div>
        <img src="@/assets/straipsniai/interference.jpg" alt="">
        <h2>Sekmės bangose</h2>
    </div>
</template>

<script>
export default {
    name: 'PostTwo'
}
</script>

<style lang="scss" scoped>
    .straipsnis {
        background-color: #1000bf;
        h1 {
            text-transform: uppercase;
        }
        h3 {
            background-color: white;
            width: max-content;
            color: black;
            margin: 0 auto;
            padding: 0 1rem;
        }
        img {
            margin-bottom: 1rem;
        }
    }
    .carousel-item img {
        max-height: 232px;
    }
</style>