export default class View {
  constructor() {
    this.form = this.getElement('.formCheckout');
    this.content = this.getElement('.formCheckout__container');
    this.inputs = this.getListElements('input');
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  getListElements(selector) {
    const elements = Array.from(document.querySelectorAll(selector));
    return elements;
  }

  buildFieldsForMask(listFields) {
    let reqsFields = this.inputs.filter((input) => {
      if (input.name === 'cvv' || input.name === 'year' || input.name === 'month' || input.name === 'numberCard') {
        return input
      }
    })

    listFields(reqsFields)
  }

  sumbitForm(handler) {
    this.form.addEventListener('submit', (event) => {
      handler(event.target, this.inputs)
      event.preventDefault()
    });
  }
}