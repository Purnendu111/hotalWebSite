<template>
    <div style="padding: 0 30px">
        <b-row>
          <step-progress :steps="mySteps" :current-step="currentStep" icon-class="fa fa-check" active-color="blue" ></step-progress>
        </b-row>
      <div>
        <div>
            <center><h4>Order Confirmed:</h4>
            <b-row style="padding-top: 10px">
              <b-col>Your Order #010111 in confirmed.</b-col>
            </b-row>
            <b-row  style="padding-top: 10px">
              <b-col>Pickup your Order from TCS Retailer Store , 93 Clinton St, New York, NY 10002 at 02 Dec 2021 03:00 PM.</b-col>
            </b-row>
            <b-row  style="padding-top: 10px">
              <b-col>Your Unique code for purchase is : 1PK67R.</b-col>
            </b-row>
            <b-row  style="padding-top: 10px">
              <b-col>Show this code at store curb site handler during pickup.</b-col>
            </b-row></center>
        </div>
      </div>
    </div>
</template>

<script>
import StepProgress from 'vue-step-progress';
import 'vue-step-progress/dist/main.css';
export default {
    components: {
        StepProgress
    },
    data() {
      return {
        mySteps: ['Bag', 'Delivery & Payment', 'Order Confirmation'],
            currentStep: 3
      }
    }
    
};
</script>
