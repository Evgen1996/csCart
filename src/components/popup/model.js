export default class Model {
  constructor() {

  }

  togglePopUp(popup) {
    popup.classList.add('popup_open')
  }

  closePopup(popup) {
    popup.classList.remove('popup_open')
  }
}