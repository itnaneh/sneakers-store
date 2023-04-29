const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "OZEWEEGO",
    price: 119,
    colors: [
      {
        code: "#4997d0",
        img: "./img/OZEWEEGO.png",
      },
      {
        code: "black",
        img: "./img/OZEWEEGO-B.png",
      },
    ],
  },
  {
    id: 2,
    title: "STAN SMITH",
    price: 112,
    colors: [
      {
        code: "green",
        img: "./img/STAN SMITH.png",
      },
      {
        code: "black",
        img: "./img/STAN SMITH-B.png",
      },
    ],
  },
  {
    id: 3,
    title: "OZELIA",
    price: 123,
    colors: [
      {
        code: "black",
        img: "./img/OZELIA.png",
      },
      {
        code: "#FF3632",
        img: "./img/OZELIA-R.png",
      },
    ],
  },
  {
    id: 4,
    title: "NMR_R1",
    price: 117,
    colors: [
      {
        code: "lightgray",
        img: "./img/NMR-w1.png",
      },
      {
        code: "black",
        img: "./img/NMR_R1.png",
      },
    ],
  },
  {
    id: 5,
    title: "RETROPY E5",
    price: 130,
    colors: [
      {
        code: "black",
        img: "./img/RETROPY E5.png",
      },
      {
        code: "gray",
        img: "./img/RETROPY E5-w.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];


    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
