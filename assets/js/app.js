const shop = document.getElementById("shop");

const shopItemsData = [
  {
    id: 1,
    title: "Delicious Pizza",
    price: 45,
    description:
      "It is very tasting for eating something is better than nothing",
    img: "/assets/images/home-img-3.png",
  },

  {
    id: 2,
    title: "Mobile Phone",
    price: 35,
    description:
          "When your parent are not rich but still afford to give you a beautiful life appreciate their sacrifices",
      img: "/assets/images/mobile5.jpg"
  },

  {
    id: 3,
    title: "Shoe",
    price: 450,
    description:
      "It is very tasting for eating something is better than nothing",
    img: "/assets/images/shoe4.jpg",
  },

  {
    id: 4,
    title: "Beautiful Watch",
    price: 350,
    description:"If you stay motivated you must be working for a purpose and make sure everyday is difference from others",
    img: "/assets/images/watch1.jpg",
  },
];
const generateShopItem = () => {
    return (shop.innerHTML = shopItemsData
      .map((item) => {
        const { img, title, price, description } = item;

        return (shop.innerHTML = `

      <div class="shopItem">
        <img src=${img} class="img-fluid" alt="" />
        <!-- shop details -->
        <div class="shopDetails">
          <h3 class="shopTitle">${title}</h3>

          <p class="shopDescription">
            ${description}
          </p>

          <div
            class="price-quantity d-flex justify-content-between align-items-center mt-5"
          >
            <h2>$ ${price}</h2>

            <div class="price-buttons d-flex align-items-center gap-3">
           <i class="fas fa-plus" id="increment"></i>
              <span class="quantity fs-2" id="quantity">0</span>
              <i class="fas fa-minus" id="decrement"></i>
            </div>
          </div>
        </div>
      </div>

`);
      })
      .join(" "));
};

generateShopItem();
