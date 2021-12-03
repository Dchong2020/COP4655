


const url ='https://api.exchangerate.host/latest?base=USD'

fetch(url)
.then(response => response.json())
.then(data => {
console.log(data.rates);

document.querySelector("#currency1").innerText = " 1 USD = " + data.rates.EUR + " EUR";
document.querySelector("#currency2").innerText = " 1 USD = " + data.rates.JPY + " JPY";
document.querySelector("#currency3").innerText = " 1 USD = " + data.rates.GBP + " GBP ";
document.querySelector("#currency4").innerText = " 1 USD = " + data.rates.AUD + " AUD";
document.querySelector("#currency5").innerText = " 1 USD = " + data.rates.CAD + " CAD";
document.querySelector("#currency6").innerText = " 1 USD = " + data.rates.CHF + " CHF";
document.querySelector("#currency7").innerText = " 1 USD = " + data.rates.CNY + " CNY";
document.querySelector("#currency8").innerText = " 1 USD = " + data.rates.KRW + " KRW";
 document.querySelector("#currency9").innerText = " 1 USD = " + data.rates.SGD + " SGD";
 document.querySelector("#currency10").innerText = " 1 USD = " + data.rates.HKD + " HKD";

})

const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
