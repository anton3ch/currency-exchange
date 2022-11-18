export default class CurrencyExchange {
  static exchangeCurrency(currencyFrom, currencyTo, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currencyFrom}/${currencyTo}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.result} ${response['error-type']}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
}