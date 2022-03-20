<template>
	<div style="height: 100%">
		<div id="bodyRoomDetails" style="overflow-y: auto; overflow-x: hidden">
			<div id="pageHead">
				<h2 class="text-center">
					Reach out to Our Territory<br />________________
				</h2>
			</div>
			<div style="padding: 50px">
				<b-row
					style="
						margin-bottom: 20px !important;
						background: rgba(84, 87, 90, 0.2);
					"
				>
					<b-col cols="4" style="padding: 0 !important">
						<b-img
							src="https://picsum.photos/1024/400/?image=41"
							style="
								min-height: 350px !important;
								height: 100% !important;
							"
							fluid
							alt="Responsive image"
						></b-img>
					</b-col>
					<b-col cols="6" style="padding: 30px">
						<b-row style="padding-bottom: 20px !important">
							<h3 style="color: #004085">Hallway</h3>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<div id="showMin1">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's
									<span
										style="
											font-weight: 600;
											cursor: pointer;
										"
										@click="showData('1')"
										>...See More</span
									>
								</div>
								<div id="showMax1" style="display: none">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book.
									<span
										style="
											font-weight: 600;
											cursor: pointer;
										"
										@click="showData('1')"
										>...See More</span
									>
								</div>
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<img
									src="../../assets/img/area.png"
									style="height: 20px !important"
									alt=""
								/>
								21.63 – 24.26 Sq.m
							</b-col>
							<b-col>
								<img
									src="../../assets/img/wifi.png"
									style="height: 20px !important"
									alt=""
								/>
								Complimentary WiFi
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<img
									src="../../assets/img/maximumOccoumpany.png"
									style="height: 20px !important"
									alt=""
								/>
								Up to 2 guests. Max Adults: 2, Max Children: 1
								(sharing bed)
							</b-col>
							<b-col>
								<img
									src="../../assets/img/bedType.png"
									style="height: 20px !important"
									alt=""
								/>
								King
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<b-button
									size="sm"
									class="mb-2"
									v-b-toggle.room1_details
								>
									Room Details
									<b-icon
										icon="caret-down"
										aria-hidden="true"
									></b-icon>
								</b-button>
							</b-col>
						</b-row>
					</b-col>
					<b-col
						cols="2"
						style="text-align: right; padding: 30px"
						align-self="end"
					>
						<b-row>
							<b-col>₹ 5100</b-col>
						</b-row>
						<b-row>
							<b-col class="padding10">Starting Rate/Night</b-col>
						</b-row>
						<b-row>
							<b-col>
								<b-button
									variant="outline-primary"
									id="room_1"
									@click="
										addRooms(
											'room_1',
											'attachBath',
											'Hallway',
											'5100'
										)
									"
								>
									SELECT ROOM<b-icon icon="check"></b-icon>
								</b-button>

								<b-button
									variant="outline-primary"
									id="room_1_cncl"
									style="display: None"
									@click="cancleRoom('room_1')"
								>
									Cancle ROOM<b-icon icon="trash"></b-icon>
								</b-button>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
				<b-row style="padding-bottom: 20px">
					<b-col>
						<b-collapse id="room1_details">
							<b-card title="Collapsible card">
								Hello world!
							</b-card>
						</b-collapse>
					</b-col>
				</b-row>

				<b-row
					style="
						margin-bottom: 20px !important;
						background: rgba(84, 87, 90, 0.2);
					"
				>
					<b-col cols="4" style="padding: 0 !important">
						<b-img
							src="https://picsum.photos/1024/400/?image=41"
							style="
								min-height: 350px !important;
								height: 100% !important;
							"
							fluid
							alt="Responsive image"
						></b-img>
					</b-col>
					<b-col cols="6" style="padding: 30px">
						<b-row style="padding-bottom: 20px !important">
							<h3 style="color: #004085">Green Room</h3>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<div id="showMin1">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's
									<span
										style="
											font-weight: 600;
											cursor: pointer;
										"
										@click="showData('1')"
										>...See More</span
									>
								</div>
								<div id="showMax1" style="display: none">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book.
									<span
										style="
											font-weight: 600;
											cursor: pointer;
										"
										@click="showData('1')"
										>...See More</span
									>
								</div>
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<img
									src="../../assets/img/area.png"
									style="height: 20px !important"
									alt=""
								/>
								21.63 – 24.26 Sq.m
							</b-col>
							<b-col>
								<img
									src="../../assets/img/wifi.png"
									style="height: 20px !important"
									alt=""
								/>
								Complimentary WiFi
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<img
									src="../../assets/img/maximumOccoumpany.png"
									style="height: 20px !important"
									alt=""
								/>
								Up to 2 guests. Max Adults: 2, Max Children: 1
								(sharing bed)
							</b-col>
							<b-col>
								<img
									src="../../assets/img/bedType.png"
									style="height: 20px !important"
									alt=""
								/>
								King
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<b-button
									size="sm"
									class="mb-2"
									v-b-toggle.room2_details
								>
									Room Details
									<b-icon
										icon="caret-down"
										aria-hidden="true"
									></b-icon>
								</b-button>
							</b-col>
						</b-row>
					</b-col>
					<b-col
						cols="2"
						style="text-align: right; padding: 30px"
						align-self="end"
					>
						<b-row>
							<b-col>₹ 4700</b-col>
						</b-row>
						<b-row>
							<b-col class="padding10">Starting Rate/Night</b-col>
						</b-row>
						<b-row>
							<b-col>
								<b-button
									id="room_2"
									variant="outline-primary"
									@click="
										addRooms(
											'room_2',
											'withOutBath',
											'Green Room',
											'4700'
										)
									"
								>
									SELECT ROOM<b-icon icon="check"></b-icon>
								</b-button>

								<b-button
									variant="outline-primary"
									id="room_2_cncl"
									style="display: None"
									@click="cancleRoom('room_2')"
								>
									Cancle ROOM<b-icon icon="trash"></b-icon>
								</b-button>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
				<b-row style="padding-bottom: 20px">
					<b-col>
						<b-collapse id="room2_details">
							<b-card title="Collapsible card">
								Hello world!
							</b-card>
						</b-collapse>
					</b-col>
				</b-row>
				<b-row
					style="
						margin-bottom: 20px !important;
						background: rgba(84, 87, 90, 0.2);
					"
				>
					<b-col cols="4" style="padding: 0 !important">
						<b-img
							src="https://picsum.photos/1024/400/?image=41"
							style="
								min-height: 350px !important;
								height: 100% !important;
							"
							fluid
							alt="Responsive image"
						></b-img>
					</b-col>
					<b-col cols="6" style="padding: 30px">
						<b-row style="padding-bottom: 20px !important">
							<h3 style="color: #004085">Kitchen with Dinette</h3>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<div id="showMin1">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's
									<span
										style="
											font-weight: 600;
											cursor: pointer;
										"
										@click="showData('1')"
										>...See More</span
									>
								</div>
								<div id="showMax1" style="display: none">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book.
									<span
										style="
											font-weight: 600;
											cursor: pointer;
										"
										@click="showData('1')"
										>...See More</span
									>
								</div>
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<img
									src="../../assets/img/area.png"
									style="height: 20px !important"
									alt=""
								/>
								21.63 – 24.26 Sq.m
							</b-col>
							<b-col>
								<img
									src="../../assets/img/wifi.png"
									style="height: 20px !important"
									alt=""
								/>
								Complimentary WiFi
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<img
									src="../../assets/img/maximumOccoumpany.png"
									style="height: 20px !important"
									alt=""
								/>
								Up to 2 guests. Max Adults: 2, Max Children: 1
								(sharing bed)
							</b-col>
							<b-col>
								<img
									src="../../assets/img/bedType.png"
									style="height: 20px !important"
									alt=""
								/>
								King
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<b-button
									size="sm"
									class="mb-2"
									v-b-toggle.room3_details
								>
									Room Details
									<b-icon
										icon="caret-down"
										aria-hidden="true"
									></b-icon>
								</b-button>
							</b-col>
						</b-row>
					</b-col>
					<b-col
						cols="2"
						style="text-align: right; padding: 30px"
						align-self="end"
					>
						<b-row>
							<b-col>₹ 5100</b-col>
						</b-row>
						<b-row>
							<b-col class="padding10">Starting Rate/Night</b-col>
						</b-row>
						<b-row>
							<b-col>
								<b-button
									variant="outline-primary"
									id="room_3"
									@click="
										addRooms(
											'room_3',
											'attachBath',
											'Kitchen with Dinette',
											'5100'
										)
									"
								>
									SELECT ROOM<b-icon icon="check"></b-icon>
								</b-button>

								<b-button
									variant="outline-primary"
									id="room_3_cncl"
									style="display: None"
									@click="cancleRoom('room_3')"
								>
									Cancle ROOM<b-icon icon="trash"></b-icon>
								</b-button>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
				<b-row style="padding-bottom: 20px">
					<b-col>
						<b-collapse id="room3_details">
							<b-card title="Collapsible card">
								Hello world!
							</b-card>
						</b-collapse>
					</b-col>
				</b-row>
				<b-row
					style="
						margin-bottom: 20px !important;
						background: rgba(84, 87, 90, 0.2);
					"
				>
					<b-col cols="4" style="padding: 0 !important">
						<b-img
							src="https://picsum.photos/1024/400/?image=41"
							style="
								min-height: 350px !important;
								height: 100% !important;
							"
							fluid
							alt="Responsive image"
						></b-img>
					</b-col>
					<b-col cols="6" style="padding: 30px">
						<b-row style="padding-bottom: 20px !important">
							<h3 style="color: #004085">
								Double Bed with Attach Bath
							</h3>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<div id="showMin1">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's
									<span
										style="
											font-weight: 600;
											cursor: pointer;
										"
										@click="showData('1')"
										>...See More</span
									>
								</div>
								<div id="showMax1" style="display: none">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book.
									<span
										style="
											font-weight: 600;
											cursor: pointer;
										"
										@click="showData('1')"
										>...See More</span
									>
								</div>
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<img
									src="../../assets/img/area.png"
									style="height: 20px !important"
									alt=""
								/>
								21.63 – 24.26 Sq.m
							</b-col>
							<b-col>
								<img
									src="../../assets/img/wifi.png"
									style="height: 20px !important"
									alt=""
								/>
								Complimentary WiFi
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<img
									src="../../assets/img/maximumOccoumpany.png"
									style="height: 20px !important"
									alt=""
								/>
								Up to 2 guests. Max Adults: 2, Max Children: 1
								(sharing bed)
							</b-col>
							<b-col>
								<img
									src="../../assets/img/bedType.png"
									style="height: 20px !important"
									alt=""
								/>
								King
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<b-button
									size="sm"
									class="mb-2"
									v-b-toggle.room4_details
								>
									Room Details
									<b-icon
										icon="caret-down"
										aria-hidden="true"
									></b-icon>
								</b-button>
							</b-col>
						</b-row>
					</b-col>
					<b-col
						cols="2"
						style="text-align: right; padding: 30px"
						align-self="end"
					>
						<b-row>
							<b-col>₹ 5100</b-col>
						</b-row>
						<b-row>
							<b-col class="padding10">Starting Rate/Night</b-col>
						</b-row>
						<b-row>
							<b-col>
								<b-button
									variant="outline-primary"
									id="room_4"
									@click="
										addRooms(
											'room_4',
											'attachBath',
											'Double Bed with Attach Bath',
											'5100'
										)
									"
								>
									SELECT ROOM<b-icon icon="check"></b-icon>
								</b-button>
								<b-button
									variant="outline-primary"
									id="room_4_cncl"
									style="display: None"
									@click="cancleRoom('room_4')"
								>
									Cancle ROOM<b-icon icon="trash"></b-icon>
								</b-button>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
				<b-row style="padding-bottom: 20px">
					<b-col>
						<b-collapse id="room4_details">
							<b-card title="Collapsible card">
								Hello world!
							</b-card>
						</b-collapse>
					</b-col>
				</b-row>
				<b-row
					style="
						margin-bottom: 20px !important;
						background: rgba(84, 87, 90, 0.2);
					"
				>
					<b-col cols="4" style="padding: 0 !important">
						<b-img
							src="https://picsum.photos/1024/400/?image=41"
							style="
								min-height: 350px !important;
								height: 100% !important;
							"
							fluid
							alt="Responsive image"
						></b-img>
					</b-col>
					<b-col cols="6" style="padding: 30px">
						<b-row style="padding-bottom: 20px !important">
							<h3 style="color: #004085">
								Double Bed without Bath
							</h3>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<div id="showMin1">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's
									<span
										style="
											font-weight: 600;
											cursor: pointer;
										"
										@click="showData('1')"
										>...See More</span
									>
								</div>
								<div id="showMax1" style="display: none">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book.
									<span
										style="
											font-weight: 600;
											cursor: pointer;
										"
										@click="showData('1')"
										>...See More</span
									>
								</div>
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<img
									src="../../assets/img/area.png"
									style="height: 20px !important"
									alt=""
								/>
								21.63 – 24.26 Sq.m
							</b-col>
							<b-col>
								<img
									src="../../assets/img/wifi.png"
									style="height: 20px !important"
									alt=""
								/>
								Complimentary WiFi
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<img
									src="../../assets/img/maximumOccoumpany.png"
									style="height: 20px !important"
									alt=""
								/>
								Up to 2 guests. Max Adults: 2, Max Children: 1
								(sharing bed)
							</b-col>
							<b-col>
								<img
									src="../../assets/img/bedType.png"
									style="height: 20px !important"
									alt=""
								/>
								King
							</b-col>
						</b-row>
						<b-row style="padding-bottom: 20px !important">
							<b-col>
								<b-button
									size="sm"
									class="mb-2"
									v-b-toggle.room5_details
								>
									Room Details
									<b-icon
										icon="caret-down"
										aria-hidden="true"
									></b-icon>
								</b-button>
							</b-col>
						</b-row>
					</b-col>
					<b-col
						cols="2"
						style="text-align: right; padding: 30px"
						align-self="end"
					>
						<b-row>
							<b-col>₹ 5100</b-col>
						</b-row>
						<b-row>
							<b-col class="padding10"
								>Starting Rate/Night
							</b-col>
						</b-row>
						<b-row>
							<b-col>
								<b-button
									variant="outline-primary"
									id="room_5"
									@click="
										addRooms(
											'room_5',
											'attachBath',
											'Double Bed with Attach Bath',
											'5100'
										)
									"
								>
									SELECT ROOM<b-icon icon="check"></b-icon>
								</b-button>

								<b-button
									variant="outline-primary"
									id="room_5_cncl"
									style="display: None"
									@click="cancleRoom('room_5')"
								>
									Cancle ROOM<b-icon icon="trash"></b-icon>
								</b-button>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
				<b-row style="padding-bottom: 20px">
					<b-col>
						<b-collapse id="room5_details">
							<b-card title="Collapsible card">
								Hello world!
							</b-card>
						</b-collapse>
					</b-col>
				</b-row>
			</div>
			<footerComp />
		</div>
		<b-row id="chkOutRow" v-if="roomList.length > 0" style="height: 70px">
			<b-col class="pb-2" style="text-align: right; margin-right: 50px"
				><b-button
					size="lg"
					style="background: #003724"
					href="/checkout"
				>
					<img
						src="../../assets/img/icons/cart.svg"
						style="height: 50px !important"
						alt=""
					/>
					<sapn class="cstmCartCountTxt">{{ roomList.length }}</sapn>
					Pay now</b-button
				></b-col
			>
		</b-row>
	</div>
