<template>
  <div style="padding: 30px">
    <h1>
      <center>CheckOut</center>
    </h1>
    <div style="padding: 40px 10%">
      <b-row
        style="
          padding-top: 20px;
          padding-bottom: 30px;
          background: rgba(84, 87, 90, 0.2);
        "
      >
        <b-col cols="7">
          <b-row>
            <b-col>
              <h1 style="font-size: 24px">
                Raajkutir, Kolkata - IHCL SeleQtions
              </h1>
              <hr style="width: 100px; border-bottom: 2px solid black"
            /></b-col>
          </b-row>
          <b-row style="padding-bottom: 30px">
            <b-col cols="auto">
              <h6>Check-In(11:00 Am) <br />dd-mm-yyyy</h6></b-col
            >
            <b-col>
              <h6>Check-Out(10:00 Am) <br />dd-mm-yyyy</h6>
            </b-col>
          </b-row>
          <b-row style="padding-bottom: 30px">
            <b-col>
              <img
                src="../../assets/img/bed.svg"
                style="height: 30px !important"
                alt=""
              />
              <span
                style="
                  font-family: 'icomoon' !important;
                  font-size: 20px;
                  padding-left: 10px;
                "
                >ROOM1: Superior Room - 1 Adult | 0 Child</span
              >
            </b-col>
          </b-row>
          <b-row style="padding-bottom: 30px">
            <b-col>
              <img
                src="../../assets/img/bed.svg"
                style="height: 30px !important"
                alt=""
              />
              <span
                style="
                  font-family: 'icomoon' !important;
                  font-size: 20px;
                  padding-left: 10px;
                "
                >ROOM1: Superior Room - 1 Adult | 0 Child</span
              >
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col>
              <h3>Summary Charges</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button v-b-toggle.details variant="outline"
                >Price (2 Rooms 1 Night)
                <img
                  src="../../assets/img/icons/down.svg"
                  style="height: 20px !important"
                  alt=""
              /></b-button>
            </b-col>
            <b-col align-self="center" style="text-align: right"
              >Rs. 11000</b-col
            >
          </b-row>
          <b-row style="padding-bottom: 20px">
            <b-col>
              <b-collapse
                id="details"
                class="mt-2"
                style="padding-left: 25px; padding-bottom: 20px"
              >
                <b-row>
                  <b-col> Room1 </b-col>
                </b-row>
                <b-row>
                  <b-col style=""> dd-mm-yyyy </b-col>
                  <b-col style="text-align: right"> 5500 </b-col>
                </b-row>
                <b-row>
                  <b-col> Room2 </b-col>
                </b-row>
                <b-row>
                  <b-col style=""> dd-mm-yyyy </b-col>
                  <b-col style="text-align: right"> 5500 </b-col>
                </b-row>
              </b-collapse>
            </b-col>
          </b-row>
          <!-- <b-row>
            <b-col>
              <b-button v-b-toggle.Taxdetails variant="outline"
                >Taxes and Fees
                <img
                  src="../../assets/img/icons/down.svg"
                  style="height: 20px !important"
                  alt=""
              /></b-button>
            </b-col>
            <b-col align-self="center" style="text-align: right"
              >Rs. 11000</b-col
            >
          </b-row>
          <b-row>
            <b-col>
              <b-collapse id="Taxdetails" class="mt-2" style="padding-left: 25px;  padding-bottom: 20px">
                <b-row>
                  <b-col> Room1 </b-col>
                </b-row>
                <b-row>
                  <b-col style=""> dd-mm-yyyy </b-col>
                  <b-col style="text-align: right"> 5500 </b-col>
                </b-row>
                <b-row>
                  <b-col> Room2 </b-col>
                </b-row>
                <b-row>
                  <b-col style=""> dd-mm-yyyy </b-col>
                  <b-col style="text-align: right"> 5500 </b-col>
                </b-row>
              </b-collapse>
            </b-col>
          </b-row> 
          <b-row style="padding-top: 20px;">
              <b-col style="padding-left: 28px;">Total( 2 Rooms x 1 Night )<br>*Inclusive of all taxes.</b-col>
              <b-col style="text-align: right"> 22000</b-col>
          </b-row>-->
        </b-col>
      </b-row>
    </div>
  </div>
</template>
