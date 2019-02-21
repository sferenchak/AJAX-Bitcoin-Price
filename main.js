const controls = document.querySelector(".controls");
const priceDisplay = document.querySelector("#price");
var currency = "USD";

controls.addEventListener("click", function(event) {
  let elementClicked = event.target;

  if (elementClicked.nodeName === "BUTTON") {
    getData();
  } else if (elementClicked.type === "radio") {
    currency = elementClicked.value;
  }
});

const getData = function() {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw Error(404);
      }
      return res.json();
    })
    .then(data => {
      let price = data.bpi[currency].rate;
      priceDisplay.innerHTML = `${price} ${currency}`;
    })
    .catch(err => {
      console.log("There was an error...", err);
    });
};

const setCurrency = function() {};
