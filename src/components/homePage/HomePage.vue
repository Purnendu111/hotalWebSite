<template>
  <div style="padding: 0">
    <b-row>
      <b-col>
        <div>
          <b-carousel
            id="carousel-1"
			v-model="slide"
			:interval="5000"
			controls
			indicators
			background="#ccc"
			img-width="1024"
			img-height="400"
			style="text-shadow: 1px 1px 2px #000;"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
          >
		<b-carousel-slide
              caption="Decorate & Celebrate Your Special Day with Us"
              :img-src="getImgUrl('front.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Engagement"
              :img-src="getImgUrl('1.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Office party"
              :img-src="getImgUrl('office party.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Filming Location"
              :img-src="getImgUrl('FlimingLocation.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Wedding Services"
              :img-src="getImgUrl('wedding.jpeg')"
            ></b-carousel-slide>
        </b-carousel>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import prod from "../../assets/items.json";

//import StarRating from "vue-star-rating";
export default {
  name: "homePage",
  components: {
    //StarRating,
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
  /*async created() {
    // this.loading = true;
    await this.$store.dispatch("fetchAllProducts", prod).then(() => {
      this.loading = false;
    });
  },*/
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
