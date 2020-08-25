export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.handleClick(this.handlePopup.bind(this))
    this.view.handleClickClose(this.hidePopup.bind(this))
  }

  handlePopup(popup) {
    this.model.togglePopUp(popup);
  };

  hidePopup(popup) {
    this.model.closePopup(popup);
  }
}