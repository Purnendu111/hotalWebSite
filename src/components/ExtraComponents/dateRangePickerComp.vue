<template>
	<div class="demo">
		<div class="">
			<div class="form-group flex">
				<date-range-picker
					class="ml-1"
					ref="picker"
					:opens="opens"
					:minDate="minDate"
					:singleDatePicker="singleDatePicker"
					:timePicker="timePicker"
					:timePicker24Hour="timePicker24Hour"
					:showWeekNumbers="showWeekNumbers"
					:showDropdowns="showDropdowns"
					:autoApply="autoApply"
					v-model="dateRange"
					:ranges="show_ranges"
					@update="updateValues"
					@toggle="logEvent('event: open', $event)"
					@startSelection="logEvent('event: startSelection', $event)"
					@finishSelection="
						logEvent('event: finishSelection', $event)
					"
					:linkedCalendars="linkedCalendars"
					:dateFormat="dateFormat"
					:always-show-calendars="false"
					:alwaysShowCalendars="alwaysShowCalendars"
					:append-to-body="appendToBody"
					:closeOnEsc="closeOnEsc"
				>
					<template #input="picker" style="min-width: 100%">
						{{ picker.startDate | date }} -
						{{ picker.endDate | date }}
					</template>
				</date-range-picker>
			</div>
		</div>
	</div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import dateUtil from "vue2-daterange-picker/src/components/date_util/native";
export default {
	components: { DateRangePicker },
	name: "DateRangePickerDemo",
	filters: {
		date(value) {
			if (!value) return "";
			let options = { year: "numeric", month: "long", day: "numeric" };
			return Intl.DateTimeFormat("en-US", options).format(value);
		},
	},
	data() {
		//                    :locale-data="{ daysOfWeek: [ 'Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ] }"
		return {
			opens: "center",
			minDate: new Date(),
			// minDate: '',
			// maxDate: '',
			dateRange: {
				startDate: new Date(),
				endDate: new Date(),
			},
			single_range_picker: false,
			show_ranges: false,
			singleDatePicker: false,
			timePicker: false,
			timePicker24Hour: false,
			showDropdowns: true,
			autoApply: false,
			showWeekNumbers: false,
			linkedCalendars: false,
			alwaysShowCalendars: true,
			appendToBody: false,
			closeOnEsc: true,
		};
	},
	mounted() {
		// this.$refs.picker.open = true
	},
	methods: {
		logEvent(...args) {
			console.log(...args);
		},
		updateValues(values) {
			this.logEvent("event: update", { ...values });
			this.dateRange.startDate = dateUtil.format(
				values.startDate,
				"yyyy-mm-dd"
			);
			this.dateRange.endDate = dateUtil.format(
				values.endDate,
				"yyyy-mm-dd"
			);
		},
		// dateFormat(classes, date) {
		// 	// let yesterday = new Date();
		// 	// let d1 = new Date(date),
		// 	// 	today =
		// 	// 		d1.getFullYear() +
		// 	// 		"-" +
		// 	// 		(parseInt(d1.getMonth()) + 1 < 10
		// 	// 			? "0" + parseInt(d1.getMonth() + 1)
		// 	// 			: parseInt(d1.getMonth()) + 1) +
		// 	// 		"-" +
		// 	// 		d1.getDay();
		// 	// console.log(today);
		// 	// let a = ["2022-02-28", "2022-03-2", "2022-03-5"];
		// 	// a.forEach((element) => {
		// 	// 	console.log(today + "===" + element);
		// 	// 	console.log(today == element);
		// 	// 	if (!classes.disabled) {
		// 	// 		classes.disabled = today == element;
		// 	// 	}
		// 	// });
		// 	// console.log(classes);
		// 	return classes;
		// 	// if (!classes.disabled) {
		// 	// 	classes.disabled = d1 === d2;
		// 	// }
		// 	// return classes;
		// },
	},
};
</script>

<style scoped>
.py-5 {
	padding: 3rem 0;
}
.form-group {
	margin-bottom: 1rem;
}
label {
	display: inline-block;
}
.btn {
	display: inline-block;
	font-weight: 400;
	color: #212529;
	text-align: center;
	vertical-align: middle;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
}
.btn-info {
	color: #fff;
	background-color: #17a2b8;
	border-color: #17a2b8;
}
.btn-secondary {
	color: #fff;
	background-color: #6c757d;
	border-color: #6c757d;
}
.form-control {
	display: block;
	max-width: 100%;
	padding: 0.3rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #495057;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
}
.flex {
	display: flex;
	align-items: center;
}
.ml-1 {
	margin-left: 0.25rem;
}
.text-muted {
	color: #6c757d !important;
}
</style>