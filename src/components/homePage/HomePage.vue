<template>
  <div style="padding: 0; height: 100%">
    <video-background
      :src="require(`@/assets/img/video.mp4`)"
      style="max-height: 650px; height: 650px; width: 100%"
      overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
    >
      <b-row class="">
        <b-col>
          <div>
            <div style="position: relative; top: 50px; text-align: center">
              <p style="font-size: 15px; color: #ccffcc">
                MALHAR GREENS , KOLKATA
              </p>
              <p style="font-size: 15px; color: white">______</p>
              <p style="font-size: 75px; color: #ccffcc">
                ENJOY A LUXURY <br />
                EXPERIENCE
              </p>
            </div>

            <div id="booking" class="section">
              <div class="section-center">
                <div class="container">
                  <div class="row">
                    <div
                      class="booking-form"
                      style="width: 90%; position: relative; top: -170px"
                    >
                      <b-row style="margin: 0 !important">
                        <b-col cols="4">
                          <div class="form-header">
                            <h2>Book Now</h2>
                          </div>
                        </b-col>
                        <b-col
                          cols="5"
                          align-self="center"
                          style="text-align: center"
                        >
                          <span class="form-label">Check In & Check Out</span>
                          <label
                            for=""
                            @click="showModal = true"
                            style="cursor: pointer"
                            >{{showModal}} = 26 Feb, 2022 - 28 Feb, 2022
                            <b-icon
                              icon="calendar2-day-fill"
                              aria-hidden="true"
                            ></b-icon
                          ></label>
                        </b-col>
                        <b-col cols="3" align-self="center">
                          <button class="submit-btn" @click="showModal = true">
                            Check availability
                          </button>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </video-background>
    <div style="">
      <b-row>
        <b-col style="height: 200px"> </b-col>
      </b-row>
    </div>
    <div>
      <div class="container section">
        <div class="row">
          <div class="col-md-6">
            <h3>Malhar Greens, Kolkata</h3>
            <p>
              <button class="btn">
                <i class="fa fa-home mr-2"></i>North Ramchandrapur</button
              ><br />
              <button class="btn">
                <i class="fa fa-envelope mr-2"></i>abc@gmail.com</button
              ><br />
              <button class="btn">
                <i class="fa fa-phone mr-2"></i> +91-0000000000</button
              ><br />
            </p>
          </div>
          <div class="col-md-6">
            <img src="https://preview.ibb.co/erdq8p/Employee-1.jpg" alt="" />
            <img src="https://preview.ibb.co/cu76g9/Employee-2.jpg" alt="" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img src="https://preview.ibb.co/cu76g9/Employee-2.jpg" alt="" />
          </div>
          <div class="col-md-6">
            <h3>Cutting-Edge Skill Development</h3>
            <p>
              GetLance Academy hosts regular, rigorous learning sessions for the
              most in-demand skills. By presenting our elite, experienced
              network with ongoing opportunities to update and elevate their
              portfolios, we are able to solve pressing talent shortages while
              ensuring success for dedicated participants.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img src="https://preview.ibb.co/cu76g9/Employee-2.jpg" alt="" />
          </div>
          <div class="col-md-6">
            <h3>Cutting-Edge Skill Development</h3>
            <p>
              GetLance Academy hosts regular, rigorous learning sessions for the
              most in-demand skills. By presenting our elite, experienced
              network with ongoing opportunities to update and elevate their
              portfolios, we are able to solve pressing talent shortages while
              ensuring success for dedicated participants.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="showModal">
      <p>Modal content goes here...</p>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      showModal: false,
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
    callPopForDate() {
      let htmlCont =
        '<div id="cstmPopUPContent">' +
        'Check In : <input id="chkInDate" type="date">' +
        'Check Out : <input id="chkOutDate" type="date"><br/>' +
        "test";
      ("</div>");
      alert(htmlCont);
      this.$fire({
        title: "<strong></strong>",
        icon: "info",
        width: 900,
        html: htmlCont,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
      });
    },
  },
};
</script>
