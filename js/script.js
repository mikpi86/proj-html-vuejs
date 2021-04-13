var app = new Vue ({

    el: '#root',

    data: {

        headerMenu: {

            logo: 'img/avadabarbers-logo-x2-300x104.png',

            links: [
                'fas fa-shopping-cart',
                'fas fa-bars'
            ]

        }

    }

});

// per la console di Vue
Vue.config.devtools = true;