<template>
  <div style="padding: 0 30px">
    <b-row>
      <b-col>
        <div>
          <b-carousel
            id="carousel-no-animation"
            style="text-shadow: 0px 0px 2px #000"
            no-animation
            :interval="interval"
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              caption="First slide"
              :img-src="getImgUrl('1.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Second Slide"
              :img-src="getImgUrl('office party.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Third Slide"
              :img-src="getImgUrl('party.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Fourth Slide"
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
	  interval: 5000
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
