export default {
    data() {
        return {
            mobile: true,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <=800) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            return;
        },
    },
}