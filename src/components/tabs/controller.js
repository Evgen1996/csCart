export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindToggleTab(this.handleToggleTab.bind(this));
  }

  handleToggleTab(tab, listContent) {
    this.model.toggleTab(tab, listContent);
  };
}