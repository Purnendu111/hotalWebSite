<template>
    <div style="padding: 0 30px">
        <b-row class="margin0">
            <b-card-group style="width: 100%">
                <b-card
                    no-body
                    class="overflow-hidden cardCstmSolo"
                    style="width: 100%"
                >
                    <b-row no-gutters style="width: 100%">
                        <b-col cols="3">
                            <b-row style="padding-bottom: 20px; width: 100%">
                                <b-col>
                                    <b-card-img
                                        :src="getImgUrl(data.img)"
                                        alt="Image"
                                        class="rounded-0"
                                        height="300px"
                                        style="width: 325px"
                                        repet="none"
                                    ></b-card-img>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <b-icon
                                        icon="dash-circle"
                                        id="minusProd"
                                        @click="minusprod"
                                        aria-hidden="true"
                                    ></b-icon>
                                    <span class="addedProd">{{
                                        addedProd
                                    }}</span>
                                    <b-icon
                                        icon="plus-circle"
                                        @click="addprod"
                                        aria-hidden="true"
                                    ></b-icon>
                                </b-col>
                                <b-col class="text-right">
                                    <b-button
                                        size="sm"
                                        class="mb-2"
                                        @click="addToCart"
                                    >
                                        <b-icon
                                            icon="bag-fill"
                                            aria-hidden="true"
                                        ></b-icon>
                                        Add to Cart
                                    </b-button>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col class="text-right">
                                    <b-button
                                        size="sm"
                                        style="padding: 5px 15px"
                                        class="mb-2"
                                        href="/shipping"
                                    >
                                        <b-icon
                                            icon="credit-card2-back-fill"
                                            aria-hidden="true"
                                        ></b-icon>
                                        Buy Now
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col cols="9">
                            <b-card-body
                                class="soloProdCard"
                                :title="data.productName"
                            >
                                <b-card-body class="cstmCard padding0">
                                    <b-row>
                                        <b-col cols="auto" class="paddingL15">
                                            <StarRating
                                                :inline="true"
                                                :star-size="25"
                                                :read-only="true"
                                                :show-rating="false"
                                                active-color="#1BC263"
                                                :rating="data.rating"
                                                :increment="0.01"
                                            ></StarRating>
                                        </b-col>
                                        <b-col
                                            align-self="center"
                                            style="
                                                font-size: 15px;
                                                padding-left: 5px;
                                            "
                                        >
                                            {{ data.reviews }}reviews
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                                <hr class="cstmHR" />
                                <b-card-text class="loopPrice">
                                    <b>${{ data.price }}</b>
                                </b-card-text>
                                <b-card-sub-title class="mb-2"
                                    ><b>Offers:</b>
                                </b-card-sub-title>
                                <b-card-text>
                                    The Product is Available for free shipping.
                                    Order today to pick your order from store
                                    near you off shipping charges.
                                </b-card-text>
                                <b-card-sub-title class="mb-2"
                                    ><b>Product Description:</b>
                                </b-card-sub-title>
                                <b-card-text>
                                    <ul>
                                        <li>Model Name: One Plus 8T</li>
                                        <li>Memory Storage Capacity: 256</li>
                                        <li>Operating System: Android 11</li>
                                    </ul>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </b-card-group>
        </b-row>

        <div>
            <UserFavProducts />
        </div>
    </div>
</template>

<script>
import UserFavProducts from "./UserFavProducts.vue";
import prod from "../../assets/items.json";
import StarRating from "vue-star-rating";
export default {
    name: "soloProd",
    components: {
        UserFavProducts,
        StarRating,
    },
    data() {
        return {
            addedProd: 1,
            value: 3,
            totalreiews: 219,
            topProdList: prod.topProdList,
            data: "",
        };
    },
    created() {
        console.log("this.$route.params.id====" + this.$route.params.id);
        this.data = this.topProdList.find(
            (item) => item.id === this.$route.params.id
        );
        console.log(JSON.stringify(this.data) + "===this.data");
    },
    mounted() {
        document.addEventListener("contextmenu", (event) =>
            event.preventDefault()
        );
    },
    methods: {
        addprod() {
            this.addedProd = parseInt(this.addedProd) + 1;
        },
        minusprod() {
            if (this.addedProd > 1) {
                this.addedProd = parseInt(this.addedProd) - 1;
            }
        },
        addToCart() {
            this.$store.state.cartCount =
                parseInt(this.$store.state.cartCount) +
                parseInt(this.addedProd);
            // let found = this.$store.state.cartItems.find(
            //     (product) =>
            //         product.productId === item.productId && product.colour === item.colour
            // );

            // if (found) {
            //     found.qty++;
            // } else {
            //     // Clone the object.
            //     const insert = JSON.parse(JSON.stringify(item));
            //     state.inCart.push(insert);
            // }
        },
        getImgUrl: function (imagePath) {
            console.log("@/assets/img/======" + imagePath);
            return require("@/assets/img/" + imagePath);
        },
    },
};
</script>
