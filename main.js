var btn = document.querySelector("button");
var priceDisplay = document.querySelector("#price");

btn.addEventListener('click', function() {
    const XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            let price = JSON.parse(XHR.responseText).bpi.USD.rate;
            priceDisplay.innerHTML = price + " USD";
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
})

