<template>
	<div>
		<div class="container-contact100">
			<div class="wrap-contact100">
				<form
					class="contact100-form validate-form"
					@submit.prevent="sendmail"
				>
					<span class="contact100-form-title"> Contact Us </span>

					<div
						class="wrap-input100 validate-input bg1"
						data-validate="Please Type Your Name"
					>
						<span class="label-input100">FULL NAME *</span>
						<input
							class="input100"
							id="name"
							v-model="name"
							type="text"
							name="name"
							placeholder="Enter Your Name"
						/>
					</div>

					<div
						class="
							wrap-input100
							validate-input
							bg1
							rs1-wrap-input100
						"
						data-validate="Enter Your Email"
					>
						<span class="label-input100">Email *</span>
						<input
							class="input100"
							id="email"
							v-model="email"
							type="text"
							name="email"
							placeholder="Enter Your Email "
						/>
					</div>

					<div
						class="wrap-input100 bg1 rs1-wrap-input100"
						data-validate="Please Type Your Phone Number"
					>
						<span class="label-input100">Phone *</span>
						<input
							class="input100"
							id="phone"
							v-model="phone"
							type="text"
							name="phone"
							placeholder="Enter Phone Number"
						/>
					</div>

					<div class="wrap-input100 input100-select bg1">
						<span class="label-input100">Needed Services *</span>
						<div>
							<b-form-select
								id="services"
								name="services"
								class="paddingLeft10 cstmSelectServices"
								style="width: 100% !important"
								menu-class="w-100"
								v-model="services"
							>
								<b-form-select-option :value="null"
									>Please select a
									Service</b-form-select-option
								>
								<b-form-select-option :value="Engagement"
									>Engagement Parties</b-form-select-option
								>
								<b-form-select-option :value="Wedding"
									>Wedding</b-form-select-option
								>
								<b-form-select-option :value="Wedding_Reception"
									>Wedding Reception</b-form-select-option
								>
								<b-form-select-option :value="BirthDay_Party"
									>BirthDay Parties</b-form-select-option
								>
								<b-form-select-option
									:value="Firstrice_Ceremony"
									>First rice Ceremony</b-form-select-option
								>
								<b-form-select-option :value="Upanayan_Ceremony"
									>Upanayan Ceremony</b-form-select-option
								>
								<b-form-select-option :value="Baby_shower"
									>Baby Shower</b-form-select-option
								>
								<b-form-select-option :value="Pre_WeddingShoot"
									>Pre Wedding Shoot</b-form-select-option
								>
								<b-form-select-option :value="Post_WeddingShoot"
									>Post Wedding Shoot</b-form-select-option
								>
								<b-form-select-option
									:value="Office_Get_Togethers"
									>Office Get Togethers</b-form-select-option
								>
								<b-form-select-option
									:value="Family_Get_Togethers"
									>Family Get Togethers</b-form-select-option
								>
								<b-form-select-option :value="Barbecue_Nights"
									>Barbecue Nights</b-form-select-option
								>
								<b-form-select-option :value="Picnics"
									>Picnics</b-form-select-option
								>
								<b-form-select-option
									:value="Book_Reading_Sessions"
									>Book Reading Sessions</b-form-select-option
								>
								<b-form-select-option :value="Dance_Programmes"
									>Dance Programmes</b-form-select-option
								>
								<b-form-select-option
									:value="Cultural_Programmes"
									>Cultural Programmes</b-form-select-option
								>
								<b-form-select-option
									:value="Outdoor_music_shows"
									>Outdoor Music Shows</b-form-select-option
								>
								<b-form-select-option :value="Movie_Nights"
									>Movie Nights</b-form-select-option
								>
								<b-form-select-option :value="Ad_Shoots"
									>Ad Shoots</b-form-select-option
								>
								<b-form-select-option :value="Video_Shoots"
									>Video Shoots</b-form-select-option
								>
								<b-form-select-option :value="Short_film_Shoots"
									>Feature/Short Film
									Shooting</b-form-select-option
								>
								<b-form-select-option :value="Farewell_Parties"
									>Farewell Parties</b-form-select-option
								>
								<b-form-select-option :value="Maternity_Shoots"
									>Maternity Shoots</b-form-select-option
								>
								<b-form-select-option :value="Seminers"
									>Seminers</b-form-select-option
								>
								<b-form-select-option
									:value="festive_celebrations"
									>Festive Celebrations[Holi, Rakhi, New Year
									parties etc.]</b-form-select-option
								>
								<b-form-select-option :value="Fashion_Shows"
									>Fashion Shows</b-form-select-option
								>
								<b-form-select-option :value="Fairs"
									>Fairs[food festival, bookfair, handicraft
									mela etc.]</b-form-select-option
								>
								<b-form-select-option :value="Indoor_Outdoor"
									>Indoor/Outdoor Exhibitions(Painting,
									Photography, Handloom, Jewelry
									etc]</b-form-select-option
								><b-form-select-option :value="Sport_Nights"
									>Sport-Watching Nights</b-form-select-option
								>
								<b-form-select-option :value="Others"
									>Others</b-form-select-option
								>
							</b-form-select>
							<div class="dropDownSelect2"></div>
						</div>
					</div>
					<div
						class="
							wrap-input100
							validate-input
							bg0
							rs1-alert-validate
						"
						data-validate="Please Type Your Message"
					>
						<span class="label-input100">Message</span>
						<textarea
							class="input100"
							id="message"
							v-model="message"
							name="message"
							placeholder="Your message here..."
						></textarea>
					</div>

					<div class="container-contact100-form-btn">
						<button
							class="contact100-form-btn"
							type="submit"
							id="submit"
						>
							<span>
								Submit
								<i
									class="fa fa-long-arrow-right m-l-7"
									aria-hidden="true"
								></i>
							</span>
						</button>
						<!-- <b-button block pill variant="outline-success" id="submit" class="CstmButton">Button</b-button> -->
					</div>
				</form>
			</div>
		</div>
		<footerComp />
	</div>
