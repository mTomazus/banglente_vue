<template>
    <h1>straipsniai</h1>

    <div class="d-md-flex flex-wrap row-cols-md-2">

        <router-link :to="{name: '1'}">
            <div class="card col">
                <div class="card-header">
                    <h5 class="card-title">Molas Surf 2015</h5>
                    <p class="card-text">Pirmosios banglenčių varžybos Lietuvoje.</p>
                </div>
                <div class="card-body">
                </div>
            </div>
        </router-link>
        <router-link :to="{name: '2'}">
            <div class="card col">
                <div class="card-header">
                    <h5 class="card-title">Banglentininkų Etiketas</h5>
                    <p class="card-text">Ką reikia žinoti kiekvienam banglentininkui.</p>
                </div>
                <div class="card-body">
                </div>
            </div>
        </router-link>
        <router-link :to="{name: '3'}">
            <div class="card col">
                <div class="card-header">
                    <h5 class="card-title">Hidrokostiumai</h5>
                    <p class="card-text">Naudinga informacija ir patarimai.</p>
                </div>
                <div class="card-body">
                </div>
            </div>
        </router-link>  
        <router-link :to="{name: '4'}">
            <div class="card col">
                <div class="card-header">
                    <h5 class="card-title">Bangų anatomija</h5>
                    <p class="card-text">Naudinga informacija ir patarimai.</p>
                </div>
                <div class="card-body">
                </div>
            </div>
        </router-link> 
    </div>
</template>

<script>

</script>


<style lang="scss" scoped>
    .card {
        margin: 1rem;
        color: black;
    }
    h1 {
        text-transform: uppercase;
        margin-top: 1rem;
    }
    a {
        text-decoration: none;
        .card-body {
            background-size: cover;
            height: 200px; 
        }
    }
    a:nth-child(1) {
        .card-body {
           background-image: url('@/assets/straipsniai/posteris4.png');
        }
    }
    a:nth-child(2) {
        .card-body {
           background-image: url('@/assets/straipsniai/interference.jpg');
        }
    }
</style>