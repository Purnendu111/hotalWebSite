<template>
    <div  style="background: #003724">
        <b-navbar toggleable="lg" style="margin-left: 60px !important; height: 110px">
            <b-navbar-brand href="/"
                >
                <span class="logoTxt"> MalharGreens </span>
                </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="NavUL">
                    <b-nav-item class="navMenuAText marginL70" href="/">Home</b-nav-item>
                    <b-nav-item class="navMenuAText marginL70" href="">Rooms</b-nav-item>
                    <b-nav-item class="navMenuAText marginL70" href="/gallary">Gallery</b-nav-item>
                    <b-nav-item class="navMenuAText marginL70" href="">Associate Services</b-nav-item>
                    <b-nav-item class="navMenuAText marginL70" href="/about_us">About Us</b-nav-item>
                    <b-nav-item class="navMenuAText marginL70" href="/contact">Contact Us</b-nav-item>
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
