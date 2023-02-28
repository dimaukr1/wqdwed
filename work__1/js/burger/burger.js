const MenuBurger = document.querySelector(".NavBurger");
const MenuLeft = document.querySelector(".header__header__menu");
let thisburger = 1;



    MenuBurger.addEventListener('click', () => {

        MenuLeft.classList.add("Active");
        if(thisburger % 2 == 0)
        {
            MenuLeft.classList.remove("Active");
        }
        thisburger= thisburger+1;
        console.log( thisburger)
    })


 