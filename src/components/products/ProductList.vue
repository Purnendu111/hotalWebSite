<template>
    <div style="padding: 0 30px">
        <b-row
            ><b-breadcrumb
                :items="items"
                style="width: 500px; background-color: white"
            ></b-breadcrumb>

            <b-col md="1" style="padding: 15px 15px 0px 322px">Sort</b-col>
            <b-col md="2"
                ><b-dropdown
                    id="dropdown-1"
                    text="Best Match"
                    class="m-md-2"
                    variant="primary"
                >
                    <b-dropdown-item>Default</b-dropdown-item>
                    <b-dropdown-item>Best Match</b-dropdown-item>
                    <b-dropdown-item>Priority (high to low)</b-dropdown-item>
                    <b-dropdown-item>Price (low to high)</b-dropdown-item>
                    <b-dropdown-item active
                        >Price (high to low)</b-dropdown-item
                    >
                </b-dropdown></b-col
            >

            <b-col
                v-if="!showListView"
                md="1"
                style="padding: 16px 0 px 16px 0px; font-size: 30px"
                ><b-icon-list-ul @click="convertListToGrid"></b-icon-list-ul
            ></b-col>
            <b-col
                v-else
                md="1"
                style="padding: 16px 0 px 16px 0px; font-size: 30px"
                ><b-icon-grid3x3-gap-fill
                    @click="convertListToGrid"
                ></b-icon-grid3x3-gap-fill
            ></b-col>
        </b-row>
        <div>
            <hr class="cstmHR" />
            <div v-if="!showListView">
                <b-row>
                    <b-col
                        ><b-card-group deck>
                            <b-card
                                v-for="prod in productList"
                                :key="prod.id"
                                no-body
                                :img-src="prod.img"
                                img-height="250px"
                                @click="gotoSpecProd(prod.id)"
                                class="cp"
                                style="
                                    max-width: 200px;
                                    min-width: 200px !important;
                                    margin: 0 0 10px 15px;
                                "
                                img-alt="Image"
                                img-top
                            >
                                <b-card-body class="suggestedProdCard">
                                    <b-card-title
                                        style="
                                            font-size: 18px;
                                            padding-bottom: 10px;
                                        "
                                        >{{ prod.productName }}</b-card-title
                                    >
                                    <b-card-sub-title class="mb-2"
                                        ><b>{{ prod.price }}</b>
                                    </b-card-sub-title>
                                    <b-row>
                                        <b-col cols="7">
                                            <b-card-text
                                                style="font-size: 14px"
                                            >
                                                ({{ prod.reviews }} Reviews)
                                            </b-card-text></b-col
                                        >
                                    </b-row>
                                    <b-row>
                                        <b-col>
                                            <StarRating
                                                :inline="true"
                                                :star-size="25"
                                                :read-only="true"
                                                :show-rating="false"
                                                active-color="#1BC263"
                                                :rating="prod.rating"
                                                :increment="0.01"
                                            ></StarRating></b-col
                                    ></b-row>
                                </b-card-body>
                            </b-card>
                        </b-card-group>
                    </b-col>
                </b-row>
            </div>
            <div v-else>
                <b-row v-for="prod in productList" :key="prod.id">
                    <b-col
                        ><b-card-group deck>
                            <b-card
                                no-body
                                img-height="250px"
                                @click="gotoSpecProd(prod.id)"
                                class="cp"
                                style="
                                    border: none;
                                    margin: 0 0 10px 15px;
                                    background: transparent;
                                "
                                img-alt="Image"
                                img-top
                            >
                                <b-row
                                    no-gutters
                                    style="padding-bottom: 20px; width: 100%"
                                >
                                    <b-col cols="auto">
                                        <b-card-img
                                            :src="prod.img"
                                            alt="Image"
                                            style="
                                                max-width: 120px;
                                                min-width: 120px;
                                                text-align: center;
                                            "
                                            class="rounded-0"
                                            repet="none"
                                        ></b-card-img>
                                    </b-col>
                                    <b-col cols="8">
                                        <b-card-body class="cartItemName">
                                            <b-card-title
                                                style="
                                                    font-size: 18px;
                                                    padding-bottom: 10px;
                                                "
                                                >{{
                                                    prod.productName
                                                }}</b-card-title
                                            >
                                            <b-card-sub-title class="mb-2"
                                                ><b>{{ prod.price }}</b>
                                            </b-card-sub-title>
                                            <b-row>
                                                <b-col cols="7">
                                                    <b-card-text
                                                        style="font-size: 14px"
                                                    >
                                                        ({{ prod.reviews }}
                                                        Reviews)
                                                    </b-card-text></b-col
                                                >
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <StarRating
                                                        :inline="true"
                                                        :star-size="25"
                                                        :read-only="true"
                                                        :show-rating="false"
                                                        active-color="#1BC263"
                                                        :rating="prod.rating"
                                                        :increment="0.01"
                                                    ></StarRating></b-col
                                            ></b-row>
                                        </b-card-body>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-card-group>
                    </b-col>
                </b-row>
            </div>
        </div>
        <UserFavProducts />
    </div>
</template>

<script>
import UserFavProducts from "./UserFavProducts.vue";
import topProdListJSON from "../../assets/items.json";
import StarRating from "vue-star-rating";
export default {
    components: {
        UserFavProducts,
        StarRating,
    },
    data() {
        return {
            items: [
                {
                    text: "Home",
                    href: "/home",
                },
                {
                    text: "Mobile Phones",
                    href: "/productList",
                },
                {
                    text: "Smart Phones",
                    active: true,
                },
            ],
            productList: topProdListJSON.productList,
            showListView: false,
        };
    },
    methods: {
        convertListToGrid() {
            if (this.showListView == true) {
                this.showListView = false;
            } else {
                this.showListView = true;
            }
        },
        gotoSpecProd(id) {
            console.log("id== " + id);
            this.$router.push({
                path: "/productdetails/" + id,
            });
        },
    },
};
</script>
