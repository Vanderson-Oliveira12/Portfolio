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
};

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
};

const receiveRegister = {
    nameElement: document.querySelector('#name'),
    lastnameElement: document.querySelector('#lastname'),
    emailElement: document.querySelector('#email'),
    phoneElement: document.querySelector('#phone'),
    messageElement: document.querySelector('#message'),
    sendUserData(e) {
        e.preventDefault();

        let name = receiveRegister.nameElement.value,
            lastname = receiveRegister.lastnameElement.value,
            email = receiveRegister.emailElement.value,
            phone = receiveRegister.phoneElement.value,
            message = receiveRegister.messageElement.value;

        let msgInforDiv = document.querySelector('.form-msg-div'),
            msgInforElement = document.querySelector('.form-msg');

        let nameFormat = name != "" ? String(name)[0].toUpperCase() + String(name).slice(1).toLowerCase() : ""

        try {
            if (!hasData()) {
                throw "Preencha todos os campos!";
            } else if (hasData()) {
                msgInforElement.textContent = `Dados enviados com sucesso! ${nameFormat} em breve entrarei em contato você.`;
                sendData();
            }
        } catch (e) {
            msgInforElement.textContent = e;
        } finally {
            msgInforDiv.classList.add('form-msg-div-active');
            setTimeout(() => {
                msgInforDiv.classList.remove('form-msg-div-active');
            }, 5000);

            if (hasData()) {
                let buttonSubmit = document.querySelector('.form-all .button-submit');
                cleanForm(receiveRegister.nameElement, receiveRegister.lastnameElement, receiveRegister.emailElement, receiveRegister.phoneElement, receiveRegister.messageElement);
                buttonSubmit.setAttribute("disabled", false);
                buttonSubmit.style = "filter: grayscale(100%);";
                    setTimeout(()=>{
                        buttonSubmit.style = "filter: grayscale(0);"
                        buttonSubmit.removeAttribute('disabled');
                    }, 5000)
            }
        }

        function sendData() {
            fetch('https://api.sheetmonkey.io/form/eg4c3YX4mngeAVh7fEKErc', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    lastname,
                    email,
                    phone,
                    message,
                }),
            })
        }

        function hasData() {
            if (name === "" && lastname === "" && email === "" && phone === "" && message === "") {
                return false;
            } else if (name !== "" && lastname !== "" && email !== "" && phone !== "" && message !== "") {
                return true
            }
        }

        function cleanForm() {

            for (let i = 0; i < arguments.length; i++) {
                arguments[i].value = ""
            }
        };

    },
    registerInit() {
        document.querySelector('.form-all').addEventListener('submit', this.sendUserData)
    }
}


menuMobile.menuInit();
typedTitle.typedInit();
receiveRegister.registerInit();