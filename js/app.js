const app = new Framework7({

    el: '#app',

    name: 'Food Order',

    id: 'com.foodorder.app',

    theme: 'auto',

    routes: [

        {
            path: '/',
            url: './pages/home.html'
        },

        {
            path: '/categorias/',
            url: './pages/categorias.html'
        },

        {
            path: '/favoritos/',
            url: './pages/favoritos.html'
        },

        {
            path: '/ordenes/',
            url: './pages/ordenes.html'
        },

        {
            path: '/perfil/',
            url: './pages/perfil.html'
        },

        {
            path: '/acerca/',
            url: './pages/acerca.html'
        },

        {
            path: '/login/',
            url: './pages/login.html'
        }

    ]

});


$$(document).on(
    'page:init','.page[data-name="home"]', function () {

        app.swiper.create(
            '.recommend-swiper',
            {
                slidesPerView: 1.15,
                spaceBetween: 10,
                centeredSlides: false,

                pagination: {
                    el: '.swiper-pagination'
                }
            }
        );

    }
);