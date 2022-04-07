<template>
    <div class="nuoma-view">
        <h1>NUOMA</h1>

        <h2>SURF</h2>
        <div class="banglente">
            <section class="col-sm row">
                <img class="col-6" src="@/assets/nuoma/soft.png">
                <div class="col-6">
                    <p>Minkšta lenta</p>
                    <p>Ilgis nuo 7'</p>
                    <p>Pradinukui</p>
                    <p>2val. - 10€</p>
                </div>
            </section>
            <section class="col-sm row">
                <img class="col-6" src="@/assets/nuoma/bic.jpg">
                <div class="col-6">
                    <p>Kieta lenta</p>
                    <p>Ilgis nuo 6'</p>
                    <p>Pažengusiam</p>
                    <p>2val. - 15€</p>
                </div>
            </section>
        </div><!---banglente--->

        <h2>IRKLENTĖS</h2>
        <div class="banglente">
            <section class="col-sm row" >
                <img class="col-6" src="@/assets/nuoma/sup.jpeg">
                <div class="col-6">
                    <p>Ilgis 10'</p>
                    <p>Kieta</p>
                    <p>Allrounder</p>
                    <p>1val. - 10€</p>
                </div>
            </section>
            <section class="col-sm row">
                <img class="col-6" src="@/assets/nuoma/coco.jpg">
                <div class="col-6">
                    <p>Ilgis 11'6"</p>
                    <p>Kieta</p>
                    <p>Allrounder</p>
                    <p>1val. - 20€</p>
                </div>
            </section>
        </div><!---irklente--->

        <h2>RIEDLENTĖS</h2>
        <div class="banglente">
            <section class="col-sm row">
                <img class="col-6" src="@/assets/nuoma/carver.jpg">
                <div class="col-6">
                    <p>Carver tipo</p>
                    <p>Surfskate</p>
                    <p>Diena - 30€</p>
                    <p>1val. - 10€</p>
                </div>
            </section>
        </div><!---riedlente--->

        <h2>HIDROKOSTIUMAI</h2>
        <div class="banglente">
            <section class="col-sm row">
                <img class="col-6" src="@/assets/nuoma/wetsuit.jpg">
                <div class="col-6">
                    <p>5mm storio</p>
                    <p>Šlapias</p>
                    <p>Diena - 15€</p>
                    <p>2val. - 5€</p>
                </div>
            </section>
            <section class="col-sm row">
                <img class="col-6" src="@/assets/nuoma/boots.jpg">
                <div class="col-6">
                    <p>Neop. batai</p>
                    <p>Kapišonas</p>
                    <p>Diena - 15€</p>
                    <p>2val. - 5€</p>
                </div>
            </section>
        </div><!---hidrokostiumas--->

    </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    }
}
</script>

<style lang="scss" scoped>
.nuoma-view {
    padding: 7vh 1rem 1rem;
    background: #1000bf;
    color: black;
    h1{
        font-size: 35px;
        color: white;
        padding: 1rem;
    }
    h2 {
        padding: 0.5rem;
        background: white;
    }
}
h2::before {
    content: "";
    background-image: url('@/assets/nuoma/triangle.svg');
    height: 30px;
    width: 60px;
    float: left;
}
h2::after {
    content: "";
    background-image: url('@/assets/nuoma/triangle.svg');
    height: 30px;
    width: 60px;
    float: right;
}

.banglente {
    section {
        background: white;
        margin: 0.5rem 0;
        div {
            align-self: center;
        }
    }
    p {
        margin: 0.5rem;
    }
}
img {
    padding: 2rem;
}
   
</style>