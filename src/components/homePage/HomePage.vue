<template>
	<div style="padding: 0; height: 100%">
		<b-carousel
			id="carousel-1"
			fade
			v-model="slide"
			:interval="100000"
			controls
			indicators
			background="#ababab"
			style="text-shadow: 1px 1px 2px #333; height: 100%"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
		>
			<!-- Text slides with image -->
			<b-carousel-slide
				class="cstmCarousel"
				caption="Decorate & Celebrate Your Special Day with Us"
				height="100%"
			>
				<template v-slot:img>
					<img
						class="d-block w-100"
						:src="getImgUrl('front.jpg')"
						style="width: 100% !important; height: 566px !important"
						alt="image slot"
					/>
				</template>
			</b-carousel-slide>

			<!-- Slides with custom text -->
			<b-carousel-slide>
				<template v-slot:img>
					<img
						class="d-block w-100"
						:src="getImgUrl('1.jpg')"
						style="width: 100% !important; height: 566px !important"
						alt="image slot"
					/>
				</template>
				<h1>Engagement</h1>
			</b-carousel-slide>

			<!-- Slides with image only -->
			<b-carousel-slide>
				<template v-slot:img>
					<img
						class="d-block w-100"
						:src="getImgUrl('office party.jpg')"
						style="width: 100% !important; height: 566px !important"
						alt="image slot"
					/>
				</template>
				<h1>Office party</h1>
			</b-carousel-slide>

			<!-- Slides with img slot -->
			<!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
			<b-carousel-slide>
				<template v-slot:img>
					<img
						class="d-block w-100"
						style="width: 100% !important; height: 566px !important"
						:src="getImgUrl('FlimingLocation.jpg')"
						alt="image slot"
					/>
				</template>
				<h1>Filming Location</h1>
			</b-carousel-slide>
			<b-carousel-slide>
				<template v-slot:img>
					<img
						class="d-block w-100"
						style="width: 100% !important; height: 566px !important"
						:src="getImgUrl('wedding.jpeg')"
						alt="image slot"
					/>
				</template>
				<h1>Wedding Services</h1>
			</b-carousel-slide>
		</b-carousel>
		<div style="height: 200px">
			<VueCtkDateTimePicker
				id="myDatePicker"
				:disabled-dates="disabledDates"
				:min-date="minDate"
				v-model="dateTime"
			/>
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
			minDate: "2022-01-23",
		};
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
