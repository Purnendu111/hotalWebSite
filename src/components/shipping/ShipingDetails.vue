<template>
    <div style="padding: 0 30px">
        <b-row>
            <b-col><h2>Available Offers</h2></b-col>
        </b-row>
        <b-row>
            <b-col
                ><p>
                    Congratulation!! You can waive off shipping Charges on your
                    order if you pick your order today from TCS Retailer Store
                    near Your address.
                </p></b-col
            >
        </b-row>
        <b-row>
            <b-col>
                <b-card-group style="width: 80%">
                    <b-card
                        no-body
                        class="overflow-hidden cardCstmSolo"
                        style="width: 100%"
                    >
                        <b-row no-gutters style="padding-bottom: 20px">
                            <b-col cols="2">
                                <b-card-img
                                    src="https://picsum.photos/500/500/?image=20"
                                    alt="Image"
                                    style="max-width: 150px; text-align: center"
                                    class="rounded-0"
                                    repet="none"
                                ></b-card-img>
                            </b-col>
                            <b-col cols="9">
                                <b-card-body
                                    class="soloProdCard"
                                    title="One Plus 8T"
                                >
                                    <b-card-text> <b>$499</b> </b-card-text>
                                    <b-card-text> Android 11 </b-card-text>
                                    <b-row>
                                        <b-col>
                                            <b-icon
                                                icon="dash-circle"
                                                id="minusProd"
                                                @click="minusprod('499')"
                                                aria-hidden="true"
                                            ></b-icon>
                                            <span class="addedProd">{{
                                                addedProd
                                            }}</span>
                                            <b-icon
                                                icon="plus-circle"
                                                @click="addprod('499')"
                                                aria-hidden="true"
                                            ></b-icon>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-card-group>
                <b-card-group style="width: 80%">
                    <b-card
                        no-body
                        class="overflow-hidden cardCstmSolo"
                        style="width: 100%"
                    >
                        <b-row no-gutters style="padding-bottom: 20px">
                            <b-col cols="2">
                                <b-card-img
                                    src="https://picsum.photos/500/500/?image=20"
                                    alt="Image"
                                    style="max-width: 150px; text-align: center"
                                    class="rounded-0"
                                    repet="none"
                                ></b-card-img>
                            </b-col>
                            <b-col cols="9">
                                <b-card-body
                                    class="soloProdCard"
                                    title="One Plus 8T"
                                >
                                    <b-card-text> <b>$499</b> </b-card-text>
                                    <b-card-text> Android 11 </b-card-text>
                                    <b-row>
                                        <b-col>
                                            <b-icon
                                                icon="dash-circle"
                                                id="minusProd"
                                                @click="minusprod('499')"
                                                aria-hidden="true"
                                            ></b-icon>
                                            <span class="addedProd">{{
                                                addedProd
                                            }}</span>
                                            <b-icon
                                                icon="plus-circle"
                                                @click="addprod('499')"
                                                aria-hidden="true"
                                            ></b-icon>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-group
                    label="Individual radios"
                    v-slot="{ ariaDescribedby }"
                >
                    <b-form-radio
                        v-model="selected"
                        :aria-describedby="ariaDescribedby"
                        name="some-radios"
                        value="home_devilery"
                        @change="show_hide_map"
                        >Home Delivery (Standard Shipping charg of
                        $19.90)</b-form-radio
                    >
                    <b-form-radio
                        v-model="selected"
                        :aria-describedby="ariaDescribedby"
                        name="some-radios"
                        value="store_pickup"
                        @change="show_hide_map"
                        >Pick from store(Shipping fee waived off)
                        <i class="fa-location-pin"></i>
                    </b-form-radio>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div>
                    <h3>Basket Summery</h3>
                </div>
                <div v-if="bucketValues.itemInBucket > 0">
                    <b-row>
                        <b-col cols="4">
                            <h5>Item In Basket:</h5>
                        </b-col>
                        <b-col>{{ bucketValues.itemInBucket }}</b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="4">
                            <h5>Price:</h5>
                        </b-col>
                        <b-col> ${{ bucketValues.prodTotal }}</b-col>
                    </b-row>
                    <b-row v-if="DeliveryCharge">
                        <b-col cols="4">
                            <h5>Shiping Charges:</h5>
                        </b-col>
                        <b-col>${{ bucketValues.shippingCharge }}</b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="4">
                            <h5>Total:</h5>
                        </b-col>
                        <b-col> ${{ bucketValues.subTotal }}</b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-button
                                size="lg"
                                variant="info"
                                style="border-radius: 25px"
                                class="mb-2"
                                @click="proceedToPayment"
                            >
                                <b-icon
                                    icon="credit-card2-back-fill"
                                    aria-hidden="true"
                                ></b-icon>
                                Process To Payment
                            </b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
            <b-col>
                <div v-if="showMap == true">
                    <div>
                        <GmapAutocomplete
                            v-model="address"
                            @place_changed="setPlace"
                        />
                        <button @click="addMarker">Add</button>
                        <button
                            @click="locatorButtonPressed"
                            style="border-radius: 15px"
                        >
                            <b-icon icon="dot" aria-hidden="true"></b-icon>
                        </button>
                    </div>
                    <br />
                    <GmapMap
                        :center="center"
                        :zoom="15"
                        style="width: 90%; height: 400px"
                    >
                        <GmapMarker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            @click="center = m.position"
                        />
                    </GmapMap>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "GoogleMap",
    data() {
        return {
            center: { lat: 22.5664528, lng: 88.3215014 },
            currentPlace: "",
            markers: [],
            places: [],
            addedProd: "1",
            selected: "home_devilery",
            showMap: false,
            address: "test",
            DeliveryCharge: true,
            bucketValues: {
                itemInBucket: 1,
                prodTotal: 499,
                shippingCharge: 20,
                subTotal: "",
            },
        };
    },
    mounted() {
        this.bucketValues.subTotal =
            parseFloat(this.bucketValues.prodTotal) +
            parseFloat(this.bucketValues.shippingCharge);
        // if (this.address != "") {
        //   for (let i = 0; i < 5; i++) {
        //     this.setPlace("belurmath");
        //   }
        // }
        this.geolocate();
    },
    methods: {
        setPlace(place) {
            console.log(JSON.stringify(place));
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng(),
                };
                this.markers.push({ position: marker });
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition((position) => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                console.log(
                    position.coords.latitude + "===" + position.coords.longitude
                );
            });

            this.markers = [
                {
                    lat: 21.1594627,
                    lng: 72.6822083,
                    label: "Surat",
                },
                {
                    lat: 23.0204978,
                    lng: 72.4396548,
                    label: "Ahmedabad",
                },
                {
                    lat: 22.2736308,
                    lng: 70.7512555,
                    label: "Rajkot",
                },
            ];
        },
        addprod(value) {
            let bucketValues = this.bucketValues;
            bucketValues.itemInBucket = parseInt(bucketValues.itemInBucket) + 1;
            bucketValues.prodTotal =
                parseFloat(bucketValues.prodTotal) + parseFloat(value);
            bucketValues.subTotal =
                parseFloat(bucketValues.subTotal) + parseFloat(value);

            let data = parseInt(this.cartValue) + 1;
            this.$store.state.cartCount++;
            this.$root.$emit("event", data);
        },
        minusprod(value) {
            if (this.addedProd > 1) {
                let bucketValues = this.bucketValues;
                bucketValues.itemInBucket =
                    parseInt(bucketValues.itemInBucket) - 1;
                bucketValues.prodTotal =
                    parseFloat(bucketValues.prodTotal) - parseFloat(value);
                bucketValues.subTotal =
                    parseFloat(bucketValues.subTotal) - parseFloat(value);
                this.addedProd = parseInt(this.addedProd) - 1;
            }
        },
        show_hide_map() {
            if (this.selected == "home_devilery") {
                let bucketValues = this.bucketValues;
                bucketValues.subTotal =
                    parseFloat(bucketValues.subTotal) +
                    parseFloat(bucketValues.shippingCharge);
                this.cartValue = parseInt(this.cartValue) + 1;
                this.showMap = false;
                this.DeliveryCharge = true;
            } else {
                let bucketValues = this.bucketValues;
                bucketValues.subTotal =
                    parseFloat(bucketValues.subTotal) -
                    parseFloat(bucketValues.shippingCharge);
                this.showMap = true;
                this.DeliveryCharge = false;
            }
        },
        proceedToPayment() {
            this.$router.push({
                path: "/payment",
            });
        },
    },
};
</script>
