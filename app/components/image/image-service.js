import Image from "../../models/image.js";

// @ts-ignore
const _imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	images: {}
}

let _subscribers = {
	images: []
}

function setState(prop, data) {
	_state[prop] = data;
	_subscribers[prop].forEach(fn => fn())
}


export default class ImageService {
	get Images() {
		return _state.images;
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImages() {
		_imgApi.get()
			.then(res => {
				setState('images', new Image(res.data))
			})
	}
}
