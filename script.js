document
            .querySelector("button.mobile-menu-toggle")
            .addEventListener("click", function () {
                var header = document.querySelector("header");
                header.classList.toggle('menu-visible');
            });

        var menuItems = document.querySelectorAll("nav ul li a");

        for (let i = 0; i < menuItems.length; i++) {
            let link = menuItems[i];
            link.addEventListener("click", function (event) {
                let href = link.getAttribute('href');
                if (href.indexOf('#') !== -1) {
                    event.preventDefault();
                    document.getElementById(href.slice(1)).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }