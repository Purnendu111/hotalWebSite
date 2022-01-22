<template>
    <div>
        <div><br />You may also like:</div>
        <hr class="cstmHR" />
        <br />
        <b-row>
            <b-col
                ><b-card-group deck>
                    <b-card
                        v-for="prod in alsoLikeProdList"
                        :key="prod.id"
                        no-body
                        :img-src="prod.img"
                        img-height="150px"
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
                            <b-card-title
                                style="font-size: 18px; padding-bottom: 10px"
                                >{{ prod.productName }}</b-card-title
                            >
                            <b-card-sub-title class="mb-2"
                                ><b>{{ prod.price }}</b>
                            </b-card-sub-title>
                            <StarRating
                                :inline="true"
                                :star-size="25"
                                :read-only="true"
                                :show-rating="false"
                                active-color="#1BC263"
                                :rating="prod.rating"
                                :increment="0.01"
                            ></StarRating>
                            <b-row>
                                <b-col cols="7">
                                    <b-card-text style="font-size: 14px">
                                        {{ prod.reviews }} Reviews
                                    </b-card-text></b-col
                                >
                                <b-col class="text-right" cols="4">
                                    <p class="h5">
                                        <b-icon
                                            icon="bag"
                                            aria-hidden="true"
                                        ></b-icon>
                                    </p>
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import topProdListJSON from "../../assets/items.json";
import StarRating from "vue-star-rating";
export default {
    name: "soloProd",
    components: {
        StarRating,
    },
    data() {
        return {
            alsoLikeProdList: topProdListJSON.alsoLikeProdList,
        };
    },
    mounted() {
        document.addEventListener("contextmenu", (event) =>
            event.preventDefault()
        );
    },
    methods: {},
};
</script>
