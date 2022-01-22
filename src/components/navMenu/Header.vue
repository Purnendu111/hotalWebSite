<template>
    <div>
        <b-row style="padding: 10px 10px 0px 10px">
            <b-col cols="4">
                <router-link v-bind:to="{ path: mainProps.homeurl }">
                    <span class="tcsTxt"
                        ><img
                            src="../../assets/TCS_logo.png"
                            height="45"
                            width="138"
                        />
                        Retailer <sup>&#x2117;</sup>
                        <img
                            src="../../assets/kong_logo.png"
                            height="45"
                            width="138"
                        />
                    </span>
                </router-link>
            </b-col>
            <b-col align-self="end"
                ><center>
                    <b-input-group
                        class="searchInput"
                        v-if="role == '' || role == 'consumer_role'"
                    >
                        <b-form-input></b-form-input>
                        <b-input-group-append>
                            <b-button
                                size="sm"
                                @click="search"
                                text="Button"
                                style="
                                    background: #315199 0% 0% no-repeat
                                        padding-box;
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
                :cols="role == '' || role == 'consumer_role' ? 2 : 3"
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
                        <b-dropdown-item-button @click="userProfile"
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
                    <!--
                    <b-dropdown
                        variant="outline-success"
                        class="m-2"
                        right
                        size="sm"
                        style="top: 5px"
                    >
                        <b-dropdown-item-button
                            variant="outline-info"
                            class="mb-2 cstmLogOut"
                            @click="userlogin"
                        >
                            Login
                            <b-icon icon="power" aria-hidden="true"></b-icon>
                        </b-dropdown-item-button>
                        <b-dropdown-item-button
                            @click="register"
                            v-show="customer_show_n"
                            >Register</b-dropdown-item-button
                        >
                    </b-dropdown> -->
                </div>
            </b-col>

            <b-col
                md="auto"
                class="text-right"
                v-if="role == '' || role == 'consumer_role'"
            >
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
                    {{ cartCount }}
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

export default {
    name: "Header",
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
            logoutOption: "logoutOption",
            customer_show_n: "customer_show_n",
            customer_show: "customer_show",
            admin_show: "admin_show",
            order_management_admin: "order_management_admin",
            customer: "customer",
            cartCount: "cartCount",
        }),
    },
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
                homeurl: "/home",
            },
        };
    },
    beforeMount() {
        if (this.role == "" || this.customer) {
            this.mainProps.homeurl = "/home";
        } else {
            this.mainProps.homeurl = "/orderhome";
        }
        this.$store.dispatch("setLocalStorage", Vue.$keycloak);
    },
    mounted() {
        this.$root.$on("event", (data) => {
            alert(data);
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
        userProfile() {
            this.$router.push({
                path: "/register",
            });
        },
    },
};
</script>
