<template>
    <div class="straipsnis">
        <div class="title mt-3">
           <h1>Molas Surf Competition 2015</h1>
            <h2>Klaipėdos Šiaurinis Molas</h2>
            <h3>2015 Lapkričio 8 d.</h3>  
        </div>
        <div>
            <p>Pirmosios Lietuvos banglenčių varžybos</p>
            <p>Sąlygos buvo  ne pyragai :)</p>
            <p>Dalyvių buvo 8 ( 6 lietuviai ir 2 latvijos sportininkai )</p>
            <p>Teisėjavo: Gediminas Ustinavičius - Akinys ir Robertas Gradauskas - Bobas</p>
        </div>
        <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/straipsniai/molo_1.jpeg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/straipsniai/molo_2.jpeg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/straipsniai/molo_3.jpeg" alt="Third slide">
                </div>
                <div class="carousel-item active">
                    <img class="d-block w-100" src="@/assets/straipsniai/molo_4.jpeg" alt="fourth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/straipsniai/molo_5.jpeg" alt="Fitht slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/straipsniai/molo_6.jpeg" alt="sixth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/straipsniai/molo_2015_7.png" alt="winners slide">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <p>Organizavo: VšĮ Banglentė ir VšĮ Ekstremalaus Sporto Federacija</p>
    </div>
</template>

<script>
export default {
    name: 'PostTwo'
}
</script>

<style>
    .straipsnis {
        height: 100vh;
        padding-top: 7vh;
    }
    .carousel-item img {
        max-height: 232px;
    }
</style>