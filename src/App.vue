<template>
	<div id="app">
		<!-- <div v-if="role == '' || role == 'consumer_role'"> -->
		<div id="navDivContainer" class="navDivContainer">
			<div>
				<Header />
			</div>
			<div v-if="role == '' || role == 'consumer_role'">
				<TopNavMenu />
			</div>
			<div v-else>
				<TopNavMenuAdmin />
			</div>
		</div>
		<div id="bodyContainer" class="bodyContainer">
			<router-view></router-view>
			<!-- <CartDetails id="" /> -->
		</div>
	</div>
</template>
<script>
import TopNavMenu from "./components/navMenu/TopNavMenu.vue";
import Header from "./components/navMenu/Header.vue";
// import CartDetails from "./components/shipping/cartDetails.vue"; test

export default {
	name: "App",
	components: {
		TopNavMenu,
		Header,
		// CartDetails,
	},
	created() {
		window.bus.$on("menu/toggle", () => {
			window.setTimeout(() => {
				this.isOpenMobileMenu = !this.isOpenMobileMenu;
			}, 200);
		});

		window.bus.$on("menu/closeMobileMenu", () => {
			this.isOpenMobileMenu = false;
		});
		// setTimeout(function () {
		//     window.localStorage = null;
		// }, 2000);
	},

	data() {
		return {
			role: "",
			isOpenMobileMenu: false,
		};
	},

	computed: {
		wrapperClass() {
			return {
				toggled: this.isOpenMobileMenu === true,
			};
		},
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
		const isAuthenticated = this.$store.state.isAuthenticated;

		this.role = this.$store.state.role;
		console.log(isAuthenticated + "====role====" + this.role);
		if (
			this.role != "" &&
			this.role != "consumer_role" &&
			this.$route.path == "/"
		) {
			// console.log("callingggggggggg")
			this.$router.push({
				path: "/orderhome",
			});
		}
	},
	methods: {
		appHt: function () {
			var h = window.innerHeight,
				navDivContainerHt =
					document.getElementById("navDivContainer").offsetHeight;
			document.getElementById("bodyContainer").style.height =
				parseFloat(h) - parseFloat(navDivContainerHt) - 10 + "px";
		},
	},
};
</script>
<style>
/* @import "assets/css/main.css"; */
</style>
