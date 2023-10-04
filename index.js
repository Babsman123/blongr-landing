const openProduct = document.querySelectorAll(".product");
const openProductList = document.querySelector(".dropdown-product");
const openCompanyList = document.querySelector(".dropdown-company");
const openConnectList = document.querySelector(".dropdown-connect");

const product = document.querySelector(".product-list");
//Hamburger menu

const openMenu = document.querySelector(".open-hamburger");
const closeMenu = document.querySelector(".close-hamburger");
const openNav = document.querySelector(".header__nav");

//close All menu
// const closeNav = document.querySelector();

for (let i = 0; i < openProduct.length; i++) {
  openProduct[0].addEventListener("click", () => {
    openCompanyList.classList.remove("company-list");
    openConnectList.classList.remove("connect-list");
    openProductList.classList.add("product-list");
    console.log("hello world");
  });

  openProduct[1].addEventListener("click", () => {
    openProductList.classList.remove("product-list");
    openConnectList.classList.remove("connect-list");
    openCompanyList.classList.add("company-list");
    console.log("hello world");
  });

  openProduct[2].addEventListener("click", () => {
    openCompanyList.classList.remove("company-list");
    openProductList.classList.remove("product-list");
    openConnectList.classList.add("connect-list");
    console.log("hello world");
  });
  console.log(openProduct[i]);
}

openMenu.addEventListener("click", () => {
  openNav.classList.add("open-nav");
  //   openMenu.style.display = "none";
  //   closeMenu.style.display = "block";
});

// closeMenu.addEventListener("click", () => {
//   openNav.classList.remove("open-nav");
//   openMenu.style.display = "block";
//   closeMenu.style.display = "none";
// });

// openProduct.addEventListener("click", () => {
//   openProductList.classList.add("product-list");
//   //   console.log("hello world");
// });

// openProduct.addEventListener("click", () => {
//   openCompanyList.classList.add("company-list");
//   console.log("hello world");
// });
