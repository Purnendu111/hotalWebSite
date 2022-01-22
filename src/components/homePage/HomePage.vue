<template>
	<div style="padding: 0">
		<b-carousel
			id="carousel-1"
			fade
			v-model="slide"
			:interval="4000"
			controls
			indicators
			background="#ababab"
			img-width="1024"
			img-height="250"
			style="text-shadow: 1px 1px 2px #333"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
		>
			<!-- Text slides with image -->
			<b-carousel-slide
				class="cstmCarousel"
				caption="Decorate & Celebrate Your Special Day with Us"
				:img-src="getImgUrl('front.jpg')"
				height="300px"
			></b-carousel-slide>

			<!-- Slides with custom text -->
			<b-carousel-slide :img-src="getImgUrl('1.jpg')">
				<h1>Engagement</h1>
			</b-carousel-slide>

			<!-- Slides with image only -->
			<b-carousel-slide :img-src="getImgUrl('office party.jpg')">
				<h1>Office party</h1>
			</b-carousel-slide>

			<!-- Slides with img slot -->
			<!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
			<b-carousel-slide>
				<template v-slot:img>
					<img
						class="d-block img-fluid w-100"
						width="1024"
						height="480"
						:src="getImgUrl('FlimingLocation.jpg')"
						alt="image slot"
					/>
				</template>
				<h1>Filming Location</h1>
			</b-carousel-slide>
			<b-carousel-slide :img-src="getImgUrl('wedding.jpeg')">
				<h1>Wedding Services</h1>
			</b-carousel-slide>
		</b-carousel>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slide: 0,
			sliding: null,
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
