<template>
	<div style="padding: 0; height: 100%">
		<video-background
			:src="require(`@/assets/img/video.mp4`)"
			style="max-height: 480px; height: 450px; width: 100%"
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
								CELEBRATE WITH NATURE
							</p>
							<p style="font-size: 15px; color: white">
								________
							</p>
							<p style="font-size: 40px; color: #ccffcc">
								MALHAR GREENS , KOLKATA
							</p>
						</div>

						<div id="booking" class="section">
							<div class="section-center">
								<div class="container">
									<div class="row">
										<div
											class="booking-form formBook"
											style=""
										>
											<b-row style="margin: 0 !important">
												<b-col cols="4">
													<div class="form-header">
														<h2
															style="color: white"
														>
															Book Now
														</h2>
													</div>
												</b-col>
												<b-col
													cols="5"
													align-self="center"
													style="
														text-align: center;
														color: white;
													"
												>
													<span
														class="form-label"
														style="color: white"
														>Check In & Check
														Out</span
													>
													<label
														for=""
														v-b-modal.chkAvailable
														style="cursor: pointer"
														>{{ fromDate }} -
														{{ toDate }}
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
														v-b-modal.chkAvailable
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
				<b-row class="sectionRow">
					<b-col>
						<h3>Malhar Greens, Kolkata</h3>
						<hr />
						<p>
							Malhar Green is an ideal location to celebrate your
							special functions and joyous gatherings.<br />
							Nestled amidst the lush green orchard of Teak,
							Coconut, Lichie, Cardamom and Sal trees, it provides
							the much-needed cucoon of nature, very close to the
							city but far from its hustle-bustle. Just a 10 min
							drive from Shaheed Khudiram/ Kavi Nazrul Metro
							station, you can reach this property at ease through
							public and private conveyance. It houses a floating
							stage where you can host parties and events. And the
							best part! It is available for all-night bookings
							too.
							<br />The venue is also perfect for pre-wedding and
							other photography backdrops. <br /><br />
							<button class="btn">
								<i class="fa fa-map-marker mr-2"></i
								>Ramchandrapur (N), S. N. Ghosh Avenue Beside
								Ekta Sangha club (opposite road of S.N.
								Medical), P.O. Narendrapur, Kolkata 700103</button
							><br />
							<button class="btn">
								<i class="fa fa-envelope mr-2"></i
								>malhargreens@gmail.com</button
							><br />
							<button class="btn">
								<i class="fa fa-phone mr-2"></i>
								+91-9051914005
							</button>
						</p>
						<p
							style="
								font-size: 20px;
								font-weight: bold;
								color: #004085;
							"
						>
							Hotel Highlights<br />
						</p>
						<hr />
						<small>
							House of 1800 sqft[central hall of 500 sqft]<br />
							4 large rooms for accomodation<br />
							17000+ sqft garden<br />
							More than 350 sqft Pool<br />
							Floating stage of more than 100 sqft area<br />
							Garden with more than 100 trees/ plants<br />
							Outdoor and indoor washroom facilities<br />
							5 min walk from EM Bypass <br />
							30 mins from Jadavpur 8B bas stand/ 45 mins from
							Gariahat
						</small>

						<!-- <button class="btn">
								<i class="fa fa-home mr-2"></i>
								<small>House of 1800 sqft [central hall of 500 sqft]</small></button
							>
							<button class="btn">
								<i class="fa fa-map-marker mr-2"></i>
								<small>Close to the city but far from its hustle-bustle</small></button
							><br />
							<button class="btn">
								<i class="fa fa-cutlery mr-2"></i>
								<small>Beautiful Banquet spaces for Weddings & Events</small></button
							><br />
							<button class="btn">
								<i class="fa fa-camera mr-2"></i>
								<small>Amazing location for shoots</small></button
							><br /> -->

						<p></p>
						<p
							style="
								font-size: 20px;
								font-weight: bold;
								color: #004085;
							"
						>
							Hotel Policies
						</p>
						<hr />
						<small
							>Check-in from 11:00 PM<br />
							Check-out till 12:00 PM<br />
							Early Check in and late check-out on request at
							additional charge<br />
							We accept VISA, Mastercard, Rupay, AMEX, Razorpay,
							Bank Transfer (RTGS, NEFT, IMPS)<br />
							Kids’ stay is free, up to the age of 12 years<br />
							Group discounts are available<br />
							Pets are allowed.<br />
						</small>
					</b-col>
					<b-col>
						<b-row>
							<b-col>
								<img
									src="https://preview.ibb.co/erdq8p/Employee-1.jpg"
									style="width: 100%; height: 200px"
									alt=""
								/>
							</b-col>
							<b-col>
								<img
									src="https://preview.ibb.co/cu76g9/Employee-2.jpg"
									style="width: 100%; height: 200px"
									alt=""
								/>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
				<b-row class="sectionRow">
					<!-- <b-col>
						<b-row>
							<b-col>
								<img
									src="https://preview.ibb.co/erdq8p/Employee-1.jpg"
									style="width: 100%; height: 200px"
									alt=""
								/>
							</b-col>
							<b-col>
								<img
									src="https://preview.ibb.co/cu76g9/Employee-2.jpg"
									style="width: 100%; height: 200px"
									alt=""
								/>
							</b-col>
						</b-row>
					</b-col> -->
					<b-col>
						<h3>Venue</h3>
						<hr
							style="
								width: 8%;
								height: 3px;
								border-width: 0;
								color: gray;
								background-color: gray;
							"
						/>
						<div class="container">
							<div class="row">
								<div class="col-md-5 col-sm-6">
									<div class="pricingTable">
										<div class="pricing_heading">
											<h3 class="title">Lawn</h3>
											<span class="value">
												Rs. 35000/-
												<span class="month"
													>per booking</span
												>
											</span>
										</div>
										<div class="content">
											<ul>
												<li>
													100 sqft. Floating Stage
												</li>
												<li>350+ sqft. Pool</li>
												<li>17000+ sqft. garden</li>
												<li>
													Garden with more than 100
													trees/plants
												</li>
												<li>Lorem ipsum</li>
											</ul>
											<div
												class="link roomSelectButtom"
												id="lawn"
												@click="
													addRooms(
														'lawn',
														'LAWN',
														'LAWN',
														'35000'
													)
												"
											>
												<a href="javascript:void(0)"
													>Book Now</a
												>
											</div>
											<div
												class="
													link
													roomSelectButtom
													displayNone
												"
												id="lawn_cancle"
												@click="cancleRoom('lawn')"
											>
												<a href="javascript:void(0)"
													>Cancle Now</a
												>
											</div>
											<div
												class="link showTxt displayNone"
												id="showTxtOnly"
											>
												This option is already selected
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-5 col-sm-6">
									<div class="pricingTable">
										<div class="pricing_heading">
											<h3 class="title">
												House along with Lawn
											</h3>
											<span class="value">
												Rs. 100000/-
												<span class="month"
													>per booking</span
												>
											</span>
										</div>
										<div class="content">
											<ul>
												<li>1800 sqft. House</li>
												<li>500 sqft. Central hall</li>
												<li>
													4 large rooms for
													accomodation
												</li>
												<li>
													Outdoor and indoor washroom
												</li>
												<li>Lorem ipsum</li>
											</ul>
											<div
												class="link roomSelectButtom"
												id="house_along_with_lawn"
												@click="
													addRooms(
														'house_along_with_lawn',
														'House_along_with_Lawn',
														'House along with Lawn',
														'100000'
													)
												"
											>
												<a href="javascript:void(0)"
													>Book Now</a
												>
											</div>
											<div
												class="
													link
													house_along_with_lawn_cancle
													displayNone
												"
												id="house_along_with_lawn_cancle"
												@click="
													cancleRoom(
														'house_along_with_lawn'
													)
												"
											>
												<a href="javascript:void(0)"
													>Cancle Room</a
												>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- <p>
							GetLance Academy hosts regular, rigorous learning
							sessions for the most in-demand skills. By
							presenting our elite, experienced network with
							ongoing opportunities to update and elevate their
							portfolios, we are able to solve pressing talent
							shortages while ensuring success for dedicated
							participants.
						</p> -->
					</b-col>
				</b-row>
				<div class="row" style="height: 400px">
					<div class="col-md-4">
						<h3>Location</h3>
						<hr
							style="
								width: 25%;
								height: 3px;
								border-width: 0;
								color: gray;
								background-color: gray;
							"
						/>
						<!-- <p>
							Malhar Greens<br />
							Ramchandrapur (N)<br />
							S. N. Ghosh Avenue<br />
							Beside Ekta Sangha club (opposite road of S.N.
							Medical)<br />
							P.O. Narendrapur<br />
							Kolkata 700103
						</p> -->
					</div>
					<div class="col-md-8">
						<gmap-map
							:zoom="15"
							:center="center"
							style="width: 100%; height: 100%"
						>
							<gmap-marker
								:key="index"
								v-for="(gmp, index) in markers"
								:position="{
									lat: parseFloat(gmp.lat),
									lng: parseFloat(gmp.lng),
								}"
								@click="openInfoWindowTemplate(index)"
							></gmap-marker>
							<gmap-info-window
								:options="{
									maxWidth: 300,
									pixelOffset: {
										width: 0,
										height: -35,
									},
								}"
								:position="infoWindow.position"
								:opened="infoWindow.open"
								@closeclick="infoWindow.open = false"
							>
								<div v-html="infoWindow.template"></div>
							</gmap-info-window>
						</gmap-map>
					</div>
				</div>
			</div>
		</div>
		<b-modal id="chkAvailable" centered size="xl" title="">
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
							month: 'short',
							day: '2-digit',
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
												>1</span
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
												>0</span
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
			<template #modal-footer="{}">
				<b-row style="padding-top: 60px; width: 100%">
					<b-col align-self="center"
						><span>{{ fromDate }} - {{ toDate }} | </span>
						{{ tabs.length }} Rooms |
						{{ totalGstCount }} Guest</b-col
					>
					<b-col style="text-align: right">
						<button @click="chkAvalibility" class="chkAbl">
							Check availability
						</button>
					</b-col>
				</b-row>
			</template>
		</b-modal>
		<footerComp />
	</div>
