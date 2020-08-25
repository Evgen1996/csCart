export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.buildFieldsForMask(this.reqsFields.bind(this));
    this.view.sumbitForm(this.handleForm.bind(this));
  }

  reqsFields(listFields) {
    this.model.addMaskFields(listFields)
  }

  handleForm(form,allFields) {
    this.model.sendForm(form,allFields)
  }
}