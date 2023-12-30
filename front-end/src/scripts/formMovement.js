export function showContactForm(formDOM) {
  formDOM.classList.add('out');
  toggleTabIndex(formDOM);
}

export function hideContactForm(formDOM, form_inputs, errmsgDOM) {
  formDOM.classList.remove('out');
  Object.values(form_inputs).forEach((input) => {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  });
  errmsgDOM.style.opacity = 0;
  toggleTabIndex(formDOM);
}

function toggleTabIndex(formDOM)
{
  const form_inputs = formDOM.querySelector('.contact-form').children;
  for (const input of form_inputs)
  {
    input.tabIndex = (input.tabIndex) ? 0 : -1;
  }
}