var cartButton = document.querySelectorAll(".buy");
var popupCart = document.querySelector(".modal-cart");
var closeCart = popupCart.querySelector(".modal-cart-close");
var continueShopping = document.querySelector(".modal-more-shopping");

var popupBuy = document.querySelector(".modal-cart-link");
var quantity = document.querySelector(".quantity").innerHTML;

var bookmark = document.querySelectorAll(".bookmark");
var quantityBookmark = document.querySelector(".amount-bookmarks").innerHTML;

var cartLink = document.querySelector(".catalog-cart");
var bookmarkLink = document.querySelector(".header-bookmarks");

if (quantityBookmark > 0) {
  bookmarkLink.classList.add("not-empty");
}

if (quantity > 0) {
  cartLink.classList.add("not-empty");
}

for (var i = 0; i < cartButton.length; i++) {
  cartButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    quantity ++;
    if (quantity > 0) {
      cartLink.classList.add("not-empty");
    }
    document.querySelector(".quantity").innerHTML = quantity;
    popupCart.classList.add("modal-show");
  });
   closeCart.addEventListener("click", function (evt) {
   evt.preventDefault();
   popupCart.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupCart.classList.contains("modal-show")) {
        popupCart.classList.remove("modal-show");
      }
    }
  });
}
    
continueShopping.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupCart.classList.remove("modal-show");
})

console.log(quantityBookmark);
for (var i = 0; i < bookmark.length; i ++) {
  bookmark[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    quantityBookmark++;
    if (quantityBookmark > 0) {
      bookmarkLink.classList.add("not-empty");
    }
    document.querySelector(".amount-bookmarks").innerHTML = quantityBookmark;
  })
}

