<template>
    <div  style="background: #2a5726">
        <b-navbar toggleable="lg" style="margin-left: 50px !important;">
            <b-navbar-brand href="/"
                >
                    <img src="../../assets/crownLogo.png" height="60px" width="70px"/><span class="logoTxt"> a Luxury Experience</span>
                </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="NavUL">
                    <b-nav-item class="navMenuAText marginL70" href="">Home</b-nav-item>
                    <b-nav-item class="navMenuAText marginL70" href="">Rooms</b-nav-item>
                    <b-nav-item class="navMenuAText marginL70" href="">Gallery</b-nav-item>
                    <b-nav-item class="navMenuAText marginL70" href="">About Us</b-nav-item>
                    <b-nav-item class="navMenuAText marginL70" href="">Contact Us</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "TopNavMenu",
    data() {
        return {
            catagory: {},
            brand: {},
        };
    },
    async created() {
        
    },
    methods: {},
};
</script>
