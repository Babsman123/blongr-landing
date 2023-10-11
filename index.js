const openProduct = document.querySelectorAll(".product");
const openProductList = document.querySelector(".dropdown-product");
const openCompanyList = document.querySelector(".dropdown-company");
const openConnectList = document.querySelector(".dropdown-connect");

const product = document.querySelector(".product-list");
//Hamburger menu

const openMenu = document.querySelector(".open-hamburger");
const closeMenu = document.querySelector(".close-hamburger");
const openNav = document.querySelector(".header__nav");

//OverLay
const overLay = document.querySelector(".overlay");

//sign-in form
const signUp = document.querySelector(".signUp");
const formSignUp = document.querySelector(".sign-up");
const closeSignUp = document.querySelector(".close-form");

//logIn form

const logIn = document.querySelector(".log-in");
const formLogIn = document.querySelector(".login");
const closeLogIn = document.querySelector(".close-login");

//ask log in & sign up
const askLogIn = document.querySelector(".ask-login");
const askSignUp = document.querySelector(".ask-signup");

for (let i = 0; i < openProduct.length; i++) {
  openProduct[0].addEventListener("click", () => {
    openCompanyList.classList.remove("company-list");
    openConnectList.classList.remove("connect-list");
    openProductList.classList.add("product-list");
  });

  openProduct[1].addEventListener("click", () => {
    openProductList.classList.remove("product-list");
    openConnectList.classList.remove("connect-list");
    openCompanyList.classList.add("company-list");
  });

  openProduct[2].addEventListener("click", () => {
    openCompanyList.classList.remove("company-list");
    openProductList.classList.remove("product-list");
    openConnectList.classList.add("connect-list");
  });
  // console.log(openProduct[i]);
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    openCompanyList.classList.remove("company-list");
    openProductList.classList.remove("product-list");
    openConnectList.classList.remove("connect-list");
  }
});
openMenu.addEventListener("click", () => {
  openNav.classList.add("open-nav");
  // openNav.classList.remove("close-nav");
  openMenu.classList.add("hide-open-hamburger");
  closeMenu.classList.add("display-close-hamburger");
});

closeMenu.addEventListener("click", () => {
  openNav.classList.remove("open-nav");
  // openNav.classList.add("close-nav");
  closeMenu.classList.remove("display-close-hamburger");
  openMenu.classList.remove("hide-open-hamburger");
});

signUp.addEventListener("click", () => {
  formSignUp.classList.add("open-signUp");
  overLay.classList.add("open-overlay");
});

closeSignUp.addEventListener("click", () => {
  formSignUp.classList.remove("open-signUp");
  overLay.classList.remove("open-overlay");
});

logIn.addEventListener("click", () => {
  formLogIn.classList.add("open-login");
  overLay.classList.add("open-overlay");
});

closeLogIn.addEventListener("click", () => {
  formLogIn.classList.remove("open-login");
  overLay.classList.remove("open-overlay");
});

askLogIn.addEventListener("click", () => {
  formLogIn.classList.add("open-login");
  overLay.classList.add("open-overlay");
  formSignUp.classList.remove("open-signUp");
});

askSignUp.addEventListener("click", () => {
  formSignUp.classList.add("open-signUp");
  formLogIn.classList.remove("open-login");
  overLay.classList.add("open-overlay");
});
