export default {

  // home is a section without childs, set as an empty array
  home: [],

  APIManagement: [

    {
      type: 'title',
      txt: 'Products',
      icon: 'fa fa-tag context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'List Products',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Add New Product',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Manage Categories',
      link: '/page',
    },

  ],

  customers: [

    {
      type: 'title',
      txt: 'Customers',
      icon: 'fa fa-users context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'List Customers',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'List Contacts',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'List Newsletters',
      link: '/page',
    },

  ],
  apim: [

    {
      type: 'title',
      txt: 'API Managment',
      icon: 'fa fa-users context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'API Discover',
      link: '',
    },

    {
      type: 'link',
      txt: 'API Designer',
      link: '/designer',
    },

    {
      type: 'link',
      txt: 'API Test',
      link: '',
    },
    {
      type: 'link',
      txt: 'Sample Doc',
      link: '',
    },
    {
      type: 'link',
      txt: 'Sample PPT',
      link: '',
    },

  ],
  cloud: [

    {
      type: 'title',
      txt: 'Cloud',
      icon: 'fa fa-users context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Microsoft Azure',
      link: '',
    },

    {
      type: 'link',
      txt: 'AWS',
      link: '/designer',
    },

    {
      type: 'link',
      txt: 'TCS Cloud',
      link: '',
    },

  ],
  microservice: [

    {
      type: 'title',
      txt: 'Micro Services',
      icon: 'fa fa-users context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Spring Boot',
      link: '',
    },

    {
      type: 'link',
      txt: 'Microservice',
      link: '/designer',
    },

    {
      type: 'link',
      txt: 'Azure Service',
      link: '',
    },

  ],
  account: [

    {
      type: 'title',
      txt: 'My Account',
      icon: 'fa fa-user context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Change Password',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Change Settings',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Logout',
      link: '/page',
    },

    {
      type: 'title',
      txt: 'Change Subscription',
      icon: 'fa fa-credit-card context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Plans',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Payment Settings',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Payment History',
      link: '/page',
    },

  ],
  admin_tab: [
    {
      type: 'title',
      txt: 'Admin Functions',
      icon: 'fa fa-user context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Create Customer',
      link: '/register-customer',
    },

    {
      type: 'link',
      txt: 'Get Customer',
      link: '/get-customer',
    },

    {
      type: 'link',
      txt: 'Delete Customer',
      link: '/page',
    }

  ],

};
