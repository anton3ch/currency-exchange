import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from "jquery";
import CurrencyExchange from './js/currency-exchange.js';


// Business logic 

function exchangeCurrency(currencyFrom, currencyTo, amount) {
  const currencyArray = ["AFN", "ALL", "DZD", "AOA", "ARS", "AMD", "AWG", "AZN", "BSD", "BHD", "BDT", "BBD", "BZD", "BMD", "BTN", "BOB", "BAM", "BWP", "BRL", "GBP", "BND", "BGN", "BIF", "KHR", "CAD", "CVE", "KYD", "XOF", "XAF", "XPF", "CLP", "CNY", "COP", "KMF", "CDF", "CRC", "HRK", "CZK", "DKK", "DJF", "DOP", "XCD", "EGP", "ERN", "ETB", "EUR", "FKP", "FJD", "GMD", "GEL", "GHS", "GIP", "GTQ", "GNF", "GYD", "HTG", "HNL", "HKD", "HUF", "ISK", "INR", "IDR", "IRR", "IQD", "ILS", "JMD", "JPY", "JOD", "KZT", "KES", "KWD", "KGS", "LAK", "LBP", "LSL", "LRD", "LYD", "MOP", "MKD", "MGA", "MWK", "MYR", "MVR", "MUR", "MXN", "MDL", "MNT", "MAD", "MMK", "NAD", "NPR", "ANG", "TWD", "NZD", "NIO", "NGN", "KPW", "NOK", "OMR", "PKR", "PAB", "PGK", "PYG", "PEN", "PHP", "PLN", "QAR", "RON", "RUB", "RWF", "SVC", "WST", "SAR", "RSD", "SCR", "SLL", "SGD", "SKK", "SBD", "SOS", "ZAR", "KRW", "XDR", "LKR", "SHP", "SDG", "SRD", "SZL", "SEK", "CHF", "SYP", "STD", "TJS", "TZS", "THB", "TOP", "TTD", "TND", "TRY", "TMT", "UGX", "UAH", "AED", "UYU", "USD", "UZS", "VUV", "VEF", "VND", "YER","ZMK"];
  if(currencyArray.includes(currencyFrom) && currencyArray.includes(currencyTo)){
    CurrencyExchange.exchangeCurrency(currencyFrom, currencyTo, amount)
      .then(function(response) {
        if(response instanceof Error) {
          const errorMessage = `there was a problem accessing the currency exchange data from ExchangeRate-API for ${currencyFrom} / ${currencyTo}:
          ${response["error-type"]}`;
          throw new Error(errorMessage);
        } 
        const description = response;

        const conversionRate = description["conversion_rate"];
        const key = `${description["base_code"]}${description["target_code"]}`;
        sessionStorage.setItem(key, conversionRate);


        printElements(description, currencyFrom, currencyTo, amount);
      })
      .catch(function(error) {
        printError(error);
      });
  } else {
    $(".wrong-input").show(1000);
    setTimeout(function() {
      $(".wrong-input").hide(1000);
    }, 5000);
  }
}

// UI Logic
function printElements(response, currencyFrom, currencyTo, amount) {
  document.getElementById('output').innerHTML = `<span class="bold">${amount} ${currencyFrom}</span> converted to <span class="bold">${currencyTo}</span> with a conversion rate of <span class="bold">${response['conversion_rate']}</span> will be <span class="bold">${response['conversion_result']}</span>`;
  $(".jum2").slideDown(1000);
}

function printStored(currencyFrom, currencyTo, amount, key) {
  let rate = sessionStorage.getItem(key);
  document.getElementById('output').innerHTML = `<span class="bold">${amount} ${currencyFrom}</span> converted to <span class="bold">${currencyTo}</span> with a conversion rate of <span class="bold">${rate}</span> will be <span class="bold">${amount * rate}</span>`;
  $(".jum2").slideDown(1000);
}

function printError(error) {
  document.querySelector('#error').innerText = error;
  $(".jum2").slideDown(1000);
}

function clearResults() {
  document.querySelector('#error').innerText = null;
  document.querySelector('#output').innerText = null;
  $(".jum2").hide();
}

function handleFormSubmission(event) {
  event.preventDefault();
  clearResults();
  const currencyFrom = $("#currency-from").val();
  const currencyTo = $("#currency-to").val();
  const amount = $("#amount").val();

  const key = currencyFrom + currencyTo;
  if(sessionStorage.getItem(key)) {
    printStored(currencyFrom, currencyTo, amount, key);
  } else {
    exchangeCurrency(currencyFrom, currencyTo, amount);
  }
}

window.addEventListener("load", function() {
  $("#currency-exchange-form").submit(handleFormSubmission);
});