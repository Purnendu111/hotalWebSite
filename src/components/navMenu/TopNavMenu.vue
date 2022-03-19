<template>
	<div style="background: #003724">
		<b-navbar
			toggleable="lg"
			style="margin-left: 290px !important; height: 110px"
		>
			<b-navbar-brand href="/">
				<b-img
					:src="getImgUrl('Logo_Final.png')"
					height="55"
					width="110"
					fluid
				></b-img>
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="">
					<b-nav-item class="navMenuAText marginL60" href="/"
						>Home |</b-nav-item
					>
					<b-nav-item class="navMenuAText marginL60" href="/rooms"
						>Rooms |</b-nav-item
					>
					<b-nav-item class="navMenuAText marginL60" href="/gallary"
						>Gallery |</b-nav-item
					>
					<b-nav-item class="navMenuAText marginL60" href=""
						>Associate Services |</b-nav-item
					>
					<b-nav-item class="navMenuAText marginL60" href="/about_us"
						>About Us |</b-nav-item
					>
					<b-nav-item class="navMenuAText marginL60" href="/contact"
						>Contact Us |</b-nav-item
					>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: "TopNavMenu",
	data() {
		return {
			catagory: {},
			brand: {},
		};
	},
	async created() {},
	methods: {
		getImgUrl: function (imagePath) {
			return require("@/assets/" + imagePath);
		},
	},
};
</script>
