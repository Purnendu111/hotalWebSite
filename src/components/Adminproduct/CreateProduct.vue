<template>
    <div class="createProductContainer">
        <form @submit.prevent="submitForm">
            <div id="formField" class="formField">
                <b-row>
                    <b-col cols="2">Product Name: </b-col>
                    <b-col cols="4">
                        <b-form-input
                            v-model="data.productname"
                            placeholder="Product Name"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                        ></b-form-input>
                    </b-col>
                    <b-col cols="2">Brand: </b-col>
                    <b-col cols="4">
                        <b-form-input
                            v-model="data.brand"
                            placeholder="Brand"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                        ></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="2">Price: </b-col>
                    <b-col cols="4">
                        <b-form-input
                            v-model="data.price"
                            placeholder="Price"
                            type="text"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                        ></b-form-input>
                    </b-col>
                    <b-col cols="2">Category: </b-col>
                    <b-col cols="4">
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
                            v-model="data.category"
                        >
                            <b-form-select-option :value="null"
                                >Please select Category</b-form-select-option
                            >
                            <b-form-select-option
                                v-for="item in categoryOptions"
                                v-bind:key="item.categoryId"
                                menu-class="w-100"
                                :value="item.categoryId"
                            >
                                {{ item.categoryName }}
                            </b-form-select-option>
                        </b-form-select>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="2">Processor: </b-col>
                    <b-col cols="4">
                        <b-form-input
                            v-model="data.processor"
                            placeholder="Processor"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                        ></b-form-input>
                    </b-col>
                    <b-col cols="2">RAM: </b-col>
                    <b-col cols="4">
                        <b-form-input
                            v-model="data.ram"
                            placeholder="RAM"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                        ></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="2">Front Camera: </b-col>
                    <b-col cols="4">
                        <b-form-input
                            v-model="data.frontCamera"
                            placeholder="Front Camera"
                            type="text"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                        ></b-form-input>
                    </b-col>
                    <b-col cols="2">Rear Camera: </b-col>
                    <b-col cols="4">
                        <b-form-input
                            v-model="data.rearCamera"
                            placeholder="Rear Camera"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                        ></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="2">Storage: </b-col>
                    <b-col cols="4">
                        <b-form-input
                            v-model="data.storage"
                            placeholder="Storage"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                        ></b-form-input>
                    </b-col>
                    <b-col cols="2">Display Size: </b-col>
                    <b-col cols="4">
                        <b-form-input
                            v-model="data.displaySize"
                            placeholder="Display Size"
                            style="
                                width: 83% !important;
                                height: 35px !important;
                                margin: 5px;
                            "
                        ></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="2">4G Support: </b-col>
                    <b-col cols="4" style="height: 35px">
                        <b-form-radio-group style="padding-left: 5px">
                            <b-form-radio
                                v-model="data.support4g"
                                name="support4g"
                                value="true"
                                >Yes</b-form-radio
                            >
                            <b-form-radio
                                v-model="data.support4g"
                                name="support4g"
                                value="false"
                                >No</b-form-radio
                            >
                        </b-form-radio-group>
                    </b-col>
                    <b-col cols="2">Dual Sim: </b-col>
                    <b-col cols="4">
                        <b-form-radio-group style="padding-left: 5px">
                            <b-form-radio
                                v-model="data.dualSim"
                                name="dualSim"
                                value="true"
                                >Yes</b-form-radio
                            >
                            <b-form-radio
                                v-model="data.dualSim"
                                name="dualSim"
                                value="false"
                                >No</b-form-radio
                            >
                        </b-form-radio-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="2">Product Desc: </b-col>
                    <b-col cols="10">
                        <b-form-textarea
                            id="textarea-no-resize"
                            placeholder="Product Desc"
                            rows="5"
                            v-model="data.productdesc"
                            no-resize
                            style="width: 94% !important; margin: 5px"
                        ></b-form-textarea>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="2">Product Image: </b-col>
                    <b-col cols="10">
                        <b-file
                            multiple
                            v-model="data.productImg"
                            v-on:change="handleFileUpload($event)"
                            :state="Boolean(data.productImg)"
                            id="productImg"
                            class="prodImg"
                            placeholder="Choose a file or drag & drop it here..."
                            drop-placeholder="Drop file here..."
                        ></b-file>
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
    params: ["id"],
    components: {
        // NavBar,
    },
    data: function () {
        return {
            data: {
                productname: "",
                brand: "",
                processor: "",
                productdesc: "",
                category: null,
                price: "",
                ram: "",
                frontCamera: "",
                rearCamera: "",
                storage: "",
                displaySize: "",
                support4g: "",
                dualSim: "",
                productImg: null,
                file: "",
            },
            papis: "",
            tran_id: "",
            success: "",
            manufacturerOptions: [
                {
                    manufacturerid: "manufacturerId1",
                    manufacturername: "Manufacturer Name 1",
                },
                {
                    manufacturerid: "manufacturerId2",
                    manufacturername: "Manufacturer Name 2",
                },
                {
                    manufacturerid: "manufacturerId3",
                    manufacturername: "Manufacturer Name 3",
                },
            ],
            categoryOptions: "",
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
            product_manager: "product_manager",
        }),
    },
    beforeMount() {
        // this.$store.dispatch("checkUnAuthenticate", "product_manager");
        // if (!this.product_manager) {
        //     this.$router.push({
        //         path: "/UnauthorizedUser",
        //     });
        // }
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
                console.log("Response:");
                console.log(response.data);
                self.categoryOptions = response.data;
                // self.data.productname = response.data.productName;
            })
            .catch(function (error) {
                console.log(error);
            });
        let data = self.data;
        if (self.$route.params.id != undefined && self.$route.params.id != "") {
            self.$isLoading(true);
            await self.axios
                .get("prodWholeData/" + self.$route.params.id)
                .then((response) => {
                    console.log("Response:");
                    console.log(response.data);
                    let res = response.data;
                    data.productname = res.productName;
                    data.brand = res.brand;
                    data.processor =
                        res.productSpecification.specifications.processor;
                    data.productdesc = res.productDescription;
                    data.category = "7"; //res.id;
                    data.price = res.price;
                    data.ram = res.productSpecification.specifications.ram;
                    data.frontCamera =
                        res.productSpecification.specifications.frontCamera;
                    data.rearCamera =
                        res.productSpecification.specifications.rearCamera;
                    data.storage =
                        res.productSpecification.specifications.storage;
                    data.displaySize =
                        res.productSpecification.specifications.displaySize;
                    data.support4g =
                        res.productSpecification.specifications.support4G;
                    data.dualSim =
                        res.productSpecification.specifications.dualSim;

                    data.productImg = require("@/assets/img/" +
                        res.image +
                        ".jpg");
                    data.file = data.productImg;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(() => {
                    self.$isLoading(false); // hide the loading screen
                });
        }
    },
    mounted() {
        console.log("this.data.category=====" + this.data.category);
        let self = this;
        self.appHt();
        window.addEventListener(
            "resize",
            function () {
                self.appHt();
            },
            true
        );
        document.getElementById("productImg").addEventListener(
            "change",
            function (event) {
                let files = event.target.files,
                    obj = [];

                console.log(
                    JSON.stringify(this.files[0]) + " ======== new Image"
                );
                console.log(JSON.stringify(obj) + "======Image");
            },
            false
        );
    },
    methods: {
        appHt: function () {
            var h = window.innerHeight,
                navDivContainerHt =
                    document.getElementById("navDivContainer").offsetHeight,
                formFoot = document.getElementById("formFoot").offsetHeight;
            document.getElementById("bodyContainer").style.height =
                parseFloat(h) - parseFloat(navDivContainerHt) + "px";
            document.getElementById("formField").style.height =
                parseFloat(h) -
                parseFloat(navDivContainerHt) -
                parseFloat(formFoot) -
                45 +
                "px";
        },
        logout() {
            Vue.$keycloak.logout({ redirectUri: window.location.origin });
        },
        handleFileUpload(event) {
            this.file = event.target.files;
            console.log("this.file", this.file);
        },
        submitForm() {
            console.log(JSON.stringify(this.data) + "====data");
            if (
                this.$route.params.id != undefined &&
                this.$route.params.id != ""
            ) {
                this.axios
                    .put("prodWholeData/" + this.$route.params.id, this.data)
                    .then((response) => {
                        this.papis = response.data;
                        this.success = true;
                        console.log(response.data);
                        this.tran_id = response.headers["transaction-id"];
                    })
                    .catch(function (error) {
                        /* eslint no-console: "error" */
                        console.log(error);
                    });
            } else {
                this.axios
                    .post("prodWholeData" + id, data)
                    .then((response) => {
                        this.papis = response.data;
                        this.success = true;
                        console.log(response.data);
                        this.tran_id = response.headers["transaction-id"];
                    })
                    .catch(function (error) {
                        /* eslint no-console: "error" */
                        console.log(error);
                    });
            }
        },
        getImgUrl: function (imagePath) {
            console.log("@/assets/img/======" + imagePath);
            return require("@/assets/img/" + imagePath);
        },
    },
};
</script>

<style scoped lang="scss"></style>
