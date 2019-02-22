import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  console.log("QUIET! THE QUOTER SHALL QUOTETH")
  document.querySelector('#quote').innerHTML = _qs.Quotes.getQuote()
}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quotes', drawQuote)
    _qs.getQuotes();
  }
}
