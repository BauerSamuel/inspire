import ImageService from "./image-service.js";

const _is = new ImageService()

function _giveBgImg() {
  let image = _is.Images
  document.getElementById('bg-image').style.backgroundImage = `url('${image.url}')`;

}
export default class ImageController {
  constructor() {
    _is.addSubscriber('images', _giveBgImg)
    _is.getImages()
  }

}

