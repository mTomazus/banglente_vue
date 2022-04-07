<template>
    <div class="straipsnis d-flex flex-column w-100">
        <div class="title my-3">
            <h1>Hidrokostiumai</h1>
            <h3>2022 Kovo 10 d.</h3>  
        </div>
        <p>Hidrokostiumai turi tris uždavinius. Pirmiausias ir pagrindinis
             yra neduoti jums sušalti. Antras ir trečias surištas su jūsų 
             apsauga nuo saulės ir nuo mechaninių sužeidimų.</p>
        <img src="@/assets/straipsniai/neoprene.png" alt="">
        <div>
            <h3>DYDIS</h3>
            <p>Svarbu, 
              kad hidrokostiumas gerai priglustų prie jūsų kūno, kad kuo 
              mažiau sušilusio vandens lengvai neišbėgtų iš jo. 
              Neprigludęs kostiumas nebus toks šiltas dėl nepageidautinos 
              vandens cirkuliacijos.</p>
        </div>
        <div>
            <h3>TIPAI</h3>
            <p>Pilnų (ilgomis rankovėmis, ilgomis kojomis ir kapišonu), 
                vasariniai (trumpomis rankovėmis, trumpomis kojomis) 
                ir žieminiai (6mm storio su kapišonu). Skirstomi dar pagal 
                užtraugtuko padėtį (nugara ar krūtinė).</p>
        </div>
        <div>
            <h3>RASHGUARD</h3>
            <p>Bėrimo apsauga skirta ne tam, kad jus sušildytų, bet tam, 
                kad suteiktų apsaugą nuo lentos ir nuo saulės.</p>
        </div>
        <div>
            <h3>STORIS</h3>
            <p>Hidrokostiumo storis yra matuojamas milimetrais. 
                Dažnai pamatysite storį pažymėtą kaip 3/2 arba 5/4/3. 
                Tai reiškia, kad storiausia hidrokostiumo dalis yra 5 mm., 
                o ploniausia yra 3 mm.</p>
        </div>
        <img src="@/assets/straipsniai/temp.jpg" alt="">
        <div>
            <h3>PRIEŽIŪRA</h3>
            <p> Kad tarnautų kiek įmanoma ilgiau, 
                būtinai praskaukite hidrokostiumą po naudojimo švariu
                šaltu vandeniu. Saugok savo hidrokostiumą nuo tiesiogių 
                saulės spindulių, ypač vidinę pusę.</p>
        </div>
        <h2>Sekmės bangose</h2>
    </div>
</template>

<script>
export default {
    name: 'PostThree'
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