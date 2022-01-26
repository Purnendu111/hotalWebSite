<template>
  <div class="container-contact100">
    <div class="wrap-contact100">
      <form class="contact100-form validate-form" @submit.prevent="sendmail">
        <span class="contact100-form-title"> Contact Us </span>

        <div
          class="wrap-input100 validate-input bg1"
          data-validate="Please Type Your Name"
        >
          <span class="label-input100">FULL NAME *</span>
          <input
            class="input100"
            id="name"
            v-model="name"
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
        </div>

        <div
          class="wrap-input100 validate-input bg1 rs1-wrap-input100"
          data-validate="Enter Your Email (e@a.x)"
        >
          <span class="label-input100">Email *</span>
          <input
            class="input100"
            id="email"
            v-model="email"
            type="text"
            name="email"
            placeholder="Enter Your Email "
          />
        </div>

        <div
          class="wrap-input100 bg1 rs1-wrap-input100"
          data-validate="Please Type Your Phone Number"
        >
          <span class="label-input100">Phone *</span>
          <input
            class="input100"
            id="phone"
            v-model="phone"
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
          />
        </div>

        <div class="wrap-input100 input100-select bg1">
          <span class="label-input100">Needed Services *</span>
          <div>
            <b-form-select
              id="services"
              name="services"
              class="paddingLeft10 cstmSelect"
              style="width: 100% !important"
              menu-class="w-100"
              v-model="services"
            >
              <b-form-select-option :value="null"
                >Please select Service</b-form-select-option
              >
              <b-form-select-option class="cstmSelectoption" :value="Wedding">Wedding</b-form-select-option>
              <b-form-select-option class="cstmSelectoption" :value="Wedding_Reception">Wedding[Reception Only]</b-form-select-option>
              <b-form-select-option class="cstmSelectoption" :value="BirthDay_Party">BirthDay Party</b-form-select-option>
              <b-form-select-option :value="Food_Feeding_Ceremony">Food Feeding Ceremony[Annaprashan]</b-form-select-option>
              <b-form-select-option :value="Shooting_Venue">Shooting Venue</b-form-select-option>
              <b-form-select-option :value="PrePost_WeddingShoot">Pre & Post Wedding Shoot</b-form-select-option>
              <b-form-select-option :value="Office_Party_or_Get_Together">Office Party/Get Together</b-form-select-option>
              <b-form-select-option :value="Others">Others</b-form-select-option>
            </b-form-select>
            <div class="dropDownSelect2"></div>
          </div>
        </div>
        <div
          class="wrap-input100 validate-input bg0 rs1-alert-validate"
          data-validate="Please Type Your Message"
        >
          <span class="label-input100">Message</span>
          <textarea
            class="input100"
            id="message"
            v-model="message"
            name="message"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <div class="container-contact100-form-btn">
          <button class="contact100-form-btn" type="submit" id="submit">
            <span>
              Submit
              <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
            </span>
          </button>
          <!-- <b-button block pill variant="outline-success" id="submit" class="CstmButton">Button</b-button> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>

//import $ from "jquery";
import emailjs from 'emailjs-com';

export default {
	name: "App",
	created() {

	},

	data() {
    return {
      name: '',
      email: '',
      message: '',
      services:null,
      phone:'',
      count: 0
    }
  },

	computed: {

	},

	mounted() {
		/* $(".js-select2").each(function(){
			$(this).select2({
				minimumResultsForSearch: 20,
				dropdownParent: $(this).next('.dropDownSelect2')
			});


			$(".js-select2").each(function(){
				$(this).on('select2:close', function (){
					if($(this).val() == "Please chooses") {
						$('.js-show-service').slideUp();
					}
					else {
						$('.js-show-service').slideUp();
						$('.js-show-service').slideDown();
					}
				});
			});
		})*/
	},
	methods: {
        validateFields: function(){
            document.getElementById("submit").blur();
            let name = document.getElementById("name"),
            email = document.getElementById("email"),
            phone = document.getElementById("phone"),
            services= document.getElementById("services");
            if(this.name == ""){
                this.$fire({
                    type: "error",
                    title: "Please enter Name",
                    showConfirmButton: false,
                    timer: 2000,
                }).then(() => {
                    name.focus();
                });
                return false;
            }else if(this.email == ""){
                this.$fire({
                    type: "error",
                    title: "Please enter a valid Mail Id",
                    showConfirmButton: false,
                    timer: 2000,
                }).then(() => {
                    email.focus();
                });
                return false;
            }else if(this.phone == ""){
                this.$fire({
                    type: "error",
                    title: "Please enter Phone Number",
                    showConfirmButton: false,
                    timer: 2000,
                }).then(() => {
                    phone.focus();
                });
                return false;
            }else if(this.services === null){
                this.$fire({
                    type: "error",
                    title: "Please select a Service",
                    showConfirmButton: false,
                    timer: 2000,
                }).then(() => {
                    services.focus();
                });
                return false;
            }else{
                return true;
            }
        },
        sendmail: function(){
            this.count++
            document.getElementById("submit").disabled = true;
            
            let validateFieldsVal = this.validateFields();
            if(validateFieldsVal){
                try {
                    emailjs.send("service_ihqsqt6","template_f4ypdm9",{
                        from_name: this.name,
                        message: this.message,
                        services: this.services,
                        reply_from: this.email,
                    }, "user_tf7AmbyaWdHiZ44pDSL2s").then((res) =>{
                    
                    setTimeout(function(){ 
                       document.getElementById("submit").disabled = false;
                    }, 10000);
                        console.log(res.status)
                    });

                } catch(error) {
                    console.log({error})
                }
                //document.getElementById("submit").disabled = false;
            }else{
                setTimeout(function(){ 
                    document.getElementById("submit").disabled = false;
                }, 10000);
                //document.getElementById("submit").disabled = false;
                return false;
            }  
            console.log(this.count+"==count") 
        }
	},
};
</script>
