import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  let q = _qs.Quotes;
  //@ts-ignore
  document.querySelector('#quote').innerHTML = q.getQuote()
}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quotes', drawQuote)
    _qs.getQuotes();
  }
}
