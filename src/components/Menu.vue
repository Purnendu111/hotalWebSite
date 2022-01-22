<template>
    <div class="menu-container">
        <!-- root level itens -->
        <ul class="menu">
            <li class="menu__top">
                <!-- <router-link to="/adminhome" class="menu__logo">
                    <img src="/icon-32.png" style="height:50px" alt="icon" />
                </router-link> -->
                <!-- <a
                    href="#"
                    @click.prevent="openProjectLink"
                    class="menu__title"
                >
                    EAS Fablic Platform
                </a> -->
                <img src="../assets/kong_logo.png" height="45" width="138" />
            </li>

            <li>
                <a
                    href="#"
                    @click.prevent="updateMenu('home')"
                    :class="highlightSection('home')"
                >
                    <i class="fa fa-home menu__icon" aria-hidden="true"></i>
                    Home
                </a>
            </li>
            <li>
                <a
                    href="#"
                    @click.prevent="updateMenu('update_tracking')"
                    :class="highlightSection('update_tracking')"
                >
                    <i class="fas fa-shipping-fast" aria-hidden="true"></i>
                    Update Shipment
                </a>
            </li>
            <li>
                <a
                    href="#"
                    @click.prevent="updateMenu('get_customer')"
                    :class="highlightSection('get_customer')"
                >
                    <i class="fa fa-user" aria-hidden="true"></i>
                    List Customer
                </a>
            </li>
            <vue-tree-navigation :items="productitems" v-if="productManager" />
            <vue-tree-navigation
                :items="inventoryitems"
                v-if="inventory_manager"
            />
            <vue-tree-navigation :items="customeritems" v-if="customer" />
            <vue-tree-navigation
                :items="shipmentitems"
                v-if="shipment_manager"
            />
            <vue-tree-navigation
                :items="adminitems"
                v-if="order_management_admin"
            />
            <!--<li>
        <a
        href="#"
        @click.prevent="updateMenu('purchase_product')"
        :class="highlightSection('purchase_product')"
        >
            <i class="fa fa-home menu__icon" aria-hidden="true"></i>
            Browse Products
        </a>
      </li>


<li>
        <a href="http://ec2-13-127-64-13.ap-south-1.compute.amazonaws.com:8080/" 
        :class="highlightSection('apim')"
        target="_blank" 
        >
            <i class="fa fa-home menu__icon" aria-hidden="true"></i>
            API Discover
        </a>
      </li>
      <li>
        <a
        href="#"
        @click.prevent="updateMenu('apim')"
        :class="highlightSection('apim')"
        >
          <i class="fa fa-tag menu__icon" aria-hidden="true"></i>
          API Management
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a
        href="#"
        @click.prevent="updateMenu('cloud')"
        :class="highlightSection('cloud')"
        >
          <i class="fa fa-users menu__icon" aria-hidden="true"></i>
          Cloud
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
<li>
        <a
        href="#"
        @click.prevent="updateMenu('microservice')"
        :class="highlightSection('microservice')"
        >
          <i class="fa fa-users menu__icon" aria-hidden="true"></i>
          MicroServices
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
        href="#"
        @click.prevent="updateMenu('account')"
        :class="highlightSection('account')"
        >
          <i class="fa fa-user menu__icon" aria-hidden="true"></i>
          Account
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
      <li v-show="admin_show">
        <a
        href="#"
        @click.prevent="updateMenu('admin_tab')"
        :class="highlightSection('admin_tab')"
        >
          <i class="fa fa-users menu__icon" aria-hidden="true"></i>
          Admin
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>-->
        </ul>

        <!-- context menu: childs of root level itens -->
        <transition name="slide-fade">
            <div class="context-menu-container" v-show="showContextMenu">
                <ul class="context-menu">
                    <li v-for="(item, index) in menuItens" :key="index">
                        <h5
                            v-if="item.type === 'title'"
                            class="context-menu__title"
                        >
                            <i :class="item.icon" aria-hidden="true"></i>

                            {{ item.txt }}

                            <a
                                v-if="index === 0"
                                @click.prevent="closeContextMenu"
                                class="context-menu__btn-close"
                                href="#"
                            >
                                <i
                                    class="fa fa-window-close"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </h5>

                        <a
                            v-else
                            href="#"
                            @click.prevent="openSection(item)"
                            :class="subMenuClass(item.txt)"
                        >
                            {{ item.txt }}
                        </a>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

