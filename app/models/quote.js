export default class Quote {
  constructor(data) {
    this.quote = data.quote.body
    this.author = data.quote.author
  }

  getQuote() {
    return `
    <div id="quote-card" class="card border-info mb-1" style"=max-width: 10cw;">
    <div class="card-body text-info">
    <h4 class="card-title">${this.quote}</h4>
    <div class="card-header pb-0"><h6>${this.author}</h6></div>
      </div>
    </div>
    `
  }

}