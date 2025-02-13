let mainSection = document.querySelector(".container");
let love = document.querySelector("#love");
let likesEl = document.getElementById("likes");

let improveLikeEl = document.getElementById("improveLike");
let changeIconEl = document.getElementById("changeIconDark");
let changeIconLightEl = document.getElementById("changeIconLight");




mainSection.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(0.8)";
  love.style.opacity = 0.8;
  // love.style.color = "#f20000";

  changeIconLightEl.setAttribute("class", "ri-heart-3-fill",);
  changeIconLightEl.id = "changeIconDark";

  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
    love.style.opacity = 0;
  }, 1500);

  let currentLikesTop = parseInt(improveLikeEl.textContent);
  improveLikeEl.textContent = currentLikesTop + 1 + "k";
  improveLikeEl.classList.add("likes");
  // improveLikeEl.style.color = "green";

  let currentLikes = parseInt(likesEl.textContent);
  likesEl.textContent = currentLikes + 1 + "k Likes";
  likesEl.classList.add("likes");
  likesEl.style.color = "green";
   
});
