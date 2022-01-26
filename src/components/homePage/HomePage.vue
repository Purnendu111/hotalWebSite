<template>
	<div style="padding: 0; height: 100%">
		<b-embed
			type="iframe"
			aspect="16by9"
			src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
			allowfullscreen
		></b-embed>
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
					<b-form-select
						id="adults"
						name="adults"
						class="paddingLeft10"
						style="width: 100% !important"
						menu-class="w-100"
						v-model="adults"
					>
						<b-form-select-option :value="null"
							>How many Adults</b-form-select-option
						>
						<b-form-select-option :value="10"
							>1</b-form-select-option
						>
						<b-form-select-option :value="25"
							>2</b-form-select-option
						>
						<b-form-select-option :value="50"
							>3</b-form-select-option
						>
						<b-form-select-option :value="100"
							>4</b-form-select-option
						>
						<b-form-select-option :value="100"
							>5</b-form-select-option
						>
						<b-form-select-option :value="100"
							>6</b-form-select-option
						>
					</b-form-select>
				</b-col>
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
