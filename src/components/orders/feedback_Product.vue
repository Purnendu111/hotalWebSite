<template>
    <div style="padding: 0 30px">
        <b-row>
            <b-col
                ><h3>Feedback for Order One Plus 8T</h3>
                <div class="separator" style="padding: 0 !important">X</div></b-col
            >
            <b-col> </b-col>
        </b-row>
        <b-row>
            <b-col>Please Provide your valuable feedback for Order One Plus 8T</b-col>
        </b-row>
        <b-row>
            <b-col cols="3" align-self="center">Product Quality: </b-col>
            <b-col
                ><b-form-rating
                    id="prod_quality"
                    v-model="prod_quality"
                    icon-clear="slash-circle"
                    style="padding-right: 15px"
                    show-clear
                    no-border
                    inline
                    size="lg"
                    stars="5"
                ></b-form-rating
            ></b-col>
        </b-row>
        <b-row>
            <b-col cols="3" align-self="center">Delivery Quality: </b-col>
            <b-col
                ><b-form-rating
                    id="prod_quality"
                    v-model="delivery_quality"
                    icon-clear="slash-circle"
                    style="padding-right: 15px"
                    show-clear
                    no-border
                    inline
                    size="lg"
                    stars="5"
                ></b-form-rating
            ></b-col>
        </b-row>
        <b-row>
            <b-col cols="3">Comments: </b-col>
            <b-col style="padding-left: 20px"
                ><b-form-textarea
                    id="textarea-large"
                    size="lg"
                    placeholder="What you Think"
                    rows="5"
                    no-resize
                ></b-form-textarea
            ></b-col>
        </b-row>
        <b-row style="padding-top: 20px">
            <b-col class="text-right"><b-button variant="info">Submit</b-button></b-col>
            <b-col style="padding-left: 20px"
                ><b-button variant="danger">Clear</b-button>
            </b-col>
        </b-row>
        <b-row style="padding-top: 20px">
            <b-col class="text-center">
                <span> Share Your Feedback on: </span>
                <b-icon
                    icon="facebook"
                    style="margin-right: 20px"
                    aria-hidden="true"
                ></b-icon>
                <b-icon
                    icon="instagram"
                    style="margin-right: 20px"
                    aria-hidden="true"
                ></b-icon>
                <b-icon icon="twitter" aria-hidden="true"></b-icon>
            </b-col>
        </b-row>
    </div>
</template>

