<template>
    <div class="pamokos">
        <div class="content">
            <h1>POPULIARIOS PAMOKOS</h1>
            <div class="section d-md-flex">
                <div class="card col-md">
                    <img class="card-img-top" src="@/assets/pamokos/paketas.jpg" alt="">
                    <div class="card-title text-uppercase">
                        <h3>Pradedančio paketas</h3>
                        <p>120 Eur</p>
                    </div>
                    <div class="card-text">
                        <p>Pakete dvi pamokos, pirmoje ramiame vandenyje išmokstam irklavimo ir atsistojimo techniką. Antroje pozicionavimą bangose ir technikos tolimesnis įsisavinimas. </p>
                    </div>
                </div>

                <div class="card col-md">
                    <img class="card-img-top" src="@/assets/pamokos/privati.jpg" alt="">
                    <div class="card-title text-uppercase">
                        <h3>Privati pamoka</h3>
                        <p>70 Eur</p>
                    </div>
                    <div class="card-text">
                        <p>Per šią pusantros valandos privačią serfingo pamoką pristatysime Jums etiketo, saugumo, serfingo pagrindus, irklavimo techniką, pozicionavimą bangose bei atsistojimo būdus.</p>
                    </div>
                </div>

                <div class="card col-md">
                    <img class="card-img-top" src="@/assets/pamokos/grupe.jpg" alt="">
                    <div class="card-title text-uppercase">
                        <h3>Grupinė pamoka</h3>
                        <p>30 Eur</p>
                    </div>
                    <div class="card-text">
                        <p>Idealiai tinka pradedantiesiems ar tiems, kurie nori prisiminti pagrindus ir techniką. Pamoka kartu su mumis reiškia, kad mokotės iš geriausių, kad galėtumėte tapti geriausiais.</p>
                    </div>
                </div>
            </div>
            <h1>KITOS PAMOKOS</h1>
            <div class="section container-md">
                <div class="card">
                    <img class="card-img-top" src="@/assets/pamokos/dviem.jpg" alt="">
                    <div class="card-title text-uppercase">
                        <h3>Pusiau privati</h3>
                        <p>90 Eur</p>
                    </div>
                    <div class="card-text">
                        <p>Geriausiai tinka 2 asmenims - draugams ar draugėms, poroms ar artimiesiems. Čia mes pristatysime Jums saugumo ir serfingo pagrindus, irklavimo techniką bei atsistojimo būdus.</p>
                    </div>
                </div>

                <div class="card">
                    <img class="card-img-top" src="@/assets/pamokos/bernvakaris.jpg" alt="">
                    <div class="card-title text-uppercase">
                        <h3>Korporatyvas</h3>
                        <p>nuo 250 Eur</p>
                    </div>
                    <div class="card-text">
                        <p>Subūrėte didelę grupę nuo 6 iki 12 žmonių, kuri norėtų išbandyti save bangose? ? Pabūti kartu, patirti geras emocijas bei palaikyti vienas kitą? Tai tinkamiausias pasirinkimas jums!</p>
                    </div>
                </div>

                <div class="card">
                    <img class="card-img-top" src="@/assets/pamokos/extra.jpg" alt="">
                    <a href="#" class="card-title text-uppercase">
                        <h3>Extra Privati</h3>
                        <p>120 Eur</p>
                    </a>
                    <div class="card-text">
                        <p>Ši serfingo pamoka yra atvira visiems įvairaus amžiaus žmonėms ir orientuota į tai, kad kilstelėtų Jūsų techniką į naują lygį. Jei ieškote vertos sau pamokos, tai Jūs ją radote.</p>
                    </div>
                </div>
                <div class="card coupon">
                    <h1 class="m-2">DOVANŲ KUPONAS</h1>
                    <div class="px-4 py-2">
                        <p>Artėja gimtadienis? Jubiliejus? Arba šiaip norite duoti puikią dovaną ypatingam žmogui?</p>
                        <p >Banglentės banglenčių mokyklos dovanų kuponas - puiki dovana bet kokiai progai.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .pamokos {
        background-color: #1000bf;
    }
    .content {
        padding: 7vh 1rem 1rem;
    }
    .section {
        gap: 2rem;
    }
    .card {
        margin-bottom: 1rem;
    }
    .card-img-top {
        height: 194px;
    }
    .card-title {
        position: absolute;
        color: white;
        height: 68px;
        padding: 8px;
        left: 0;
        right: 0;
        text-decoration: none;
        background: #1000bf75;
        top: 126px;
        h3, p {
            margin: 0;
            font-weight: 700;
            letter-spacing: 3px;
        }
    }
    .card-text p{
        margin: 0;
        padding: 0.5rem;
        color: black;
    }
    .coupon {
        margin-top: 1rem;
        p {
            color: black;
        }
    }
    .coupon h1 {
        background: #1000bf;
        color: white;
        letter-spacing: 5px;
        font-weight: 700;
    }
    h1 {
        padding: 1rem;
    }  
</style>
