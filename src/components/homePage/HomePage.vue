<template>
	<div style="padding: 0">
		<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
</div>
		<div style="">
			<HotelDatePicker
				:disabledDates="['2022-01-28', '2022-02-11', '2018-02-21']"
			>
			</HotelDatePicker>
		</div>
	</div>
</template>

<script>
import HotelDatePicker from 'vue-hotel-datepicker'
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
export default {
	components: {
		HotelDatePicker,
	},
	data() {
		return {
			slide: 0,
			sliding: null,
			dateTime: null,
			disabledDates: ["2022-01-28", "2022-02-11", "2018-02-21"],
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
