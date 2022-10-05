const menuMobile = {
    menuButton: document.querySelector('.menu-burguer'),
    closeButton: document.querySelector('.mobile-close'),
    navMobileElement: document.querySelector('.nav-links-mobile'),
    aria: false,
    activeMenu() {

        menuMobile.navMobileElement.classList.add('active-menu');

        if (menuMobile.hasActiveMenu()) {
            this.aria = true
            menuMobile.menuButton.setAttribute('aria-expanded', this.aria);
            menuMobile.navMobileElement.setAttribute('aria-expanded', this.aria)
        }

    },
    closeMenu() {
        menuMobile.navMobileElement.classList.remove('active-menu');

        if (!menuMobile.hasActiveMenu()) {
            this.aria = false;
            menuMobile.menuButton.setAttribute('aria-expanded', this.aria);
            menuMobile.navMobileElement.setAttribute('aria-expanded', this.aria)
        }

    },
    hasActiveMenu() {
        if (menuMobile.navMobileElement.classList.contains('active-menu')) {
            return true
        } else {
            return false
        }
    },
    menuInit() {
        this.menuButton.addEventListener('click', this.activeMenu);
        this.closeButton.addEventListener('click', this.closeMenu);
    }
}

const typedTitle = {
    titleElement: document.querySelector('.header-content-title')
}

menuMobile.menuInit()