export default class View {
  constructor() {
    this.popup = this.getElement('.popup');
    this.button = this.getElement(`button[data-popup="#${this.popup.id}"]`);
    this.buttonClose = this.getElement('.popup__close')
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  handleClick(handle) {
    this.button.addEventListener('click', () => {
      handle(this.popup)
    })
  }

  handleClickClose(handle) {
    this.buttonClose.addEventListener('click', () => {
      handle(this.popup)
    })
  }
}