</template>
<script>
import { mapState } from "vuex";
import footerComp from "../ExtraComponents/footer.vue";
export default {
	name: "",
	components: { footerComp },
	data() {
		return {
			dateArray: [],
		};
	},
	computed: {
		...mapState({
			dateRange: "dateRange",
			roomTypeList: "roomTypeList",
			roomList: "roomList",
		}),
	},
	beforeMount() {},
	mounted() {
		console.log(this.roomTypeList);
		console.log(this.roomList);
		this.roomList.forEach((element) => {
			document.getElementById(element.id).style.display = "none";
			document.getElementById(element.id + "_cncl").style.display =
				"inline-table";
		});
		let self = this;
		setTimeout(() => {
			self.appHt();
			window.addEventListener(
				"resize",
				function () {
					self.appHt();
				},
				true
			);
		}, 500);
	},
	methods: {
		appHt: function () {
			var h = window.innerHeight,
				navDivContainerHt =
					document.getElementById("navDivContainer").offsetHeight,
				chkOutRow =
					document.getElementById("chkOutRow") == null
						? 0
						: document.getElementById("chkOutRow").offsetHeight;
			document.getElementById("bodyContainer").style.height =
				parseFloat(h) - parseFloat(navDivContainerHt) + "px";
			console.log(chkOutRow);
			document.getElementById("bodyRoomDetails").style.height =
				parseFloat(h) -
				parseFloat(navDivContainerHt) -
				parseFloat(chkOutRow) -
				30 +
				"px";
		},
		cancleRoom(id) {
			// alert(id)
			this.$store.dispatch("cnclRoom", id);
			document.getElementById(id + "_cncl").style.display = "none";
			document.getElementById(id).style.display = "inline-table";
			setTimeout(() => {
				this.appHt();
			}, 500);
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
			document.getElementById(id).style.display = "none";
			document.getElementById(id + "_cncl").style.display =
				"inline-table";
			setTimeout(() => {
				this.appHt();
			}, 500);
		},
	},
};
</script>
