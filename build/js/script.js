(function () {
    let btnMenuOpen = document.querySelector(".menu__btn--open");
    let body = document.querySelector(".body");
    let btnMenuClose = document.querySelector(".menu__btn--close");

    btnMenuOpen.addEventListener("click", function (evt) {
        evt.preventDefault();
        body.classList.add("menu-open");
    });

    btnMenuClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        body.classList.remove("menu-open");
    });


    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.939068064173775, 30.3273664999999],
                zoom: 15,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark([59.938639906114595, 30.32308247620295], {
                hintContent: 'Собственный значок метки',
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/icons/map-marker.png',
                // Размеры метки.
                iconImageSize: [35, 35],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-18, -18]
            });

        myMap.geoObjects
            .add(myPlacemark)
    });
})();