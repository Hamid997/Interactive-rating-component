const list = document.getElementsByClassName("ratingBtn");
const submitBtn = document.getElementById("submitBtn");
const firstComponent = document.getElementsByClassName("component")[0];
const secondComponent = document.getElementsByClassName("component2")[0];
let ratingResult = document.getElementsByClassName("result")[0];
let ratingValue = 0;

const handleRatingClick = (e) => {
  ratingValue = e.target.textContent;
  console.log(ratingValue);
};

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", handleRatingClick);
}

const handleSubmitClick = () => {
  if (ratingValue !== 0) {
    secondComponent.classList.remove("hidden");
    firstComponent.classList.add("hidden");
    ratingResult.textContent = `You selected ${ratingValue} out of 5`;
  } else {
    alert("Rating can't be null, give 1 at least for the worst rating");
  }
};

submitBtn.addEventListener("click", handleSubmitClick);