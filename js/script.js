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

            footerCenter: {

                footerLogo: 'img/avadabarbers-stickylogo-x2.png',

                address: {

                    name: 'Avada Barbers',

                    street: '123 New York Street',

                    city: 'New York City',

                    eMail: 'info@yourwebsite.com',

                    phone: '+1 (555) 555-1212'

                },

                socialIcons: {

                    facebook: 'fab fa-facebook-f',

                    twitter: 'fab fa-twitter',

                    youtube: 'fab fa-youtube',

                    instagram: 'fab fa-instagram'
                }

            },

            footerAppointment: 'img/avadabarbers_footer_appointment_image-400x312.png'

        }

    }

});

// per la console di Vue
Vue.config.devtools = true;