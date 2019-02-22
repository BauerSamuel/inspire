import Quote from "../../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quotes: []
}

let _subscribers = {
	quotes: []
}

function setState(prop, data) {
	_state[prop] = data;
	_subscribers[prop].forEach(fn => fn());
}

export default class QuoteService {
	get Quotes() {
		return _state.quotes;
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getQuotes() {
		console.log('Getting quotes from the master quoter.')
		_quoteApi.get()
			.then(res => {
				setState('quotes', new Quote(res.data))
			})
	}
}
