var app = new Vue ({

    el: '#root',

    data: {

        headerMenu: {

            logo: 'img/avadabarbers-logo-x2-300x104.png',

            links: [
                'fas fa-shopping-cart',
                'fas fa-bars'
            ]

        },

        footerMenu: {

            footerShop: 'img/avadabarbers_footer_shop_image-400x312.png',

            footerAppointment: 'img/avadabarbers_footer_appointment_image-400x312.png'

        }

    }

});

// per la console di Vue
Vue.config.devtools = true;