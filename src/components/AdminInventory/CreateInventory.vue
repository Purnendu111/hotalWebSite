<template>
    <div class="createInventoryContainer">
        <!-- <NavBar></NavBar> -->
        <form @submit.prevent="submitForm">
            <div id="formField">
                <b-row>
                    <b-col cols="2">Product ID: </b-col>
                    <b-col cols="7">
                        <b-form-select
                            id="domain"
                            text="Select Domain"
                            name="domain"
                            class="input paddingLeft10"
                            menu-class="w-100"
                            size="sm"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                            v-model="productid"
                        >
                            <b-form-select-option :value="null"
                                >Please select Product Id</b-form-select-option
                            >
                            <b-form-select-option
                                v-for="item in productOptions"
                                v-bind:key="item.id"
                                menu-class="w-100"
                                :value="item.id"
                                >{{ item.productid }}
                                {{ item.productname }}
                            </b-form-select-option>
                        </b-form-select>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="2">Minimum Quantity: </b-col>
                    <b-col cols="7">
                        <b-form-input
                            v-model="minquantity"
                            placeholder="Minimum Quantity"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                        ></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="2">Available Quantity: </b-col>
                    <b-col cols="7">
                        <b-form-input
                            v-model="availablequantity"
                            placeholder="Available Quantity"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                        ></b-form-input>
                    </b-col>
                </b-row>
            </div>
            <div id="formFoot">
                <b-row>
                    <b-col
                        class="text-light text-right"
                        style="padding-right: 81px; padding-top: 10px"
                    >
                        <b-button
                            variant="outline-success"
                            class=""
                            type="submit"
                            >Submit</b-button
                        >
                        <b-button
                            variant="outline-danger"
                            class=""
                            type="reset"
                            style="margin-left: 10px"
                            >Reset</b-button
                        >
                    </b-col>
                </b-row>
            </div>

            <!--div>
      <label for="productid">productid:</label><br>
      <input id="productid" type="text" v-model="productid" required/>
    </div-->
            <!-- <div>
                <label for="productid">productid:</label><br />
                <select
                    v-model="productid"
                    name="productid"
                    id="productid"
                    class="form-control"
                >
                    <option
                        v-for="a in aproducts"
                        :key="a.productid"
                        :value="a.productid"
                        >{{ a.productid }} {{ a.productname }}
                    </option>
                </select>
            </div>
            <div>
                <label for="minquantity">minquantity:</label><br />
                <input
                    id="minquantity"
                    type="text"
                    v-model="minquantity"
                    required
                />
            </div>
            <div>
                <label for="availablequantity">availablequantity:</label><br />
                <input
                    id="availablequantity"
                    type="text"
                    v-model="availablequantity"
                    required
                />
            </div>
            <button :class="[name ? activeClass : '']" type="submit">
                Submit
            </button>
             <div>
                <h3>Data retrieved from server:</h3>
                <p v-if="success">{{ success }}</p>
                <p>Transaction id</p>
                <div>{{ tran_id }}</div>
                <p>Data from kong</p>
                <div>{{ papis }}</div>
                <div>{{ aproducts }}</div>
            </div> -->
        </form>
    </div>
</template>

<script>
// import NavBar from "../views/NavHome.vue";

/* eslint-disable */
import Vue from "vue";
import { mapState } from "vuex";

export default {
    name: "Secured",
    components: {
        // NavBar,
    },
    data: function () {
        return {
            productOptions: [
                {
                    productid: "productId1",
                    productname: "Product Name 1",
                },
                {
                    productid: "productId2",
                    productname: "Product Name 2",
                },
                {
                    productid: "productId3",
                    productname: "Product Name 3",
                },
            ],
            productid: "null",
            success: "",
            papis: "",
            minquantity: "",
            availablequantity: "",
            tran_id: "",
        };
    },
    computed: {
        ...mapState({
            firstName: "firstName",
            lastName: "lastName",
            token: "token",
            idToken: "idToken",
            isAuthenticated: "isAuthenticated",
            role: "role",
            inventory_manager: "inventory_manager",
        }),
    },
    created() {
        this.axios
            .get(
                "http://a1f1159930cb44058952870ad65afcff-1793862981.us-east-2.elb.amazonaws.com/apis/v1/products",
                {
                    headers: {
                        apikey: "NbRoyQrr1bURYDTET2U27bQrNdvZVozA",
                        "x-admin-key": "abc123",
                    },
                }
            )
            .then((response) => {
                this.aproducts = response.data;
                console.log("Response:");
                console.log(response.data);
            })
            .catch(function (error) {
                /* eslint no-console: "error" */
                console.log(error);
            });
    },
    beforeMount() {
        // this.$store.dispatch("checkUnAuthenticate", "inventory_manager");
        // if (!this.inventory_manager) {
        //     this.$router.push({
        //         path: "/UnauthorizedUser",
        //     });
        // }
    },
    mounted() {
        let self = this;
        self.appHt();
        window.addEventListener(
            "resize",
            function () {
                self.appHt();
            },
            true
        );
    },
    methods: {
        appHt: function () {
            var h = window.innerHeight,
                navDivContainerHt =
                    document.getElementById("navDivContainer").offsetHeight,
                formFoot = document.getElementById("formFoot").offsetHeight;
            document.getElementById("bodyContainer").style.height =
                parseFloat(h) - parseFloat(navDivContainerHt) - 10 + "px";
            document.getElementById("formField").style.height =
                parseFloat(h) -
                parseFloat(navDivContainerHt) -
                parseFloat(formFoot) -
                50 +
                "px";
        },
        logout() {
            Vue.$keycloak.logout({ redirectUri: window.location.origin });
        },
        submitForm() {
            const article = {
                productid: this.productid,
                minquantity: this.minquantity,
                availablequantity: this.availablequantity,
            };
            const headers = {
                apikey: "NbRoyQrr1bURYDTET2U27bQrNdvZVozA",
                "Access-Control-Allow-Origin": "*",
            };
            this.axios
                .post(
                    "http://manisaurabh-bb96cc29-trial-prod.apigee.net/kong_api_inventory",
                    article,
                    { headers }
                )
                .then((response) => {
                    this.papis = response.data;
                    this.success = true;
                    console.log(response.data);
                    console.log(response);
                    this.tran_id = response.headers["transaction-id"];
                })
                .catch(function (error) {
                    /* eslint no-console: "error" */
                    console.log(error);
                });
        },
    },
};
</script>

<style scoped lang="scss"></style>
