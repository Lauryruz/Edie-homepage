const menuButton = document.querySelector('.navigation__icon');
        const mobileMenu = document.querySelector('#mobile');
        const mobileIcon = document.querySelector('.mobile__icon');

        function displayMenuItem() {

            if (mobileMenu.style.display == "none") {
                mobileMenu.style.display = "block";
                mobileMenu.style.width = "100%";
            }
        }

        function hideMenuItem() {
            if (mobileMenu.style.display == "block") {
                mobileMenu.style.display = "none";
                mobileMenu.style.width = "0px";
            }
        }
        menuButton.addEventListener('click', displayMenuItem);
        mobileIcon.addEventListener('click', hideMenuItem);