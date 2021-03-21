// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).

let ds = new DataSource({
  url: "https://static.ngnrs.io/test/prices",
});
ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.err(error);
  });

class DataSource {
  constructor() {}
  getPrices() {
    return data["prices"];
  }
  quote() {
    var pair = data["prices"]["pair"];
    var quote = pair.Substring(pair.length - 3);
    return quote;
  }
  mid() {
    var buy = data["prices"]["buy"];
    var sell = data["prices"]["buy"];
    var mid = (buy + sell) / 2;
    return mid;
  }
}
