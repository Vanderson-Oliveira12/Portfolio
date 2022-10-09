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
    titleElement: document.querySelector('.header-content-title'),
    text: 'Sou desenvolvedor ',
    textTwo: "Front End",
    typedInsert() {
        let title = this.titleElement;
        let textArr = this.text.split('');
        let textIndex = 0;

        let textIndexTwo = 0;
        let textArrTwo = this.textTwo.split('');

        let span = document.createElement('span');

        setInterval(() => {

            if (textIndex < textArr.length) {
                title.textContent += `${textArr[textIndex]}`

                textIndex++;
            }

            if (textIndex >= textArr.length) {
                if (textIndexTwo < textArrTwo.length) {
                    title.appendChild(span);
                    span.textContent += `${textArrTwo[textIndexTwo]}`;
                    textIndexTwo++;
                }
            }

        }, 150)


    },
    typedInit() {
        this.typedInsert();
    }
}

const carouselMobile = {
    arrowsElement: document.querySelectorAll('.depoiments-mobile-arrow i'),
    itemsCarouselElement: document.querySelectorAll('.depoiments-mobile .depoiments-item'),
    indexItem: 0,
    slideCarousel() {
        let itemCarousel = carouselMobile.itemsCarouselElement;
        let carouselLength = itemCarousel.length - 1;

        itemCarousel[carouselMobile.indexItem].classList.remove('depoiments-item-active');

        carouselMobile.indexItem++;

        if (carouselMobile.indexItem > carouselLength) {
            carouselMobile.indexItem = 0;
        }

        itemCarousel[carouselMobile.indexItem].classList.add('depoiments-item-active');

    },
    previousItem() {

        let carouselLength = carouselMobile.itemsCarouselElement.length - 1;

        carouselMobile.itemsCarouselElement[carouselMobile.indexItem].classList.remove('depoiments-item-active');

        carouselMobile.indexItem--

        if (carouselMobile.indexItem < 0) {
            carouselMobile.indexItem = carouselLength;
        }

        carouselMobile.itemsCarouselElement[carouselMobile.indexItem].classList.add('depoiments-item-active')

    },
    nextItem() {

        carouselMobile.itemsCarouselElement[carouselMobile.indexItem].classList.remove('depoiments-item-active');

        carouselMobile.indexItem++

        if (carouselMobile.indexItem > carouselMobile.itemsCarouselElement.length - 1) {
            carouselMobile.indexItem = 0
        }

        carouselMobile.itemsCarouselElement[carouselMobile.indexItem].classList.add('depoiments-item-active');

    },
    carouselMobileInit() {
        setInterval(this.slideCarousel, 3000);
        this.arrowsElement[0].addEventListener('click', this.previousItem);
        this.arrowsElement[1].addEventListener('click', this.nextItem);
    }
}

menuMobile.menuInit();
typedTitle.typedInit();
carouselMobile.carouselMobileInit();