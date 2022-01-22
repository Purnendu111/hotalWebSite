<template>
    <div class="loginContainer">
        <h1>{{ msg }}</h1>
        <p>
            Clicked the link above marked "Secured" to see the content blocked
            by authorization.
        </p>
        <p>
            Use the login button below to force a login before attempting to see
            the secured content
        </p>
        <div v-if="!isAuthenticated">
            <b-button
                variant="outline-info"
                class="mb-2 cstmLogOut"
                @click="login"
            >
                <b-icon icon="power" aria-hidden="true"></b-icon>Login
            </b-button>
        </div>
        <div v-else>
            <b-button
                variant="outline-info"
                class="mb-2 cstmLogOut"
                @click="logout"
            >
                <b-icon icon="power" aria-hidden="true"></b-icon>Logout
            </b-button>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

import { mapState } from "vuex";

export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    computed: {
        ...mapState({
            isAuthenticated: "isAuthenticated",
        })
    },
    methods: {
        login() {
           console.log("loginnnn",this.isAuthenticated) 
            Vue.$keycloak.login({ redirectUri: window.location.origin });
        },
        logout() {
            Vue.$keycloak.logout({ redirectUri: window.location.origin });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
