<template>
    <div>
        <b-sidebar
            id="cartDetails"
            width="500px"
            title="Sidebar"
            right
            backdrop
            shadow
        >
            <div class="px-3 py-2">
                <b-row>
                    <b-col>
                        <b-card
                            v-for="prod in cartItem"
                            :key="prod.id"
                            no-body
                            img-height="150px"
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
                                <b-col cols="4">
                                    <b-card-img
                                        :src="getImgUrl(prod.img)"
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
                                    <b-card-body
                                        class="cartItemName"
                                        :title="prod.prodName"
                                    >
                                        <b-card-text>
                                            ${{ prod.price }}
                                        </b-card-text>
                                        <b-row>
                                            <b-col>
                                                <button
                                                    :disabled="
                                                        prod.cartquantity <= 1
                                                    "
                                                    @click="
                                                        cartManipulate(
                                                            prod,
                                                            'less'
                                                        )
                                                    "
                                                    style="
                                                        background: transparent;
                                                        border: none;
                                                    "
                                                >
                                                    <b-icon
                                                        icon="dash-circle"
                                                        id="minusProd"
                                                        aria-hidden="true"
                                                    ></b-icon>
                                                </button>
                                                <span class="addedProd"
                                                    >{{ prod.cartquantity }}
                                                </span>
                                                <button
                                                    :disabled="
                                                        prod.quantity < 1
                                                    "
                                                    @click="
                                                        cartManipulate(
                                                            prod,
                                                            'add'
                                                        )
                                                    "
                                                    style="
                                                        background: transparent;
                                                        border: none;
                                                    "
                                                >
                                                    <b-icon
                                                        icon="plus-circle"
                                                        aria-hidden="true"
                                                    ></b-icon>
                                                </button>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
                <div>$ {{ total }}</div>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            cartItem: "cartItems",
            total: "subtotal",
        }),
    },
    methods: {
        addprod() {
            this.addedProd = parseInt(this.addedProd) + 1;
        },
        cartManipulate(product, callFrom) {
            let obj = [product, callFrom];
            this.$store.dispatch("cartManipulate", obj);
        },
        getImgUrl: function (imagePath) {
            if (imagePath != undefined) {
                return require("@/assets/img/" + imagePath);
            }
        },
    },
};
</script>
