import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from "jquery";
import CurrencyExchange from './js/currency-exchange.js';


// Business logic 

function exchangeCurrency(currencyFrom, currencyTo, amount) {
  CurrencyExchange.exchangeCurrency(currencyFrom, currencyTo, amount)
    .then(function(response) {
      if(response instanceof Error) {
        const errorMessage = `there was a problem accessing the currency exchange data from ExchangeRate-API for ${currencyFrom} / ${currencyTo}:
        ${response["error-type"]}`;
        throw new Error(errorMessage);
      } 
      const description = response;
      printElements(description, currencyFrom, currencyTo, amount);   
    })
    .catch(function(error) {
      printError(error);
    });
}

// UI Logic
function printElements(response, currencyFrom, currencyTo, amount) {
  document.getElementById('output').innerHTML = `${amount} ${currencyFrom} converted to ${currencyTo} with a conversion rate of ${response['conversion_rate']} will be ${response['conversion_result']}`;
}


function printError(error) {
  document.querySelector('#error').innerText = error;
}

function clearResults() {
  document.querySelector('#error').innerText = null;
  document.querySelector('#output').innerText = null;
}

function handleFormSubmission(event) {
  event.preventDefault();
  clearResults();
  const currencyFrom = $("#currency-from").val();
  const currencyTo = $("#currency-to").val();
  const amount = $("#amount").val();
  exchangeCurrency(currencyFrom, currencyTo, amount);
  $(".jumbotron").slideDown(1000);
}

window.addEventListener("load", function() {
  $("#currency-exchange-form").submit(handleFormSubmission);
});