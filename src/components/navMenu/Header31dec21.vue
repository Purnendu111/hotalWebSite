<template>
    <div>
        <b-row style="padding: 10px 10px 0px 10px">
            <b-col cols="3"
                ><a href="/home">
                    <img
                        src="../../assets/kong_logo.png"
                        height="45"
                        width="138"
                    />
                    <span class="tcsTxt">TCS Retailer</span></a
                >
            </b-col>
            <b-col align-self="end"
                ><center>
                    <b-input-group class="searchInput">
                        <b-form-input></b-form-input>
                        <b-input-group-append>
                            <b-button
                                size="sm"
                                @click="search"
                                text="Button"
                                style="
                                    background: #315199 0% 0% no-repeat padding-box;
                                    border-radious: 4px;
                                "
                            >
                                <b-icon
                                    icon="search"
                                    aria-hidden="true"
                                ></b-icon>
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </center>
            </b-col>
            <b-col
                cols="2"
                class="text-right"
                style="padding-right: 0 !important"
            >
                <div v-if="!customer_show_n">
                    <b-avatar
                        class="CstmAvatarStyle"
                        variant="info"
                        src="https://placekitten.com/500/500"
                    ></b-avatar>
                    <span class="CstmProfileName"
                        >{{ firstName }} {{ lastName }}</span
                    >
                    <b-dropdown
                        variant="outline-success"
                        class="m-2"
                        right
                        size="sm"
                        style="top: 5px"
                    >
                        <b-dropdown-item-button
                            ><b-icon
                                icon="person-circle"
                                aria-hidden="true"
                            ></b-icon>
                            User Profile</b-dropdown-item-button
                        >
                        <b-dropdown-item-button @click.prevent="logout()"
                            ><b-icon
                                icon="person-x"
                                aria-hidden="true"
                            ></b-icon>
                            Logout</b-dropdown-item-button
                        >
                    </b-dropdown>
                </div>

                <div v-else>
                    <b-button
                        variant="outline-info"
                        class="mb-2 cstmLogOut"
                        @click="userlogin"
                    >
                        Login <b-icon icon="power" aria-hidden="true"></b-icon>
                    </b-button>
                </div>
            </b-col>

            <b-col md="auto" class="text-right">
                <b-button
                    v-if="$store.state.cartCount > 0"
                    v-b-toggle.cartDetails
                    size="lg"
                    variant="primary"
                    class="cstmCartButton mb-2"
                >
                    <b-icon
                        class="cstmCartCSS"
                        icon="cart2"
                        aria-hidden="true"
                    ></b-icon>
                </b-button>
                <b-button
                    v-else
                    size="lg"
                    variant="primary"
                    class="cstmCartButton mb-2"
                >
                    <b-icon
                        class="cstmCartCSS"
                        icon="cart2"
                        aria-hidden="true"
                    ></b-icon>
                </b-button>
                <b-icon
                    class="cstmCartCount"
                    icon="circle-fill"
                    aria-hidden="true"
                ></b-icon>
                <div id="CartCountTxt" class="cstmCartCountTxt">
                    {{ $store.state.cartCount }}
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import store from "../../store.js";

export default {
    name: "Header",
    data() {
        return {
            mainProps: {
                blank: true,
                blankColor: "#777",
                width: 50,
                height: 50,
                class: "m1",
                cartCount: "1",
                data: "",
            },
            customer_show: false,
            customer_show_n: true,
            logoutOption: false,
            admin_show: false,
        };
    },
    computed: {
        ...mapState({
            firstName: "firstName",
            lastName: "lastName",
            token: "token",
            idToken: "idToken",
            customer_id: "customer_id",
            keyClockAuthenticate: "keyClockAuthenticate",
            isAuthenticated: "isAuthenticated",
            role: "role",
            scope: "scope",
        }),
    },
    beforeMount() {
        console.log("Vue.$keycloak.authenticated",Vue.$keycloak.authenticated, JSON.stringify(this.$store.state))
        this.keyClockAuthenticate = Vue.$keycloak.authenticated;
        if (this.keyClockAuthenticate) {
            console.log("Header======");
            this.customer_show = true;
            this.customer_show_n = false;
            this.token = Vue.$keycloak.token;
            this.firstName = Vue.$keycloak.tokenParsed.given_name;
            this.lastName = Vue.$keycloak.tokenParsed.family_name;
            this.customer_id = Vue.$keycloak.tokenParsed.preferred_username;
            this.role =
                Vue.$keycloak.tokenParsed.resource_access[
                    "dis_vue_client"
                ].roles;
            this.isAuthenticated = true;
            this.customer_show = true;
            this.scope = Vue.$keycloak.tokenParsed.scope;
            this.idToken = Vue.$keycloak.idToken;
        }

        const isAuthenticated = this.isAuthenticated;
        console.log("isAuthenticated",isAuthenticated)
        const curScope = this.role;
        if (isAuthenticated) {
            this.logoutOption = true;
            this.customer_show_n = false;
            this.customer_show = true;
            if (curScope.includes("vue_client_admin")) {
                this.admin_show = true;
                this.order_management_admin = true;
            }
        }
    },
    mounted() {
        this.$root.$on("event", (data) => {
            this.cartValue = data;
        });
    },
    methods: {
        search() {
            alert("test");
        },
        userlogin() {
            this.$router.push({
                path: "/login",
            });
        },
        logout() {
            localStorage.clear();
            Vue.$keycloak.logout({ redirectUri: window.location.origin });
        },
    },
};
</script>
