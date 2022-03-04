<template>
    <header class="{'scrolled-nav': scrollPosition}">
        <div class="brand">
            <img alt="logo" src="@/assets/logo.png">
        </div>
        <div class="name">
            <img alt="banglente" src="@/assets/banglente.png">
        </div>
        <nav>
            <ul v-show="!mobile" class="navigation">
                <li class="link"><router-link to="{ name: 'home' }">Home</router-link></li>
                <li class="link"><router-link to="{ name: 'about' }">About</router-link></li>
            </ul>
            <div id="burger" v-show="mobile" @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }" >
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <transition name="mobile-nav" @click="toggleMobileNav">
                <ul v-show="mobileNav" class="dropdown-nav container">
                    <li><router-link class="link" to="/">Pradžia</router-link></li>
                    <li><router-link class="link" to="{ name: '' }">Pamokos</router-link></li>
                    <li><router-link class="link" to="{ name: '' }">Stovykla</router-link></li>
                    <li><router-link class="link" to="{ name: '' }">Nuoma</router-link></li>
                    <li><router-link class="link" to="{ name: '' }">Kelionės</router-link></li>
                    <li><router-link class="link" to="{ name: 'about' }">Apie mus</router-link></li>
                    <li><router-link class="link" to="{ name: '' }">Straipsniai</router-link></li>
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
    .brand{
        padding: 7.5px;
        img{
            height: 35px;
            margin: auto;
        }
    }
    .name{
        padding: 5px;
        img{
            height: 40px;
            margin: auto;
        }
    }
    #burger{
        padding: 8px;
        transition: 1.5s ease all;
        div{
            height: 3px;
            width: 30px;
            margin: 7px;
            background-color: black;
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
        background-color: rgb(235, 235, 235);
        top: 7vh;
        right: 0;
        list-style: none;
        transform-origin: top right;
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
