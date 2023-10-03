const openProduct = document.querySelectorAll(".product");
const openProductList = document.querySelector(".dropdown-product");
const openCompanyList = document.querySelector(".dropdown-company");

for (let i = 0; i < openProduct.length; i++) {
  openProduct[0].addEventListener("click", () => {
    openProductList.classList.add("product-list");
  });

  openProduct[2].addEventListener("click", () => {
    // openCompanyList.classList.add("company-list");
    console.log("hello world");
  });
  console.log(openProduct[i]);
}

// openProduct.addEventListener("click", () => {
//   openProductList.classList.add("product-list");
//   //   console.log("hello world");
// });
