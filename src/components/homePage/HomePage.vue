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
          <!-- <VueCtkDateTimePicker
						id="myDatePicker"
            noShortcuts=true
						class="myDatePicker"
						:disabled-dates="disabledDates"
						:min-date="minDate"
						:range="true"
						v-model="dateTime"
					>
          <input
						class="input100"
						id="chkinoutDate"
						v-model="chkinoutDate"
						type="text"
						placeholder="select date and time"
					/>
          </VueCtkDateTimePicker> -->
        <div style="position: relative; top: 200px; text-align: center">
			<h1>Test 1</h1>
		</div>

          <div id="booking" class="section">
            <div class="section-center">
              <div class="container">
                <div class="row">
                  <div
                    class="booking-form"
                    style="width: 100%; position: relative; top: 100px"
                  >
                    <form>
                      <div
                        class="row no-margin"
                        style="
                          margin-top: 0% !important;
                          margin-bottom: 0% !important;
                        "
                      >
                        <div class="col-md-2">
                          <div class="form-header">
                            <h2>Book Now</h2>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div
                            class="row no-margin"
                            style="
                              margin-top: 3% !important;
                              margin-bottom: 3% !important;
                            "
                          >
                            <div class="col-md-3">
                              <div class="form-group">
                                <span class="form-label">Check In</span>
                                <input
                                  class="form-control"
                                  type="date"
                                  style="font-size: 20px !important"
                                />
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="form-group">
                                <span class="form-label">Check out</span>
                                <input
                                  class="form-control"
                                  type="date"
                                  style="font-size: 20px !important"
                                />
                              </div>
                            </div>
                            <div class="col-md-2">
                              <div class="form-group">
                                <span class="form-label">Guests</span>
                                <select class="form-control">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                </select>
                                <span class="select-arrow"></span>
                              </div>
                            </div>
                            <div class="col-md-2">
                              <div class="form-group">
                                <span class="form-label">Kids</span>
                                <select class="form-control">
                                  <option>0</option>
                                  <option>1</option>
                                  <option>2</option>
                                </select>
                                <span class="select-arrow"></span>
                              </div>
                            </div>
                            <div class="col-md-2">
                              <div class="form-group">
                                <span class="form-label">Guests</span>
                                <select class="form-control">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                </select>
                                <span class="select-arrow"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="form-btn">
                            <button class="submit-btn">
                              Check availability
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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
