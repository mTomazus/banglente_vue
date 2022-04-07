<template>
    <header v-if="mobileScreen" class="{'scrolled-nav': scrollPosition} header_mobile">
        <div class="brand">
            <img alt="logo" src="@/assets/logo-blue.png">
        </div>
        <div class="name">
            <h1>SERFINGAS</h1>
        </div>
        <BurgerNav/>
    </header>
    <header v-if="!mobileScreen" class="{'scrolled-nav': scrollPosition} header_full col-lg-3">
        <div class="brand_full">
            <img alt="logo" src="@/assets/logo-blue.png">
        </div>
        <div class="name_full">
            <h1>SERFINGAS</h1>
        </div>
        <h6 class="footer"> Copyright {{currentYear}}, VšĮ Banglentė</h6>
    </header>
</template>

<script>
    import BurgerNav from "../components/BurgerNav"
    export default {
        name: 'HeaderMain',
        data() {
            return {
                scrollPosition: null,
                mobileScreen: true,
                currentYear: '2022',
            };
        },
        components: {
            BurgerNav
        },
        created() {
            window.addEventListener("resize", this.checkScreen);
            this.checkScreen();
        },
        methods: {
            checkScreen() {
                this.windowWidth = window.innerWidth;
                if (this.windowWidth <=800) {
                    this.mobileScreen = true;
                    return;
                }
                this.mobileScreen = false;
                return;
            },
        },        
    };
</script>

<style scoped lang="scss" >
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
    .header_mobile {
        height: 7vh;
        width: 100vw;
        background: white;
        display: flex;
        position: fixed;
        justify-content: space-around;
        z-index: 1000;
    }
    .brand{
        padding: 7.5px;
        img{
            height: 5vh;
            margin: auto;
            padding: 0 1vh;
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
            color: #1000bf;
        }
    }
    .header_full {
        position: relative;
        nav {
            right: 0;
            top: 0;
            position: absolute;
        }
    }
    .brand_full {
        margin-top: 2rem;
    }
    .name_full {
        margin-top: 2rem;
        color: #1000bf;
    }
    .footer {
        color: #1000bf;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
