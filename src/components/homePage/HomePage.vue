<template>
	<div style="padding: 0; height: 100%">
		<video-background
			:src="require(`@/assets/img/video.mp4`)"
			style="max-height: 650px; height: 650px; width: 100%"
			overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
		>
			<b-row class="">
				<b-col>
					<div>
						<div
							style="
								position: relative;
								top: 50px;
								text-align: center;
							"
						>
							<p style="font-size: 15px; color: #ccffcc">
								MALHAR GREENS , KOLKATA
							</p>
							<p style="font-size: 15px; color: white">______</p>
							<p style="font-size: 75px; color: #ccffcc">
								ENJOY A LUXURY <br />
								EXPERIENCE
							</p>
						</div>

						<div id="booking" class="section">
							<div class="section-center">
								<div class="container">
									<div class="row">
										<div
											class="booking-form"
											style="
												width: 100%;
												position: relative;
												top: -170px;
											"
										>
											<b-row style="margin: 0 !important">
												<b-col cols="4">
													<div class="form-header">
														<h2>Book Now</h2>
													</div>
												</b-col>
												<b-col
													cols="5"
													align-self="center"
													style="text-align: center"
												>
													<span class="form-label"
														>Check In & Check
														Out</span
													>
													<label
														for=""
														@click="
															showModal = true
														"
														style="cursor: pointer"
														>26 Feb, 2022 - 28 Feb,
														2022
														<b-icon
															icon="calendar2-day-fill"
															aria-hidden="true"
														></b-icon
													></label>
												</b-col>
												<b-col
													cols="3"
													align-self="center"
												>
													<button
														class="submit-btn"
														@click="
															showModal = true
														"
													>
														Check availability
													</button>
												</b-col>
											</b-row>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</b-col>
			</b-row>
		</video-background>
		<div>
			<div class="container section" style="height: auto !important">
				<div class="row">
					<div class="col-md-6">
						<h3>Malhar Greens, Kolkata</h3>
						<p>
							<button class="btn">
								<i class="fa fa-home mr-2"></i>North
								Ramchandrapur</button
							><br />
							<button class="btn">
								<i class="fa fa-envelope mr-2"></i
								>abc@gmail.com</button
							><br />
							<button class="btn">
								<i class="fa fa-phone mr-2"></i>
								+91-0000000000</button
							><br />
						</p>
					</div>
					<div class="col-md-6">
						<img
							src="https://preview.ibb.co/erdq8p/Employee-1.jpg"
							alt=""
						/>
						<img
							src="https://preview.ibb.co/cu76g9/Employee-2.jpg"
							alt=""
						/>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<img
							src="https://preview.ibb.co/cu76g9/Employee-2.jpg"
							alt=""
						/>
					</div>
					<div class="col-md-6">
						<h3>Cutting-Edge Skill Development</h3>
						<p>
							GetLance Academy hosts regular, rigorous learning
							sessions for the most in-demand skills. By
							presenting our elite, experienced network with
							ongoing opportunities to update and elevate their
							portfolios, we are able to solve pressing talent
							shortages while ensuring success for dedicated
							participants.
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<img
							src="https://preview.ibb.co/cu76g9/Employee-2.jpg"
							alt=""
						/>
					</div>
					<div class="col-md-6">
						<h3>Cutting-Edge Skill Development</h3>
						<p>
							GetLance Academy hosts regular, rigorous learning
							sessions for the most in-demand skills. By
							presenting our elite, experienced network with
							ongoing opportunities to update and elevate their
							portfolios, we are able to solve pressing talent
							shortages while ensuring success for dedicated
							participants.
						</p>
					</div>
				</div>
			</div>
		</div>
		<Modal v-model="showModal" v-if="showModal">
			<b-row>
				<b-col cols="1"> From: </b-col>
				<b-col cols="5">
					<b-form-datepicker
						id="fromDate"
						v-model="fromDate"
						:min="minFrom"
						@input="dateRangeCal"
						:date-format-options="{
							year: 'numeric',
							month: 'short',
							day: '2-digit',
						}"
						class="mb-2"
					></b-form-datepicker
				></b-col>
				<b-col cols="1"> To: </b-col>
				<b-col cols="5">
					<b-form-datepicker
						id="toDate"
						:min="minTo"
						v-model="toDate"
						@input="dateRangeCal"
						:date-format-options="{
							year: 'numeric',
							month: 'numeric',
							day: 'numeric',
						}"
						class="mb-2"
					></b-form-datepicker>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-tabs card>
						<!-- Render Tabs, supply a unique `key` to each tab -->
						<b-tab
							v-for="(val, i) in tabs"
							:key="'room-' + i"
							:title="'Room ' + parseInt(i + 1)"
							style="text-transform: uppercase"
						>
							<b-row>
								<b-col
									style="
										border-right: solid 2px #e0dfdf !important;
									"
								>
									<b-row>
										<b-col align-self="center">
											Adults
										</b-col>
										<b-col style="text-align: right">
											<b-icon
												:icon="
													adultCount === 1
														? 'dash-circle'
														: 'dash-circle-fill'
												"
												id="minusAdult"
												class="minusAdult"
												@click="
													minusAdultChild(
														i,
														'adultCount'
													)
												"
												aria-hidden="true"
											></b-icon>
											<span
												:id="'adultCount_' + i"
												class="addedAdult gstCount"
												>{{ adultCount }}</span
											>
											<b-icon
												icon="plus-circle-fill"
												class="addAdult"
												@click="
													addAdultChild(
														i,
														'adultCount'
													)
												"
												aria-hidden="true"
											></b-icon>
										</b-col>
									</b-row>
								</b-col>
								<b-col>
									<b-row>
										<b-col align-self="center">
											CHILDREN (AGE: 0-12)
										</b-col>
										<b-col
											style="
												text-align: right;
												padding: 0;
											"
										>
											<b-icon
												:icon="
													childCount === 1
														? 'dash-circle'
														: 'dash-circle-fill'
												"
												id="minusAdult"
												class="minusAdult"
												@click="
													minusAdultChild(
														i,
														'childCount'
													)
												"
												aria-hidden="true"
											></b-icon>
											<span
												:id="'childCount_' + i"
												class="addedAdult gstCount"
												>{{ childCount }}</span
											>
											<b-icon
												icon="plus-circle-fill"
												class="addAdult"
												@click="
													addAdultChild(
														i,
														'childCount'
													)
												"
												aria-hidden="true"
											></b-icon>
										</b-col>
									</b-row>
								</b-col>
							</b-row>
							<b-row>
								<b-col
									v-if="tabs.length > 1"
									style="padding-top: 15px"
								>
									<b-button
										size="sm"
										variant="danger"
										class="float-right"
										@click="closeTab(i)"
									>
										Close This Room
									</b-button>
								</b-col>
							</b-row>
						</b-tab>

						<!-- New Tab Button (Using tabs-end slot) -->
						<template #tabs-end>
							<b-nav-item
								role="presentation"
								@click.prevent="newTab"
								href="#"
								><b>+</b></b-nav-item
							>
						</template>
					</b-tabs>
				</b-col>
			</b-row>
			<b-row style="padding-top: 20px">
				<b-col>
					<b-form-input id="promo" type="text"></b-form-input>
				</b-col>
				<b-col style="text-align: right" align-self="center">
					{{ showCorporateText }}
					<span
						v-if="!showCorporateInputType"
						style="
							font-size: 16px;
							cursor: pointer;
							font-weight: bold;
						"
						@click="showCorporateInputFunc"
						>Click Here!</span
					>
				</b-col>

				<b-col v-if="showCorporateInputType">
					<b-form-input
						placeholder="Rate Code"
						id="promoRateCode"
						type="text"
					></b-form-input>
				</b-col>
				<b-col style="height: 40px" v-if="showCorporateInputType">
					<b-form-input
						placeholder="Agency Id"
						id="promoAgencyId"
						type="text"
						style="width: 80%"
					></b-form-input>
					<b-icon
						style="position: relative; bottom: 30px; left: 200px"
						icon="dash-circle-fill"
						id="minusAdult"
						class="minusAdult"
						@click="showCorporateInputFunc"
						aria-hidden="true"
					></b-icon>
				</b-col>
			</b-row>
			<b-row style="padding-top: 60px">
				<b-col align-self="center"
					><span>{{ fromDate }} - {{ toDate }} | </span>
					{{ tabs.length }} Rooms | {{ totalGstCount }} Guest</b-col
				>
				<b-col style="text-align: right">
					<button class="chkAbl">Check availability</button>
				</b-col>
			</b-row>
		</Modal>
		<footerComp />
	</div>
