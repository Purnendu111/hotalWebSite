<template>
	<div style="padding: 0 30px">
		<b-row>
			<b-col>
				<div>
					<!-- <div class="HeadingHomePage">Top Picks for you</div>
                    <hr class="cstmHR" /> -->
					<br />
					<b-row>
						<b-col
							><b-card-group deck>
								<b-card
									v-for="prod in 7"
									:key="topProdList[prod - 1].id"
									no-body
									class="cp"
									style="
										max-width: 200px;
										min-width: 200px !important;
										margin: 0 0 10px 15px;
									"
									img-alt="Image"
									img-top
								>
									<b-card-body class="suggestedProdCard">
										<b-card-img
											:src="
												getImgUrl(
													topProdList[prod - 1].img
												)
											"
											@click="
												gotoSpecProd(
													newProdList[prod - 1].id
												)
											"
											alt="Image"
											class="rounded-0"
											height="250px"
											style="padding: 20px !important"
										></b-card-img>
										<b-card-title
											class="marginL5 marginR5 prodName"
											@click="
												gotoSpecProd(
													newProdList[prod - 1].id
												)
											"
										>
											{{
												topProdList[prod - 1]
													.productName
											}}</b-card-title
										>
										<b-card-sub-title
											class="
												mb-2
												marginL5
												marginR5
												loopPrice
											"
											@click="
												gotoSpecProd(
													newProdList[prod - 1].id
												)
											"
										>
											${{ topProdList[prod - 1].price }}
										</b-card-sub-title>
										<b-row class="margin0">
											<b-col cols="7" class="padding0">
												<b-card-text
													class="
														marginL5
														marginR5
														reviewText
													"
													style="font-size: 14px"
												>
													({{
														topProdList[prod - 1]
															.reviews
													}}
													Reviews)
												</b-card-text></b-col
											>
										</b-row>
										<b-row
											class="
												margin0
												marginL5
												marginR5
												marginB5
											"
										>
											<b-col cols="8" class="padding0">
												<StarRating
													:inline="true"
													:star-size="25"
													:read-only="true"
													:show-rating="false"
													active-color="#1BC263"
													:rating="
														topProdList[prod - 1]
															.rating
													"
													:increment="0.01"
												></StarRating>
											</b-col>
											<b-col
												align-self="center"
												class="text-right padding0"
												cols="4"
											>
												<p class="h5" style="margin: 0">
													<button
														:disabled="
															topProdList[
																prod - 1
															].quantity < 1
														"
														@click="
															cartManipulate(
																topProdList[
																	prod - 1
																],
																'add'
															)
														"
														style="
															background: transparent;
															border: none;
														"
													>
														<b-icon
															icon="bag"
															aria-hidden="true"
														></b-icon>
													</button>
												</p>
											</b-col>
										</b-row>
									</b-card-body>
								</b-card>
							</b-card-group>
						</b-col>
					</b-row>
				</div>
				<br /><br />
				<div class="HeadingHomePage">You may also like</div>
				<hr class="cstmHR" />
				<br />
				<b-row>
					<b-col
						><b-card-group deck>
							<b-card
								v-for="prod in 2"
								:key="newProdList[prod - 1].id"
								no-body
								class="cp"
								style="
									max-width: 200px;
									min-width: 200px !important;
									margin: 0 0 10px 15px;
								"
								img-alt="Image"
								img-top
							>
								<b-card-body class="suggestedProdCard">
									<b-card-img
										:src="
											getImgUrl(newProdList[prod - 1].img)
										"
										@click="
											gotoSpecProd(
												newProdList[prod - 1].id
											)
										"
										alt="Image"
										class="rounded-0"
										height="250px"
										style="padding: 20px !important"
									></b-card-img>
									<b-card-title
										class="marginL5 marginR5 prodName"
										@click="
											gotoSpecProd(
												newProdList[prod - 1].id
											)
										"
										>{{
											newProdList[prod - 1].productName
										}}</b-card-title
									>
									<b-card-sub-title
										class="mb-2 marginL5 marginR5 loopPrice"
										@click="
											gotoSpecProd(
												newProdList[prod - 1].id
											)
										"
										><b
											>${{
												newProdList[prod - 1].price
											}}</b
										>
									</b-card-sub-title>
									<b-row class="margin0">
										<b-col cols="7" class="padding0">
											<b-card-text
												class="
													marginL5
													marginR5
													reviewText
												"
												style="font-size: 14px"
											>
												({{
													newProdList[prod - 1]
														.reviews
												}}
												Reviews)
											</b-card-text></b-col
										>
									</b-row>
									<b-row
										class="
											margin0
											marginL5
											marginR5
											marginB5
										"
									>
										<b-col cols="8" class="padding0">
											<StarRating
												:inline="true"
												:star-size="25"
												:read-only="true"
												:show-rating="false"
												active-color="#1BC263"
												:rating="
													newProdList[prod - 1].rating
												"
												:increment="0.01"
											></StarRating>
										</b-col>
										<b-col
											align-self="center"
											class="text-right padding0"
											cols="4"
										>
											<p class="h5" style="margin: 0">
												<button
													:disabled="
														newProdList[prod - 1]
															.quantity < 1
													"
													@click="
														cartManipulate(
															newProdList[
																prod - 1
															],
															'add'
														)
													"
													style="
														background: transparent;
														border: none;
													"
												>
													<b-icon
														icon="bag"
														aria-hidden="true"
													></b-icon>
												</button>
											</p>
										</b-col>
									</b-row>
								</b-card-body>
							</b-card>
						</b-card-group>
					</b-col>
				</b-row>
			</b-col>
		</b-row>
	</div>
</template>

<script>
// import { mapState } from "vuex";
import prod from "../../assets/items.json";

import StarRating from "vue-star-rating";
export default {
	name: "homePage",
	components: {
		StarRating,
	},
	data() {
		return {
			loading: false,
			topProdList: prod.topProdList,
			newProdList: prod.newProdList,
		};
	},
	computed: {
		// ...mapState({
		//     topProdList: "products.topProdList",
		//     newProdList: "products.newProdList",
		// }),
		// topProdList() {
		//     if (this.loading == false) {
		//         return this.$store.state.products.topProdList;
		//     } else {
		//         return null;
		//     }
		// },
		// newProdList() {
		//     if (this.loading == false) {
		//         return this.$store.state.products.newProdList;
		//     } else {
		//         return null;
		//     }
		// },
	},
	async created() {
		// this.loading = true;
		await this.$store.dispatch("fetchAllProducts", prod).then(() => {
			this.loading = false;
		});
	},
	mounted() {
		// document.addEventListener("contextmenu", (event) => event.preventDefault()); //prevent right click
	},
	methods: {
		addprod() {
			this.addedProd = parseInt(this.addedProd) + 1;
		},
		minusprod() {
			if (this.addedProd > 1) {
				this.addedProd = parseInt(this.addedProd) - 1;
			}
		},
		cartManipulate(product, callFrom) {
			console.log("callFrom=====" + callFrom);
			let obj = [product, callFrom];
			this.$store.dispatch("cartManipulate", obj);
		},
		getImgUrl: function (imagePath) {
			console.log("@/assets/img/======" + imagePath);
			return require("@/assets/img/" + imagePath);
		},
		gotoSpecProd(id) {
			console.log("id== " + id);
			this.$router.push({
				path: "/productdetails/" + id,
			});
		},
	},
};
</script>
