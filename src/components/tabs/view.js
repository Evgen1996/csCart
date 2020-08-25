export default class View {
  constructor() {
    this.tabs = this.getElement('.tabs');
    this.buttons = this.getListElements('.tabs__button');
    this.listContent = this.getListElements('.tabs__content');
    this.wrapButtons = this.getElement('.tabs__button-wrap')
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  getListElements(selector) {
    const elements = Array.from(this.tabs.querySelectorAll(selector));
    return elements;
  }

  bindToggleTab(handler) {
    this.wrapButtons.addEventListener('click', (event) => {
      if (event.target !== this.wrapButtons) {
        this.buttons.forEach((switcher, index) => {
          switcher.classList.remove('tabs__button_active')
        });
        if (event.target.classList !== 'tabs__button_active') {
          event.target.classList.add('tabs__button_active');
          let activeTab = this.buttons.indexOf(event.target);
          this.listContent.forEach((element) => {
            element.classList.remove('tabs__content_active')
          });
          this.listContent[activeTab].classList.add('tabs__content_active')
        }
      }
    });
  }
}