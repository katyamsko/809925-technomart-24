var mapButton = document.querySelector(".map-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-feedback-close");
var login = popup.querySelector("[name=user-name]");
var form = popup.querySelector(".feedback-form");
var password = popup.querySelector("[name=user-mail]");
var text = popup.querySelector("[name=user-textarea]");
var map = document.querySelector(".about-us-map"); 
var mapPopup = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map-close");

var arrowLeft = document.querySelector(".slider-left");
var arrowRight = document.querySelector(".slider-right");
var sliderOne = document.getElementById("product-1");
var sliderTwo = document.getElementById("product-2");
var labelLeft = document.querySelector(".slider-controls-item--1");
var labelRight = document.querySelector(".slider-controls-item--2");

if (sliderOne.checked) {
  arrowLeft.classList.add("arrow-nonactive");
} else {
  arrowRight.classList.add("arrow-nonactive");
}

arrowRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderTwo.checked = true;
  arrowRight.classList.add("arrow-nonactive");
  arrowLeft.classList.remove("arrow-nonactive");
});

arrowLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderOne.checked = true;
  arrowRight.classList.remove("arrow-nonactive");
  arrowLeft.classList.add("arrow-nonactive");
});

labelLeft.addEventListener("click", function (evt) {
  arrowRight.classList.remove("arrow-nonactive");
  arrowLeft.classList.add("arrow-nonactive");
  console.log("left");
});

labelRight.addEventListener("click", function (evt) {
  arrowLeft.classList.remove("arrow-nonactive");
  arrowRight.classList.add("arrow-nonactive");
  console.log("right");
});


var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }



mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
    
   if (storage) {
     login.value = storage;
     password.focus();
    } else {
      login.focus();
    }
});

close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("modal-show");
   popup.classList.remove("modal-error");
  });

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});
   
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-map-show")) {
      mapPopup.classList.remove("modal-map-show");
    }
  }
});

/*modal-cart*/

var cartBuy = document.querySelectorAll(".buy");
var popupCart = document.querySelector(".modal-cart");
var cartClose = popupCart.querySelector(".modal-cart-close");
var continueShopping = document.querySelector(".modal-more-shopping");

var popupBuy = document.querySelector(".modal-cart-link");
var quantity = document.querySelector(".quantity").innerHTML;

var bookmark = document.querySelectorAll(".bookmark");
var quantityBookmark = document.querySelector(".amount-bookmarks").innerHTML;

var cartLink = document.querySelector(".index-cart");
var bookmarkLink = document.querySelector(".header-bookmarks");

if (quantityBookmark > 0) {
  bookmarkLink.classList.add("not-empty");
}

if (quantity > 0) {
  cartLink.classList.add("not-empty");
}

for (var i = 0; i < cartBuy.length; i++) {
  cartBuy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    quantity ++;
    if (quantity > 0) {
      cartLink.classList.add("not-empty");
    }
    document.querySelector(".quantity").innerHTML = quantity;
    popupCart.classList.add("modal-show");
  });
   cartClose.addEventListener("click", function (evt) {
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