</template>

<script>
import { mapState } from "vuex";
// import rzrPay from "../payments/googlePay.vue";

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
			center: { lat: 22.5664528, lng: 88.3215014 },
			currentPlace: "",
			infoWindow: {
				position: { lat: 0, lng: 0 },
				open: false,
				template: "",
			},
			mapHt: "",
			markers: [
				{
					lat: 22.5664528,
					lng: 88.3215014,
					label: "Welcome To my Malhar Greens",
				},
			],
			places: [],
			tabCounter: 0,
			showCorporateInputType: false,
			showCorporateText: "Add Corporate Info",
			tabs: [],
			adultCount: 1,
			childCount: 0,
			showModal: false,
			fromDate: new Date(),
			toDate: new Date(),
			minFrom: new Date(),
			minTo: new Date(),
			totalGstCount: 1,
			dateArray: [],
			oldDateData: [
				"2022-03-02",
				"2022-03-03",
				"2022-03-05",
				"2022-03-09",
			],
		};
	},
	computed: {
		...mapState({
			// dateRange: "dateRange",
			roomList: "roomList",
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
		this.fromDate = yyyy1 + "-" + mm1 + "-" + (parseInt(dd1) - 1);
		this.toDate = yyyy1 + "-" + mm1 + "-" + dd1;
		if (this.roomList.length > 0) {
			if (this.roomList[0].id == "house_along_with_lawn") {
				for (let el of document.querySelectorAll(".roomSelectButtom"))
					el.classList.add("displayNone");
				alert((this.roomList[0].id + "_cancle").length);
				document
					.getElementById(this.roomList[0].id + "_cancle")
					.classList.remove("displayNone");
			}
			this.roomList.forEach((element) => {
				document.getElementById(element.id) !== null
					? document
							.getElementById(element.id)
							.classList.add("displayNone")
					: "";
				document.getElementById(element.id + "_cancle") !== null
					? document
							.getElementById(element.id + "_cancle")
							.classList.remove("displayNone")
					: "";
			});
		}
	},
	methods: {
		setPlace(place) {
			//console.log(JSON.stringify(place));
			this.currentPlace = place;
		},
		geolocate: function () {
			navigator.geolocation.getCurrentPosition((position) => {
				this.center = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
				/*console.log(
                    position.coords.latitude + "===" + position.coords.longitude
                );*/
			});
		},
		openInfoWindowTemplate(index) {
			this.infoWindow.position = {
				lat: this.markers[index].lat,
				lng: this.markers[index].lng,
			};
			console.log(this.markers[index].label);
			this.infoWindow.template = `<b>${this.markers[index].label}</b>`;
			this.infoWindow.open = true;
		},
		dateRangeCal() {
			let steps = 1;
			this.dateArray = [];
			let currentDate = new Date(this.fromDate);
			let obj = { startDate: this.fromDate, endDate: this.toDate };
			this.$store.dispatch("dateChange", obj);
			while (currentDate <= new Date(this.toDate)) {
				this.dateArray.push(new Date(currentDate));
				// Use UTC date to prevent problems with time zones and DST
				currentDate.setUTCDate(currentDate.getUTCDate() + steps);
			}

			console.log(this.dateArray);
		},
		chkAvalibility() {
			let count = 0;
			this.oldDateData.forEach((data) => {
				this.dateArray.forEach((data1) => {
					if (new Date(data).getTime() == new Date(data1).getTime()) {
						count++;
					}
				});
			});
			if (count != 0) {
				this.showModal = false;
				this.$fire({
					type: "error",
					title: "Slot is not available to the given date Range",
					showConfirmButton: false,
					timer: 2000,
				}).then(() => {
					// this.$router.push({
					// 	path: "/successpage",
					// });
				});
			}
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
		addRooms(id, roomType, roomName, price) {
			let obj = {
				id: id,
				roomType: roomType,
				roomName: roomName,
				price: price,
			};
			// console.log(obj);
			this.$store.dispatch("addToRoomList", obj);
			console.log(this.roomList);
			if (id == "house_along_with_lawn") {
				for (let el of document.querySelectorAll(".roomSelectButtom"))
					el.classList.add("displayNone");
				document
					.getElementById(id + "_cancle")
					.classList.remove("displayNone");
				document
					.getElementById("showTxtOnly")
					.classList.remove("displayNone");
			} else {
				document.getElementById(id).classList.add("displayNone");
				document
					.getElementById(id + "_cancle")
					.classList.remove("displayNone");
			}
		},
		cancleRoom(id) {
			// alert(id)
			this.$store.dispatch("cnclRoom", id);
			if (id == "house_along_with_lawn") {
				for (let el of document.querySelectorAll(".displayNone"))
					el.classList.remove("displayNone");
				document
					.getElementById("house_along_with_lawn_cancle")
					.classList.add("displayNone");
				document
					.getElementById("lawn_cancle")
					.classList.add("displayNone");
				document
					.getElementById("showTxtOnly")
					.classList.add("displayNone");
			} else {
				document.getElementById(id + "_cancle") !== null
					? document
							.getElementById(id + "_cancle")
							.classList.add("displayNone")
					: "";
				document.getElementById(id) !== null
					? document
							.getElementById(id)
							.classList.remove("displayNone")
					: "";
			}
		},
	},
};
</script>
