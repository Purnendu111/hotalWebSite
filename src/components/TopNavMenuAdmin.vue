<template>
    <div>
        <b-navbar toggleable="lg">
            <b-navbar-brand href="/orderhome"
                ><b-icon icon="house-door-fill" aria-label="House"></b-icon
            ></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown text="Quick Links" dropright>
                        <b-dropdown-item href="/contact_us"
                            >Contact Us</b-dropdown-item
                        >
                        <b-dropdown-item href="#"
                            >What is TCS Marketplace</b-dropdown-item
                        >
                        <b-dropdown-item href="#">Assets</b-dropdown-item>
                        <b-dropdown-item href="/faq">FAQs</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown
                        dropright
                        id="my-nav-dropdown"
                        text="Product"
                        class="paddingtop10"
                        toggle-class="nav-link-custom"
                        offset="15"
                        v-if="productManager"
                    >
                        <b-dropdown-item href="/available_products"
                            >Get Products (with Inventory)</b-dropdown-item
                        >
                        <!-- <b-dropdown-item href="/get_inventory"
                            >Get Inventory</b-dropdown-item
                        > -->
                        <b-dropdown-item href="/create_product"
                            >Create Products</b-dropdown-item
                        >
                        <b-dropdown-item href="/all_products"
                            >Get All Products</b-dropdown-item
                        >
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown
                        dropright
                        id="my-nav-dropdown"
                        text="Inventory"
                        class="paddingtop10"
                        toggle-class="nav-link-custom"
                        offset="15"
                        v-if="inventory_manager"
                    >
                        <b-dropdown-item href="/available_inventory"
                            >Get Inventory (with Product)</b-dropdown-item
                        >
                        <b-dropdown-item href="/get_inventory"
                            >Get Inventory</b-dropdown-item
                        >
                        <b-dropdown-item href="/create_inventory"
                            >Create Inventory</b-dropdown-item
                        >
                        <b-dropdown-item href="/all_Inventory"
                            >Get All Inventory</b-dropdown-item
                        >
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown
                        dropright
                        id="my-nav-dropdown"
                        text="Shipment"
                        class="paddingtop10"
                        toggle-class="nav-link-custom"
                        offset="15"
                        v-if="shipment_manager"
                    >
                        <b-dropdown-item href="/available_products"
                            >Get Products (with Inventory)</b-dropdown-item
                        >
                        <b-dropdown-item href="/get_inventory"
                            >Get Inventory</b-dropdown-item
                        >
                        <b-dropdown-item href="/update_tracking"
                            >Update Shipment</b-dropdown-item
                        >
                        <b-dropdown-item href="/all_products"
                            >Get All Products</b-dropdown-item
                        >
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown
                        dropright
                        id="my-nav-dropdown"
                        text="Order Management"
                        class="paddingtop10"
                        toggle-class="nav-link-custom"
                        offset="15"
                        v-if="order_management_admin"
                    >
                        <b-dropdown-item href="/available_products"
                            >Get Products (with Inventory)</b-dropdown-item
                        >
                        <b-dropdown-item href="/get_inventory"
                            >Get Inventory</b-dropdown-item
                        >
                        <b-dropdown-item href="/create_product"
                            >Create Products</b-dropdown-item
                        >
                        <b-dropdown-item href="/all_products"
                            >Get All Products</b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "TopNavMenu",
    data() {
        return {};
    },
    methods: {},
    computed: {
        showContextMenu() {
            return this.menuItens.length;
        },
        ...mapState({
            firstName: "firstName",
            lastName: "lastName",
            token: "token",
            idToken: "idToken",
            role: "role",
            scope: "scope",
            admin_show: "admin_show",
            customer_show: "customer_show",
            customer_show_n: "customer_show_n",
            order_management_admin: "order_management_admin",
            productManager: "product_manager",
            inventory_manager: "inventory_manager",
            shipment_manager: "shipment_manager",
            customer: "customer",
        }),
    },
};
</script>
