// xử lý toggle menu
function handleToggleMenu() {
    let btnToggleMenu = document.getElementById('btnToggle');
    if (btnToggleMenu) {
        btnToggleMenu.addEventListener('click', () => {
            let navMobile = document.getElementById('navMobile');
            if (navMobile) {
                navMobile.classList.toggle('d-block');
            }
        })
    }
    let navMobileLevel1 = document.querySelectorAll('.nav-mobile-level-1');
    if (navMobileLevel1) {
        let btnToggleNavs = document.querySelectorAll('.nav-mobile-level-1 > li > div i');
        for (let element of btnToggleNavs) {
            element.addEventListener('click', () => {
                element.parentNode.parentNode.childNodes[3].classList.toggle('d-block');
            })
        }
    }
}
// xử lý scroll toggle topbar
window.addEventListener('scroll', function () {
    let headerTop = document.querySelectorAll('.header-top')[0];
    if (window.scrollY > headerTop.offsetHeight + 100) {
        headerTop.classList.add('header-fixed-top');
    }
    else {
        headerTop.classList.remove('header-fixed-top');
    }
});
handleToggleMenu();

// Xử lý click button back to top
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if(mybutton){
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}
if(mybutton){
    mybutton.addEventListener("click", () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}
