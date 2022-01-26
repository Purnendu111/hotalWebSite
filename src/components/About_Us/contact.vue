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
              id="domain"
              name="domain"
              class="paddingLeft10"
              style="width: 100% !important"
              menu-class="w-100"
              v-model="services"
            >
              <b-form-select-option :value="null"
                >Please select Service</b-form-select-option
              >
              <b-form-select-option :value="10">10</b-form-select-option>
              <b-form-select-option :value="25">25</b-form-select-option>
              <b-form-select-option :value="50">50</b-form-select-option>
              <b-form-select-option :value="100">100</b-form-select-option>
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
            v-model="message"
            name="message"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <div class="container-contact100-form-btn">
          <button class="contact100-form-btn" type="submit">
            <span>
              Submit
              <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
            </span>
          </button>
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
      services:'null',
      phone:''
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
        sendmail: function(){
            try {
                emailjs.send("service_ihqsqt6","template_f4ypdm9",{
                    from_name: this.name,
                    message: this.message,
                    services: this.services,
                    reply_from: this.email,
                }, "user_tf7AmbyaWdHiZ44pDSL2s").then((res) =>{
                    console.log(res)
                });

            } catch(error) {
                console.log({error})
            }

        }
	},
};
</script>
