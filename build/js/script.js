(function () {
    let btnMenuOpen = document.querySelector(".menu__btn--open");
    let body = document.querySelector("body");
    let btnMenuClose = document.querySelector(".menu__btn--close");

    btnMenuOpen.addEventListener("click", function (evt) {
        evt.preventDefault();
        body.classList.add("menu-open");
    });

    btnMenuClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        body.classList.remove("menu-open");
    });
})();