import menuData from "./support/menu-data";
import kebabCase from "lodash/kebabCase";

export default {
    name: "Menu",

    data() {
        return {
            contextSection: "",

            menuItens: [],

            menuData: menuData,
            // productManager: "",
            activeSubMenu: "",
            productitems: [
                {
                    name: "Product",
                    children: [
                        {
                            name: "Get Products (with Inventory)",
                            path: "/available_products",
                        },
                        { name: "Get Inventory", path: "/get_inventory" },
                        { name: "Create Products", path: "/create_product" },
                        { name: "Get All Products", path: "/all_products" },
                    ],
                },
            ],
            inventoryitems: [
                {
                    name: "Inventory",
                    children: [
                        { name: "Create Inventory", path: "/create_inventory" },
                        {
                            name: "Get Products (with Inventory)",
                            path: "/available_products",
                        },
                        { name: "Get Inventory", path: "/get_inventory" },
                        { name: "Get All Products", path: "/all_products" },
                    ],
                },
            ],
            shipmentitems: [
                {
                    name: "Manage Shipment",
                    children: [
                        {
                            name: "Update Delivery Status",
                            path: "/update_tracking",
                        },
                        { name: "All Tracking Orders", path: "/track_all" },
                    ],
                },
            ],
            adminitems: [
                {
                    name: "Admin Function",
                    children: [
                        { name: "Get Cutomers", path: "/get_customer" },
                        {
                            name: "Get Products (with Inventory)",
                            path: "/available_products",
                        },
                        { name: "Get Inventory", path: "/get_inventory" },
                        { name: "Create Products", path: "/create_product" },
                        { name: "Create Inventory", path: "/create_inventory" },
                        { name: "Get All Products", path: "/all_products" },
                    ],
                },
            ],
            customeritems: [
                {
                    name: "Admin Function",
                    children: [
                        { name: "Browse Products", path: "/purchase_product" },
                        { name: "My Orders", path: "/get_my_order" },
                    ],
                },
            ],
            proddefaultOpenLevel: 1,
            invendefaultOpenLevel: 1,
        };
    },
    // beforeMount: function() {
    //     this.firstName = this.$store.state.firstName;
    //     this.lastName = this.$store.state.lastName;
    //     this.token = this.$store.state.token;
    //     this.idToken = this.$store.state.idToken;
    //     this.scope = this.$store.state.scope;
    //     this.role = this.$store.state.role;
    //     console.log("this.$store.state.role", this.$store.state.role);
    //     this.scArr = this.scope.split(" ");
    //     if (this.scArr.includes("vue_client_admin")) {
    //         this.admin_show = true;
    //     }
    // },
    methods: {
        openProjectLink() {
            alert(
                "You could open the project frontend in another tab here, so the logged admin could see changes made to the project ;)"
            );
        },

        updateMenu(context) {
            this.contextSection = context;
            this.menuItens = this.menuData[context];

            if (context === "home") {
                this.$router.push("/orderhome");
                window.bus.$emit("menu/closeMobileMenu");
            }

            if (context === "register") {
                this.$router.push("/register");
                window.bus.$emit("menu/closeMobileMenu");
            }
            if (context === "update_tracking") {
                this.$router.push("/update_tracking");
                window.bus.$emit("menu/closeMobileMenu");
            }
            if (context === "get_customer") {
                this.$router.push("/get_customer");
                window.bus.$emit("menu/closeMobileMenu");
            }

            if (context === "purchase_product") {
                this.$router.push("/purchase_product");
                window.bus.$emit("menu/closeMobileMenu");
            }
        },

        highlightSection(section) {
            return {
                menu__link: true,
                "menu__link--active": section === this.contextSection,
            };
        },

        subMenuClass(subMenuName) {
            return {
                "context-menu__link": true,
                "context-menu__link--active":
                    this.activeSubMenu === subMenuName,
            };
        },

        closeContextMenu() {
            this.contextSection = "";
            this.menuItens = [];
        },

        openSection(item) {
            this.activeSubMenu = item.txt;

            this.$router.push(this.getUrl(item));
            window.bus.$emit("menu/closeMobileMenu");
        },

        getUrl(item) {
            let sectionSlug = kebabCase(item.txt);

            return `${item.link}/${sectionSlug}`;
        },
    },
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