</template>

<script>
//import $ from "jquery";
import emailjs from "emailjs-com";
import footerComp from "../ExtraComponents/footer.vue";

export default {
	name: "App",
	components: {
		footerComp,
	},
	created() {},

	data() {
		return {
			name: "",
			email: "",
			message: "",
			services: null,
			phone: "",
			count: 0,
		};
	},

	computed: {},

	mounted() {
		/* $(".js-select2").each(function(){
			$(this).select2({
				minimumResultsForSearch: 20,
				dropdownParent: $(this).next('.dropDownSelect2')
			});


			$(".js-select2").each(function(){
				$(this).on('select2:close', function (){
					if($(this).val() == "Please chooses") {
						$('.js-show-service').slideUp();
					}
					else {
						$('.js-show-service').slideUp();
						$('.js-show-service').slideDown();
					}
				});
			});
		})*/
	},
	methods: {
		validateFields: function () {
			document.getElementById("submit").blur();
			let name = document.getElementById("name"),
				email = document.getElementById("email"),
				phone = document.getElementById("phone"),
				services = document.getElementById("services");
			if (this.name == "") {
				this.$fire({
					type: "error",
					title: "Please enter Name",
					showConfirmButton: false,
					timer: 2000,
				}).then(() => {
					name.focus();
				});
				return false;
			} else if (this.email == "") {
				this.$fire({
					type: "error",
					title: "Please enter a valid Mail Id",
					showConfirmButton: false,
					timer: 2000,
				}).then(() => {
					email.focus();
				});
				return false;
			} else if (this.phone == "") {
				this.$fire({
					type: "error",
					title: "Please enter Phone Number",
					showConfirmButton: false,
					timer: 2000,
				}).then(() => {
					phone.focus();
				});
				return false;
			} else if (this.services === null) {
				this.$fire({
					type: "error",
					title: "Please select a Service",
					showConfirmButton: false,
					timer: 2000,
				}).then(() => {
					services.focus();
				});
				return false;
			} else {
				return true;
			}
		},
		sendmail: function () {
			this.count++;
			document.getElementById("submit").disabled = true;

			let validateFieldsVal = this.validateFields();
			if (validateFieldsVal) {
				try {
					emailjs
						.send(
							"service_ihqsqt6",
							"template_f4ypdm9",
							{
								from_name: this.name,
								message: this.message,
								services: this.services,
								reply_from: this.email,
							},
							"user_tf7AmbyaWdHiZ44pDSL2s"
						)
						.then((res) => {
							setTimeout(function () {
								document.getElementById(
									"submit"
								).disabled = false;
							}, 10000);
							console.log(res.status);
						});
				} catch (error) {
					console.log({ error });
				}
				//document.getElementById("submit").disabled = false;
			} else {
				setTimeout(function () {
					document.getElementById("submit").disabled = false;
				}, 10000);
				//document.getElementById("submit").disabled = false;
				return false;
			}
			console.log(this.count + "==count");
		},
	},
};
</script>


