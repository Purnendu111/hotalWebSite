<template>
	<div id="app">
		<div id="navDivContainer" class="navDivContainer">
			<TopNavMenu />
		</div>
		<div id="bodyContainer" class="bodyContainer">
			<router-view></router-view>
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
				parseFloat(h) - parseFloat(navDivContainerHt) + "px";
		},
	},
};
</script>
<style>
@import "assets/css/main.css";
</style>