</template>

<script>
import { mapState } from "vuex";

import footerComp from "../ExtraComponents/footer.vue";
export default {
	components: { footerComp },
	filters: {
		date(value) {
			if (!value) return "";
			let options = { year: "numeric", month: "long", day: "numeric" };
			return Intl.DateTimeFormat("en-US", options).format(value);
		},
	},
	data() {
		// const now = new Date();
		// const today = new Date(
		// 	now.getFullYear(),
		// 	now.getMonth(),
		// 	now.getDate()
		// );
		return {
			tabCounter: 0,
			showCorporateInputType: false,
			showCorporateText: "Add Corporate Info",
			tabs: [],
			adultCount: 1,
			childCount: 0,
			showModal: false,
			fromDate: "",
			toDate: "",
			minFrom: new Date(),
			minTo: new Date(),
			totalGstCount: 1,
			dateArray: [],
		};
	},
	computed: {
		...mapState({
			// dateRange: "dateRange",
		}),
	},
	beforeMount() {
		this.tabs.push(this.tabCounter++);
	},
	mounted() {
		var startDate = this.minTo;
		var dd1 = parseInt(String(startDate.getDate()).padStart(2, "0")) + 1;
		var mm1 = String(startDate.getMonth() + 1).padStart(2, "0"); //January is 0!
		var yyyy1 = startDate.getFullYear();
		this.minTo = yyyy1 + "-" + mm1 + "-" + dd1;
	},
	methods: {
		dateRangeCal() {
			alert("1111");
			let steps = 1;
			this.dateArray = [];
			let currentDate = new Date(this.fromDate);

			while (currentDate <= new Date(this.toDate)) {
				this.dateArray.push(new Date(currentDate));
				// Use UTC date to prevent problems with time zones and DST
				currentDate.setUTCDate(currentDate.getUTCDate() + steps);
			}

			console.log(this.dateArray);
		},
		getImgUrl: function (imagePath) {
			return require("@/assets/img/" + imagePath);
		},
		closeTab(x) {
			if (this.tabs.length > 1) {
				for (let i = 0; i < this.tabs.length; i++) {
					if (this.tabs[i] === x) {
						this.tabs.splice(i, 1);
						this.tabCounter--;
					}
				}
				let elem1 = document.getElementsByClassName("gstCount"),
					count = 0;
				elem1.forEach((element) => {
					count = count + parseInt(element.innerHTML);
				});
				this.totalGstCount = count;
			}
		},
		// dateFormat(classes) {
		// 	// if (!classes.disabled) {
		// 	// }
		// 	// return classes;
		// },
		newTab() {
			this.tabs.push(this.tabCounter++);
			this.totalGstCount++;
		},
		addAdultChild(callFromTab, addFor) {
			let elem = document.getElementById(addFor + "_" + callFromTab);
			elem.innerHTML = parseInt(elem.innerHTML) + 1;
			let elem1 = document.getElementsByClassName("gstCount"),
				count = 0;

			elem1.forEach((element) => {
				count = count + parseInt(element.innerHTML);
			});
			this.totalGstCount = count;
		},
		minusAdultChild(callFromTab, lessFor) {
			let elem = document.getElementById(lessFor + "_" + callFromTab);
			if (lessFor == "childCount") {
				if (parseInt(elem.innerHTML) > 0) {
					elem.innerHTML = parseInt(elem.innerHTML) - 1;
				}
			} else {
				if (parseInt(elem.innerHTML) > 1) {
					elem.innerHTML = parseInt(elem.innerHTML) - 1;
				}
			}
			let elem1 = document.getElementsByClassName("gstCount"),
				count = 0;
			elem1.forEach((element) => {
				count = count + parseInt(element.innerHTML);
			});
			this.totalGstCount = count;
		},
		showCorporateInputFunc() {
			if (this.showCorporateInputType) {
				this.showCorporateInputType = false;
				this.showCorporateText = "Add Corporate Info";
			} else {
				this.showCorporateInputType = true;
				this.showCorporateText = "Corporate Info:";
			}
		},
	},
};
</script>
