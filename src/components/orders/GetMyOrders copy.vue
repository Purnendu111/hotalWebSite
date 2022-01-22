<template>
    <div class="getAllProd" id="getAllProd">
        <div id="heading"><h1>Product List</h1></div>
        <div id="tableData">
            <table
                id="prodTable"
                class="table table-striped table-bordered mt-5"
            >
                <thead>
                    <tr>
                        <th style="width: 7%">Si No.</th>
                        <th style="width: 24%">Crust</th>
                        <th style="width: 24%">Flavor</th>
                        <th style="width: 24%">Size</th>
                        <th style="width: 7%">Table_No</th>
                        <th style="width: 7%"></th>
                        <th style="width: 7%"></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import reOrder from "../../assets/re-order.png";
export default {
    name: "getAllProd",
    components: {},
    data() {
        return {
            papis: {},
            tran_id: "",
            height: "",
        };
    },
    watch: {},
    mounted() {
        let self = this;
        self.appHt();
        window.addEventListener(
            "resize",
            function () {
                self.appHt();
            },
            true
        );
    },
    async created() {
        let self = this;
        self.$isLoading(true); // show the loading screen
        await self.axios
            .get(
                // http://aaefcbdc7840e4ba889880a250210a8d-660256375.us-east-2.elb.amazonaws.com/orders
                // http://manisaurabh-bb96cc29-trial-prod.apigee.net/kong_get_orders
                "http://manisaurabh-bb96cc29-trial-prod.apigee.net/kong_get_orders",
                {
                    // headers: {
                    //     "Access-Control-Allow-Origin": "*",
                    // },
                }
            )
            .then((response) => {
                self.papis = response.data;
                console.log("Response:");
                console.log(response.data);
                self.papis.forEach((element, i) => {
                    element.index = i + 1;
                });
                self.tablestructure();
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                self.$isLoading(false); // hide the loading screen
            });
    },
    methods: {
        appHt: function () {
            var h = window.innerHeight,
                navDivContainerHt =
                    document.getElementById("navDivContainer").offsetHeight,
                heading = document.getElementById("heading").offsetHeight;
            document.getElementById("bodyContainer").style.height =
                parseFloat(h) - parseFloat(navDivContainerHt) - 5 + "px";
            document.getElementById("getAllProd").style.height =
                parseFloat(h) - parseFloat(navDivContainerHt) - 240 + "px";
            document.getElementById("tableData").style.height =
                parseFloat(h) -
                parseFloat(navDivContainerHt) -
                parseFloat(heading) -
                100 +
                "px";
        },
        tablestructure() {
            let self = this;
            let table = $("#prodTable").DataTable({
                data: self.papis,
                scrollResize: true,
                scrollY: 300,
                scrollCollapse: true,
                paging: true,
                columns: [
                    {
                        data: "index",
                        width: "7%",
                    },
                    {
                        data: "Crust",
                        width: "24%",
                    },
                    {
                        data: "Flavor",
                        width: "24%",
                    },
                    {
                        data: "Size",
                        width: "24%",
                    },
                    {
                        data: "Table_No",
                        width: "7%",
                    },
                    {
                        data: null,
                        className: "dt-center editor-edit",
                        defaultContent:
                            '<button type="button" style="padding: 0px !important" class="btn btn-link"><img class="dataTablereOrder" src="' +
                            reOrder +
                            '" height="20" width="20" /></button>',
                        orderable: false,
                        width: "7%",
                    },
                    {
                        data: null,
                        className: "dt-center editor-delete",
                        defaultContent:
                            '<button type="button" class="btn btn-danger"></button>',
                        orderable: false,
                        width: "7%",
                    },
                ],
            });

            $("#prodTable").on(
                "click",
                "td button.dataTableEdit",
                function (e) {
                    e.preventDefault();
                    var tr = $(this).closest("tr");
                    var row = table.row(tr);
                    // row.data().productName
                }
            );
        },
    },
};
</script>
<style></style>
