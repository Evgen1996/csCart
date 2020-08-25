import IMask from "imask";
import Axios from 'axios';

export default class Model {
  constructor() {
    this.fieldsToFill = {};
  }

  addMaskFields(inputsList) {

    inputsList.forEach(input => {
      if (input.name === 'cvv') {
        IMask(input, {
          mask: /^[0-9]\d{0,2}$/
        });
      }

      if (input.name === 'numberCard') {
        IMask(input, {
          mask: '0000 0000 0000 0000',
          regexp: /^[0-9]\d$/
        });
      }

      if (input.name === 'month' || input.name === 'year') {
        IMask(input,
          {
            mask: /^[0-9]\d{0,1}$/
          });
      }
    });
  }

  sendForm(form, allFields) {
    allFields.forEach(input => {
      if (input.name === 'cvv') {
        if (input.value.length === 3) {
          if(input.classList.contains('input_error')) {
            input.classList.remove('input_error')
          }
          this.fieldsToFill[input.name] = input.value
        }
        else {
          input.classList.add('input_error')
          delete this.fieldsToFill[input.name]
        }
      }

      if (input.name === 'cardholder') {
        if (input.value.length >= 3) {
          if(input.classList.contains('input_error')) {
            input.classList.remove('input_error')
          }
          this.fieldsToFill[input.name] = input.value
        }
        else {
          input.classList.add('input_error')
          delete this.fieldsToFill[input.name]
        }
      }

      if (input.name === 'numberCard') {
        if (input.value.length === 19) {
          if(input.classList.contains('input_error')) {
            input.classList.remove('input_error')
          }
          this.fieldsToFill[input.name] = input.value

        }
        else {
          input.classList.add('input_error')
          delete this.fieldsToFill[input.name]
        }
      }

      if (input.name === 'agreement') {
        if (input.checked === true) {
          if(input.classList.contains('input_error')) {
            input.classList.remove('formCheckout__agreement-checkbox_error')
          }
          this.fieldsToFill[input.name] = 1
        }
        else {
          input.classList.add('formCheckout__agreement-checkbox_error')
          delete this.fieldsToFill[input.name]
        }
      }

      if (input.name === 'year') {
        if (input.value.length === 2) {
          if(input.classList.contains('input_error')) {
            input.classList.remove('input_error')
          }
          this.fieldsToFill[input.name] = input.value
        }
        else {
          input.classList.add('input_error')
          delete this.fieldsToFill[input.name]
        }
      }

      if (input.name === 'month') {
        if (input.value.length === 2) {
          if(input.classList.contains('input_error')) {
            input.classList.remove('input_error')
          }
          this.fieldsToFill[input.name] = input.value
        }
        else {
          input.classList.add('input_error')
          delete this.fieldsToFill[input.name]
        }
      }
    });
    if (Object.keys(this.fieldsToFill).length === allFields.length) {


      // тут не успел чутка, поэтому не красиво вот вот :/

      let form = document.querySelector('.formCheckout');

      form.textContent = 'ПОкупка успешно оплачена, аксиос не успел прикрутить :('

      // Axios.post(form.action, this.fieldsToFill).then(() => {
        
      // });
    }
  }
}