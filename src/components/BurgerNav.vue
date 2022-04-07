<template>
    <nav>
    <!-- Burger mobile button -->
        <div v-if="mobile" class="burger-mobile" @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }" >
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    <!-- Burger desktop button -->
        <div v-if="!mobile" class="burger-desktop" @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }" >
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    <!-- mobile nav menu -->    
        <transition v-if="mobile" name="mobile-nav" @click="toggleMobileNav">
            <ul v-show="mobileNav" class="dropdown-nav container">
                <BurgerLinks/>
            </ul>
        </transition>
    <!-- desktop nav menu -->
        <transition v-if="!mobile" name="desktop-nav" @click="toggleMobileNav">
            <ul v-show="mobileNav" class="dropdown-desktop-nav container">
                <BurgerLinks/>
            </ul>
        </transition>
    </nav>
</template>

<script>
    import BurgerLinks from '@/components/BurgerLinks.vue'
    export default {
        name: 'BurgerNav',
        components: {
            BurgerLinks
        },
        data() {
            return {
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
                if (this.windowWidth <=800) {
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
    .burger-mobile {
        padding: 0 20px;
        transition: 1.5s ease all;
        display: flex;
        flex-direction: column;
        min-height: 7vh;
        float: right;
        justify-content: center;
        div{
            height: 5px;
            width: 30px;
            margin: 3px;
            background-color: #1000bf;
            border-radius: 10px;
        }
    }
    .burger-desktop {
        padding: 1rem;
        transition: 1.5s ease all;
        display: flex;
        flex-direction: column;
        position: fixed;
        z-index: 100000;
        div{
            height: 5px;
            width: 30px;
            margin: 3px;
            background-color: #ffffff;
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
        height: 93vh;
        background-color: #1000bf;
        top: 7vh;
        right: 0;
        list-style: none;
        transform-origin: top right;
        color: white;
        z-index: 100;
    }
    .dropdown-desktop-nav {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #1000bf;
        top: 0;
        left: 0;
        list-style: none;
        color: white;
        z-index: 1000;
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
        transition: 1s ease all;
    }
    .mobile-nav-enter-from,
    .mobile-nav-leave-to{
        transform: rotate(-90deg);
        opacity: 0.5;
    }
    .mobile-nav-enter-to{
        transform: rotate(0deg);
        opacity: 1;
    }
    .desktop-nav-enter-active,
    .desktop-nav-leave-active{
        transition: 1s ease all;
    }
    .desktop-nav-enter-from,
    .desktop-nav-leave-to{
        transform: translateX(-100%);
        opacity: 0.5;
    }
    .desktop-nav-enter-to{
        transform: translateX(0%);
        opacity: 1;
    }
</style>
