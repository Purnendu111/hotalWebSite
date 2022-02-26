<template>
	<div>
		<!------ Include the above in your HEAD tag ---------->
		<div id="pageHead">
			<h2 class="text-center">About Us<br />______</h2>
			<p class="sub-text text-center">Know our great story</p>
		</div>
		<div class="container section" style="height: auto !important">
			<div class="row">
				<div class="col-md-6">
					<h3>Highly Skilled Volunteers</h3>
					<p>
						Through its program, TopVolunteer™, GetLance partners
						with leading nonprofits and NGOs around the world who
						need high-skilled talent for their volunteer
						initiatives. Members of the GetLance network are
						encouraged to offer their skills and experience to these
						projects, whether to solve a timely problem or to
						contribute on an ongoing basis.
					</p>
				</div>
				<div class="col-md-6">
					<img
						src="https://preview.ibb.co/erdq8p/Employee-1.jpg"
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
						sessions for the most in-demand skills. By presenting
						our elite, experienced network with ongoing
						opportunities to update and elevate their portfolios, we
						are able to solve pressing talent shortages while
						ensuring success for dedicated participants.
					</p>
				</div>
			</div>
		</div>

		<!-- End of .container -->
		<footerComp />
	</div>
</template>
<script>
import footerComp from "../ExtraComponents/footer.vue";

export default {
	components: {
		footerComp,
	},
};
</script>
