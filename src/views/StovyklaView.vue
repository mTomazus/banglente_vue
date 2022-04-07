<template>
    <div v-bind:class="{ mobile: mobile, desktop: !mobile }" class="stovykla">
        <h1>Vaikų vasaros dienos stovykla 2022</h1>
        <h6>Stovykla organizuojama nuo Birželio vidurio iki Rugpjūčio pabaigos, 
            grupės yra riboto dydžio, todėl skambinkite dabar, kad gautumėte vietą 
            norimoje pamainoje. Grupės sudaromos iš 6-10 mokančių plaukti 
            vaikų <strong>nuo 10 iki 18 metų.</strong>
        </h6>
        <h5><a href="@/assets/stovykla/programa.pdf" target="_blank" style="display: initial">Stovyklos preliminari programa čia</a></h5>
        <h6>Pamaina trunka 5 dienas nuo pirmadienio iki penktadienio (nuo 9:00 iki 17:30).</h6>
        <p>Pamainos kaina 220€.</p>
        <div id="carousel2" class="carousel slide mx-auto" data-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="9" aria-label="Slide 10"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="10" aria-label="Slide 11"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="11" aria-label="Slide 12"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="12" aria-label="Slide 13"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="13" aria-label="Slide 14"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="14" aria-label="Slide 15"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="15" aria-label="Slide 16"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="16" aria-label="Slide 17"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="17" aria-label="Slide 18"></button>
                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="18" aria-label="Slide 19"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="@/assets/stovykla/20.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/21.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/22.jpg" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/4.jpg" alt="Fourth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/5.jpg" alt="Fift slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/6.jpg" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/7.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/8.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/9.jpg" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/10.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/11.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/12.jpg" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/13.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/14.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/15.jpg" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/16.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/17.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/18.jpg" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/stovykla/19.jpg" alt="First slide">
                </div>
            </div>
            <a class="carousel-control-prev" data-bs-target="#carousel2" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" data-bs-target="#carousel2" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>
        <h6 class="mt-2">Ši savaitinė programa apima tiek teorines, 
            tiek praktines žinias apie jūrą, bangas ir banglentes. 
            Stovykla tinka tiek pirmą kartą atvykstančiam į stovyklą, 
            tiek ir trečią ar ketvirtą. Visi instruktoriai patyrę Klaipėdos 
            gelbėtojai ir ilgametę patirtį turintys banglenčių instruktoriai, 
            bet, svarbiausia, jie žino, kaip padaryti stovyklą nepamirštamu 
            vasaros nuotykiu kiekvienam stovyklos dalyviui.
        </h6>   
        <h5>Norint registruotis į stovyklą, reikia užpildyti registracijos anketą</h5>
        
        <button type="button" onclick="location.href='https://www.banglente.com/stovykla'" class="btn btn-reg">
            Registracija
        </button>

        <h5 class="m-3">ir atlikti 70eur pavedimą į "VšĮ Banglentė" sąskaitą - LT227300010144594068 (Swed).</h5>
    </div>
</template>

<script>
import screenSize from '@/mixins/ScreenSize'
export default {
    mixins:[screenSize],
    data() {
        return {
           
        }
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        line-height: 35px;
    }
    .desktop {
        height: 100%;
        position: absolute;
        padding: 0 2rem;
        .slide {
            max-width: 600px;
        }
        h1 {
            width: 70%;
            margin: 1rem auto;
        }
    }
    .mobile {
        padding: 7vh 1rem 1rem;
    }
    .stovykla {
        color: white;
        background-color: #1000bf;
        h1{
            text-transform: uppercase;
            margin-top: 2rem;
            font-size: 2.5rem;
        }
        a {
            color: white;
        }
    }
    .btn-reg {
        color: #1000bf;
        background-color: #ffff;
        border-color: #ffff;
    }
    .btn-reg:hover {
        color: #ffff;
        background-color: rgb(22, 107, 218);
        border-color: #1000bf;
    }
    .modal-body {
        padding: 0;
    }
    .modal-title {
        color: #1000bf;
    }

</style>