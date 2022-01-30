<template>
	<div style="padding: 0; height: 100%">
		<video-background
			:src="require(`@/assets/img/video.mp4`)"
			style="max-height: 400px; height: 100vh"
			overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
		>
			<h1 style="color: white">Hallo welcome!</h1>
		</video-background>
		<div style="">
			<b-row>
				<b-col>
					<VueCtkDateTimePicker
						id="myDatePicker"
						class="myDatePicker"
						:disabled-dates="disabledDates"
						:min-date="minDate"
						:range="true"
						v-model="dateTime"
					/>
				</b-col>
				<b-col>
					<div class="col-md-4">
						<div class="form-group">
							<select class="form-control" required>
								<option value="" selected hidden>
									no of rooms
								</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</select>
							<span class="select-arrow"></span>
							<span class="form-label">Rooms</span>
						</div>
					</div>
				</b-col>
			</b-row>
			<b-row>
				<b-col style="height: 200px"> </b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slide: 0,
			sliding: null,
			dateTime: null,
			disabledDates: ["2022-01-25", "2022-01-27"],
			disabledHours: ["2022-01-25", "2022-01-27"],
			minDate: "",
		};
	},
	mounted() {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		var yyyy = today.getFullYear();
		this.minDate = yyyy + "-" + mm + "-" + dd;
	},
	methods: {
		onSlideStart() {
			this.sliding = true;
		},
		onSlideEnd() {
			this.sliding = false;
		},
		getImgUrl: function (imagePath) {
			console.log("@/assets/img/======" + imagePath);
			return require("@/assets/img/" + imagePath);
		},
	},
};
</script>


