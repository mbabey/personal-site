export function showContactForm(formDOM) {
  formDOM.classList.add('out');
}

export function hideContactForm(formDOM, form_inputs, errmsgDOM) {
  formDOM.classList.remove('out');
  Object.values(form_inputs).forEach((input) => {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  });
  errmsgDOM.hidden = true;
}