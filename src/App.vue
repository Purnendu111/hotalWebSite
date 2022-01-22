<template>
	<div id="app">
		<!-- <div v-if="role == '' || role == 'consumer_role'"> -->
		<div id="navDivContainer" class="navDivContainer">
				<TopNavMenu />
		</div>
		<div id="bodyContainer" class="bodyContainer">
			<router-view></router-view>
			<!-- <CartDetails id="" /> -->
		</div>
	</div>
</template>
<script>
import TopNavMenu from "./components/navMenu/TopNavMenu.vue";
//import Header from "./components/navMenu/Header.vue";
// import CartDetails from "./components/shipping/cartDetails.vue";

export default {
	name: "App",
	components: {
		TopNavMenu,
		//Header,
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
@import "assets/css/main.css";
</style>
