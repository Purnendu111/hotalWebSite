<template>
	<div style="padding: 30px">
		<h1>
			<center>CheckOut</center>
		</h1>
		<div style="padding: 40px 10%">
			<b-row
				style="
					padding-top: 20px;
					padding-bottom: 30px;
					background: rgba(84, 87, 90, 0.2);
				"
			>
				<b-col cols="7">
					<b-row>
						<b-col>
							<h1 style="font-size: 24px">
								Malhar Greens- Sonarpur
							</h1>
							<hr
								style="
									width: 100px;
									border-bottom: 2px solid black;
								"
						/></b-col>
					</b-row>
					<b-row style="padding-bottom: 30px">
						<b-col cols="auto">
							<h6>Check-In(11:00 Am) <br />{{dateRange.startDate}}</h6></b-col
						>
						<b-col>
							<h6>Check-Out(10:00 Am) <br />{{dateRange.startDate}}</h6>
						</b-col>
					</b-row>
					<b-row style="padding-bottom: 30px" v-for="(roomdata, id) in roomList" :key="id">
						<b-col>
							<img
								src="../../assets/img/bed.svg"
								style="height: 30px !important"
								alt=""
							/>
							<span
								style="
									font-family: 'icomoon' !important;
									font-size: 20px;
									padding-left: 10px;
								"
								>{{roomdata.roomName}}
							</span>
						</b-col>
					</b-row>
					<!-- <b-row style="padding-bottom: 30px">
						<b-col>
							<img
								src="../../assets/img/bed.svg"
								style="height: 30px !important"
								alt=""
							/>
							<span
								style="
									font-family: 'icomoon' !important;
									font-size: 20px;
									padding-left: 10px;
								"
								>ROOM1: Superior Room</span
							>
						</b-col>
					</b-row> -->
				</b-col>
				<b-col>
					<b-row>
						<b-col>
							<h3>Summary Charges</h3>
						</b-col>
					</b-row>
					<b-row>
						<b-col cols="auto">
							<b-button v-b-toggle.details variant="outline"
								>Price ({{roomList.length}} Rooms 1 Night)
								<img
									src="../../assets/img/icons/down.svg"
									style="height: 20px !important"
									alt=""
							/></b-button>
						</b-col>
						<b-col align-self="center" style="text-align: right"
							>Rs. {{totalPriceForRooms}}</b-col
						>
					</b-row>
					<b-row style="padding-bottom: 20px">
						<b-col>
							<b-collapse
								id="details"
								class="mt-2"
								style="padding-left: 25px; padding-bottom: 20px"
							>
							<div v-for="(roomdata, id) in roomList" :key="id">
								<b-row>
									<b-col> {{roomdata.roomName}} </b-col>
								</b-row>
								<b-row>
									<b-col style=""> {{dateRange.startDate}} </b-col>
									<b-col style="text-align: right">
										{{roomdata.price}}
									</b-col>
								</b-row>
							</div>
							</b-collapse>
						</b-col>
					</b-row>
					<!-- <b-row>
            <b-col>
              <b-button v-b-toggle.Taxdetails variant="outline"
                >Taxes and Fees
                <img
                  src="../../assets/img/icons/down.svg"
                  style="height: 20px !important"
                  alt=""
              /></b-button>
            </b-col>
            <b-col align-self="center" style="text-align: right"
              >Rs. 11000</b-col
            >
          </b-row>
          <b-row>
            <b-col>
              <b-collapse id="Taxdetails" class="mt-2" style="padding-left: 25px;  padding-bottom: 20px">
                <b-row>
                  <b-col> Room1 </b-col>
                </b-row>
                <b-row>
                  <b-col style=""> dd-mm-yyyy </b-col>
                  <b-col style="text-align: right"> 5500 </b-col>
                </b-row>
                <b-row>
                  <b-col> Room2 </b-col>
                </b-row>
                <b-row>
                  <b-col style=""> dd-mm-yyyy </b-col>
                  <b-col style="text-align: right"> 5500 </b-col>
                </b-row>
              </b-collapse>
            </b-col>
          </b-row> 
          <b-row style="padding-top: 20px;">
              <b-col style="padding-left: 28px;">Total( 2 Rooms x 1 Night )<br>*Inclusive of all taxes.</b-col>
              <b-col style="text-align: right"> 22000</b-col>
          </b-row>-->
				</b-col>
			</b-row>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	name: "",
	data() {
		return {
			dateArray: [],
		};
	},
	computed: {
		...mapState({
			roomList: "roomList",
			dateRange:"dateRange",
			totalPriceForRooms:"totalPriceForRooms"
		}),
	},
	beforeMount() {},
	mounted() {
		console.log(JSON.stringify(this.roomList)+"=====data");
		console.log(JSON.stringify(this.dateRange)+"=====date===="+this.totalPriceForRooms);
	},
	methods: {
		// addRooms(id, roomType, roomName, price) {
		// 	let obj = {
		// 		roomType: roomType,
		// 		roomName: roomName,
		// 		price: price,
		// 	};
		// 	// console.log(obj);
		// 	this.$store.dispatch("addToRoomList", obj);
		// 	console.log(this.roomList);
		// 	document.getElementById(id).style.display = "none";
		// },
	},
};
</script>
