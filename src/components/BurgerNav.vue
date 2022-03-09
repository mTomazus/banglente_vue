<template>
    <header class="{'scrolled-nav': scrollPosition}">
        <div class="brand">
            <img alt="logo" src="@/assets/logo.png">
        </div>
        <div class="name">
            <h1>BANGLENTĖ</h1>>
        </div>
        <nav>
            <ul v-show="!mobile" class="navigation">
                <li class="link"><router-link :to="{ name: 'home' }">Home</router-link></li>
                <li class="link"><router-link :to="{ name: 'about' }">About</router-link></li>
            </ul>
            <div id="burger" v-show="mobile" @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }" >
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <transition name="mobile-nav" @click="toggleMobileNav">
                <ul v-show="mobileNav" class="dropdown-nav container">
                    <li><router-link class="link" :to="{name: 'home'}">Pradžia</router-link></li>
                    <li><router-link class="link" to="{name: '' }">Pamokos</router-link></li>
                    <li><router-link class="link" to="{name: '' }">Stovykla</router-link></li>
                    <li><router-link class="link" to="{name: '' }">Nuoma</router-link></li>
                    <li><router-link class="link" to="{name: '' }">Kelionės</router-link></li>
                    <li><router-link class="link" :to="{name: 'about' }">Apie mus</router-link></li>
                    <li><router-link class="link" :to="{name: 'straipsniai'}">Straipsniai</router-link></li>
                    <li>social</li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'BurgerNav',
        data() {
            return {
                scrollPosition: null,
                mobile: true,
                mobileNav: null,
                windowWidth: null,
            };
        },
        created() {
            window.addEventListener("resize", this.checkScreen);
            this.checkScreen();
        },
        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
            },
            checkScreen() {
                this.windowWidth = window.innerWidth;
                if (this.windowWidth <=750) {
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
                return;
            },
        },
    };
</script>

<style scoped lang="scss" >
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
    .brand{
        padding: 7.5px;
        img{
            height: 5vh;
            margin: auto;
            padding: 0 1vh;
            filter: invert(1);
        }
    }
    .name{
        font-family: 'DM Serif Display', serif;
        display: flex;
        height: 7vh;
        margin: auto;
        h1 {
            font-size: 5vh;
            padding: 0;
            margin: auto;
            color: white;
        }
    }
    #burger{
        padding: 0 2vh;
        transition: 1.5s ease all;
        display: flex;
        flex-direction: column;
        min-height: 7vh;
        justify-content: center;
        div{
            height: 4px;
            width: 30px;
            margin: 4px;
            background-color: white;
            border-radius: 10px;
        }
    }
    .icon-active {
        transform: rotate(90deg);
    }
    .dropdown-nav{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: fixed;
        width: 80vw;
        max-width: 80vw;
        height: 100%;
        background-color: #438496;
        top: 7vh;
        right: 0;
        list-style: none;
        transform-origin: top right;
        color: white;
        z-index: 100;
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
        transition: 1.5s ease all;
    }
    .mobile-nav-enter-from,
    .mobile-nav-leave-to{
        transform: rotate(-90deg);
    }
    .mobile-nav-enter-to{
        transform: rotate(0deg);
    }
</style>
