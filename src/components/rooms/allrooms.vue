<template>
  <div style="padding: 50px">
    <b-row style="margin-bottom: 20px !important; background: rgba(84, 87, 90, 0.2)">
      <b-col cols="3" style="padding: 0!important">
        <b-img
          src="https://picsum.photos/1024/400/?image=41"
          style="min-height: 350px !important; height: 100% !important"
          fluid
          alt="Responsive image"
        ></b-img>
      </b-col>
      <b-col cols="7" style="padding: 30px">
        <b-row style="padding-bottom: 20px !important">
          <b-col> Room 1</b-col>
        </b-row>
        <b-row style="padding-bottom: 20px !important">
          <b-col>
            <div id="showMin1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
              <span
                style="font-weight: 600; cursor: pointer"
                @click="showData('1')"
                >...See More</span
              >
            </div>
            <div id="showMax1" style="display: none">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <span
                style="font-weight: 600; cursor: pointer"
                @click="showData('1')"
                >...See More</span
              >
            </div>
          </b-col>
        </b-row>
        <b-row style="padding-bottom: 20px !important">
          <b-col>
            <img
              src="../../assets/img/area.png"
              style="height: 20px !important"
              alt=""
            />
            21.63 – 24.26 Sq.m
          </b-col>
          <b-col>
            <img
              src="../../assets/img/wifi.png"
              style="height: 20px !important"
              alt=""
            />
            Complimentary WiFi
          </b-col>
        </b-row>
        <b-row style="padding-bottom: 20px !important">
          <b-col>
            <img
              src="../../assets/img/maximumOccoumpany.png"
              style="height: 20px !important"
              alt=""
            />
            Up to 2 guests. Max Adults: 2, Max Children: 1 (sharing bed)
          </b-col>
          <b-col>
            <img
              src="../../assets/img/bedType.png"
              style="height: 20px !important"
              alt=""
            />
            King
          </b-col>
        </b-row>
        <b-row style="padding-bottom: 20px !important">
          <b-col>
              <b-button variant="outline-primary" style="position: relative; top: 26px">
                 <b-icon icon="credit-card"></b-icon> Show Details
            </b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" style="text-align: right; padding: 30px" align-self="end">
        <b-row>
          <b-col>$ 4700</b-col>
        </b-row>
        <b-row>
          <b-col>Starting Rate/Night</b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button variant="outline-primary">
              <b-icon icon="credit-card"></b-icon> Pay Now
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row style="margin-bottom: 20px !important; background: rgba(84, 87, 90, 0.2)">
      <b-col cols="3" style="padding: 0!important">
        <b-img
          src="https://picsum.photos/1024/400/?image=41"
          style="min-height: 350px !important; height: 100% !important"
          fluid
          alt="Responsive image"
        ></b-img>
      </b-col>
      <b-col cols="7" style="padding: 30px">
        <b-row style="padding-bottom: 20px !important">
          <b-col> Room 1</b-col>
        </b-row>
        <b-row style="padding-bottom: 20px !important">
          <b-col>
            <div id="showMin1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
              <span
                style="font-weight: 600; cursor: pointer"
                @click="showData('1')"
                >...See More</span
              >
            </div>
            <div id="showMax1" style="display: none">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <span
                style="font-weight: 600; cursor: pointer"
                @click="showData('1')"
                >...See More</span
              >
            </div>
          </b-col>
        </b-row>
        <b-row style="padding-bottom: 20px !important">
          <b-col>
            <img
              src="../../assets/img/area.png"
              style="height: 20px !important"
              alt=""
            />
            21.63 – 24.26 Sq.m
          </b-col>
          <b-col>
            <img
              src="../../assets/img/wifi.png"
              style="height: 20px !important"
              alt=""
            />
            Complimentary WiFi
          </b-col>
        </b-row>
        <b-row style="padding-bottom: 20px !important">
          <b-col>
            <img
              src="../../assets/img/maximumOccoumpany.png"
              style="height: 20px !important"
              alt=""
            />
            Up to 2 guests. Max Adults: 2, Max Children: 1 (sharing bed)
          </b-col>
          <b-col>
            <img
              src="../../assets/img/bedType.png"
              style="height: 20px !important"
              alt=""
            />
            King
          </b-col>
        </b-row>
        <b-row style="padding-bottom: 20px !important">
          <b-col>
              <b-button variant="outline-primary" style="position: relative; top: 26px">
                 <b-icon icon="credit-card"></b-icon> Show Details
            </b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" style="text-align: right; padding: 30px" align-self="end">
        <b-row>
          <b-col>$ 4700</b-col>
        </b-row>
        <b-row>
          <b-col>Starting Rate/Night</b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button variant="outline-primary">
              <b-icon icon="credit-card"></b-icon> Pay Now
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      tabCounter: 0,
      showCorporateInputType: false,
      showCorporateText: "Add Corporate Info",
      tabs: [],
      adultCount: 1,
      childCount: 0,
      showModal: false,
      fromDate: new Date(),
      toDate: new Date(),
      minFrom: new Date(),
      minTo: new Date(),
      totalGstCount: 1,
      dateArray: [],
      oldDateData: ["2022-03-02", "2022-03-03", "2022-03-05", "2022-03-09"],
    };
  },
  computed: {
    ...mapState({
      // dateRange: "dateRange",
    }),
  },
  beforeMount() {},
  mounted() {},
  methods: {},
};
</script>
