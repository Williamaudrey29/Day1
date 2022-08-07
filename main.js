window.addEventListener("load", function () {
  const card = document.querySelector(".card");
  const shoe = document.querySelector(".card__img");
  const cardTitle = document.querySelector(".card__name");
  const heart = document.querySelector(".card__icon-heart");
  card.addEventListener("mouseenter", function (event) {
    const heartX = heart.getBoundingClientRect();
    const nameX = cardTitle.getBoundingClientRect();
    const spaceTranslate = heartX["x"];
    const shoeY = shoe.getBoundingClientRect();
    console.log(heartX);
    console.log(nameX);

    console.log(shoeY.bottom - nameX.top);
    cardTitle.style.transform = "translateY(`${shoeY.bottom - nameX.top}`px)";
  });
});
