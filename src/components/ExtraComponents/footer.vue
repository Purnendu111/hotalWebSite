<template>
	<div class="footerDiv" style="">
		<b-row>
			<b-col cols="9">
				<b-row>
					<b-col cols="4">INFO</b-col>
					<b-col cols="4">RESOURSE</b-col>
					<b-col cols="4">Company</b-col>
				</b-row>
				<b-row>
					<b-col cols="4">Formats</b-col>
					<b-col cols="4">Developer API</b-col>
					<b-col cols="4">About Us</b-col>
				</b-row>
				<b-row>
					<b-col cols="4">Compression</b-col>
					<b-col cols="4">Tools</b-col>
					<b-col cols="4">Sustainability</b-col>
				</b-row>
				<b-row>
					<b-col cols="4">Pricing</b-col>
					<b-col cols="4">Blog</b-col>
					<b-col cols="4">Terms Of Services</b-col>
				</b-row>
				<b-row>
					<b-col cols="4">FAQ</b-col>
					<b-col cols="4"></b-col>
					<b-col cols="4">Privacy</b-col>
				</b-row>
				<b-row>
					<b-col cols="4">Status</b-col>
					<b-col cols="4"></b-col>
					<b-col cols="4"></b-col>
				</b-row>
			</b-col>
			<b-col cols="3">
				<b-row>
					<b-col cols="4"
						><b-button variant="outline-info" class="mb-2">
							<b-icon
								icon="facebook"
								aria-hidden="true"
							></b-icon> </b-button
					></b-col>
					<b-col cols="4"
						><b-button variant="outline-info" class="mb-2">
							<b-icon
								icon="instagram"
								aria-hidden="true"
							></b-icon> </b-button
					></b-col>
					<b-col cols="4"
						><b-button variant="outline-info" class="mb-2">
							<b-icon
								icon="twitter"
								aria-hidden="true"
							></b-icon> </b-button
					></b-col>
				</b-row>
			</b-col>
		</b-row>
	</div>
</template>
<script>
export default {
	name: "footer",
	data() {
		return {
			catagory: {},
			brand: {},
		};
	},
	async created() {},
	methods: {},
};
</script>