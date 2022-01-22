<template>
    <div style="padding: 0 30px">
        <!-- <b-row><b-breadcrumb :items="items" style="width: 500px;background-color: white;"></b-breadcrumb> </b-row> -->
        <b-row>
            <step-progress
                :steps="mySteps"
                :current-step="currentStep"
                icon-class="fa fa-check"
                active-color="blue"
                active-thickness="1"
                passive-thickness="1"
                line-thickness="1"
            ></step-progress>
        </b-row>
        <div>
            <div>
                <h4 style="padding-top: 10px">Delivery Details:</h4>
                <p style="padding-top: 20px">
                    Pickup your Order from TCS Retailer Store , 93 Clinton St,
                    New York, NY 10002 at 02 Dec 2021 03:00 PM
                </p>
            </div>
            <br />

            <b-row style="padding-top: 20px" class="border border-pri mary">
                <b-col class="text-left">
                    Select a Payment Method
                    <hr />
                    <div id="app">
                        <b-form-group v-slot="{ ariaDescribedby }">
                            <b-form-radio
                                style="padding-top: 20px"
                                v-model="selected"
                                :aria-describedby="ariaDescribedby"
                                name="some-radios"
                                value="home_devilery"
                                @change="show_hide_map"
                                >E-Wallet($19.90)</b-form-radio
                            >

                            <b-form-radio
                                style="padding-top: 20px"
                                v-model="selected"
                                :aria-describedby="ariaDescribedby"
                                name="some-radios"
                                value="store_pickup"
                                @change="show_hide_map"
                                >Add Debit/Credit/ATM Card
                            </b-form-radio>
                            <img
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/payments-portal/r1/issuer-images/sprite-map._CB443317321_.png"
                            />
                            <b-form-radio
                                style="padding-top: 20px"
                                v-model="selected"
                                :aria-describedby="ariaDescribedby"
                                name="some-radios"
                                value="store_pickup"
                                @change="show_hide_map"
                                ><PayPal
                                    env="sandbox"
                                    amount="10.00"
                                    currency="USD"
                                    v-bind:client="paypal"
                                >
                                </PayPal>
                            </b-form-radio>
                        </b-form-group>
                        <b-button
                            variant="info"
                            @click="paymentSuccess"
                            style="border-radius: 25px"
                            class="mb-2"
                        >
                            <b-icon
                                icon="credit-card2-back-fill"
                                aria-hidden="true"
                            ></b-icon>
                            Process To Payment
                        </b-button>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-paypal-checkout/dist/vue-paypal-checkout.min.js"></script>
<script>
import StepProgress from "vue-step-progress";
import { mapState } from "vuex";
// import the css (OPTIONAL - you can provide your own design)
import "vue-step-progress/dist/main.css";
import PayPal from "vue-paypal-checkout";
export default {
    components: {
        PayPal,
        StepProgress,
    },
    data() {
        return {
            paypal: {
                sandbox:
                    "AeqMhegT2sFVxM3S2ly3fZzM0V4-aWJFzFNlG2Aqf25gKkowdgtYDA4pBMCQ3rVpnnS-CB8SY8WGpr__",
            },
            mySteps: ["Bag", "Delivery & Payment", "Order Confirmation"],
            currentStep: 1,
        };
    },
    computed: {
        ...mapState({
            isAuthenticated: "isAuthenticated",
            role: "role",
        }),
    },
    beforeMount() {
        if (!this.isAuthenticated) {
            this.$router.push({
                path: "/UnauthorizedUser",
            });
        }
    },
    methods: {
        paymentSuccess() {
            this.$fire({
                type: "success",
                title: "Payment Successful",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                this.$router.push({
                    path: "/successpage",
                });
            });
        },
    },
};
</script>
