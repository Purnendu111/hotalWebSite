<template>
    <div>
        <b-navbar toggleable="lg">
            <b-navbar-brand href="/home"
                ><b-icon icon="house-door-fill" aria-label="House"></b-icon
            ></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown
                        dropright
                        id="my-nav-dropdown"
                        text="Categories"
                        class="paddingtop10"
                        toggle-class="nav-link-custom"
                        offset="15"
                    >
                        <b-dropdown-item
                            v-for="data in catagory"
                            :key="data.id"
                            href="/productlist"
                            >{{ data.categoryName }}</b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown
                        dropright
                        id="my-nav-dropdown"
                        text="Brands"
                        class="paddingtop10"
                        toggle-class="nav-link-custom"
                        offset="15"
                    >
                        <b-dropdown-item
                            v-for="data in brand"
                            :key="data.brandId"
                            href="/productlist"
                            >{{ data.brandName }}</b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                    <b-nav-item href="">Sales</b-nav-item>
                    <!-- <b-nav-item href="">Brands</b-nav-item> -->
                    <b-nav-item href="">Blog</b-nav-item>
                    <b-nav-item href="">About Us</b-nav-item>
                    <b-nav-item href="">Contact</b-nav-item>
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
        let self = this;
        await self.axios
            .get(
                "http://aaefcbdc7840e4ba889880a250210a8d-660256375.us-east-2.elb.amazonaws.com/categories",
                {
                    headers: {
                        "transaction-id": "",
                        // "Access-Control-Allow-Origin": "*",
                    },
                }
            )
            .then((response) => {
                /* eslint-disable */
                console.log("Response:");
                console.log(response.data);
                self.catagory = response.data;
                // self.data.productname = response.data.productName;
            })
            .catch(function (error) {
                console.log(error);
            });
        await self.axios
            .get(
                "http://aaefcbdc7840e4ba889880a250210a8d-660256375.us-east-2.elb.amazonaws.com/brands",
                {
                    headers: {
                        //  'apikey': 'NbRoyQrr1bURYDTET2U27bQrNdvZVozA',
                        "transaction-id": "",
                        // 'Access-Control-Allow-Origin' : '*'
                    },
                }
            )
            // {
            //     headers: {
            //         "Access-Control-Allow-Origin": "*",
            //     },
            // }
            // )
            .then((response) => {
                console.log("Response:");
                console.log(response.data);
                self.brand = response.data;
                // self.data.productname = response.data.productName;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    methods: {},
};
</script>
