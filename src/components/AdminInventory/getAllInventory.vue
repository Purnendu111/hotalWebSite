<template>
    <div class="getAllProd" id="getAllProd">
        <div id="heading"><h1>Inventory List</h1></div>
        <div id="tableData">
            <table
                id="prodTable"
                class="table table-striped table-bordered mt-5"
            >
                <thead>
                    <tr>
                        <th style="width: 7%">Si No.</th>
                        <th style="width: 24%">Product Name</th>
                        <th style="width: 24%">Brand</th>
                        <th style="width: 24%">Category</th>
                        <th style="width: 7%">Details</th>
                        <th style="width: 7%">Edit</th>
                        <th style="width: 7%">Delete</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
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
        let data = {};
        self.$isLoading(true);
        await self.axios
            .get("product")
            .then((response) => {
                data["data"] = response.data;
                self.papis = response.data;
                console.log("Response:");
                console.log(response.data);
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
        format(d) {
            let prodSpec = "",
                support4G = d.productSpecification.specifications.support4G
                    ? "Yes"
                    : "No",
                dualSim = d.productSpecification.specifications.dualSim
                    ? "Yes"
                    : "No";

            prodSpec =
                "<b>Processor: </b>" +
                d.productSpecification.specifications.processor +
                ", <b>frontCamera: </b>" +
                d.productSpecification.specifications.frontCamera +
                ", <b>rearCamera: </b>" +
                d.productSpecification.specifications.rearCamera +
                ", <b>ram: </b>" +
                d.productSpecification.specifications.ram +
                ", <b>storage: </b>" +
                d.productSpecification.specifications.storage +
                ", <b>support4G: </b>" +
                support4G +
                ", <b>dualSim: </b>" +
                dualSim +
                ", <b>displaySize: </b>" +
                d.productSpecification.specifications.displaySize;
            return (
                '<table cellpadding="1" cellspacing="0" border="0" style="padding-left:50px;">' +
                "<tr>" +
                "<td>Avilable Quantity:</td>" +
                "<td>" +
                d.quantityAvailable +
                "</td>" +
                "</tr>" +
                "<tr>" +
                "<td>Product Description:</td>" +
                "<td>" +
                d.productDescription +
                "</td>" +
                "</tr>" +
                "<tr>" +
                "<td>Product Specification</td>" +
                "<td>" +
                prodSpec +
                "</td>" +
                "</tr>" +
                "</table>"
            );
        },
        tablestructure() {
            let self = this;
            let table = $("#prodTable").DataTable({
                ajax: function (d, cb) {
                    self.axios.get("product").then((data) => {
                        cb(data);
                        console.log(cb);
                    });
                },
                scrollResize: true,
                scrollY: 300,
                scrollCollapse: true,
                paging: true,
                columns: [
                    {
                        data: "id",
                        width: "7%",
                    },
                    {
                        data: "productName",
                        width: "24%",
                    },
                    {
                        data: "brand",
                        width: "24%",
                    },
                    {
                        data: "productCategory",
                        width: "24%",
                    },
                    {
                        className: "dt-center",
                        orderable: false,
                        data: null,
                        defaultContent:
                            '<button type="button" class="btn btn-success showHideDetails showDetails"></button>',
                        width: "7%",
                    },
                    {
                        data: null,
                        className: "dt-center editor-edit",
                        defaultContent:
                            '<button type="button" class="btn btn-link dataTableEdit"></button>',
                        orderable: false,
                        width: "7%",
                    },
                    {
                        data: null,
                        className: "dt-center editor-delete",
                        defaultContent:
                            '<button type="button" class="btn btn-danger dataTableDelete"></button>',
                        orderable: false,
                        width: "7%",
                    },
                ],
            });
            $("#prodTable").on(
                "click",
                "tbody td button.showHideDetails",
                function () {
                    var dataVal = "";
                    var tr = $(this).closest("tr");
                    var row = table.row(tr);
                    if (row.child.isShown()) {
                        row.child.hide();
                        $(this).addClass("showDetails");
                        $(this).removeClass("hideDetails");
                    } else {
                        self.$isLoading(true);
                        self.axios
                            .get("prodWholeData/" + row.data().id)
                            .then((response) => {
                                console.log("Response:");
                                // console.log(response.data);
                                dataVal = response.data;
                                // self.tablestructure();
                                row.child(self.format(dataVal)).show();
                                $(this).removeClass("showDetails");
                                $(this).addClass("hideDetails");
                            })
                            .catch(function (error) {
                                console.log(error);
                            })
                            .finally(() => {
                                self.$isLoading(false); // hide the loading screen
                            });
                    }
                }
            );

            $("#prodTable").on(
                "click",
                "td button.dataTableEdit",
                function (e) {
                    e.preventDefault();
                    var tr = $(this).closest("tr");
                    var row = table.row(tr);
                    alert(row.data().id);
                    // self.$router.push({
                    //     path: "/create_product/" + row.data().id,
                    //     params: { id: row.data().productName },
                    // });
                }
            );
        },
        callEditByID(data) {
            alert(data.productName);
        },
    },
};
</script>
<style></style>
