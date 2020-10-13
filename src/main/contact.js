import { createEl, createSection, simpleInput } from '../unitools';

const contact = () => {
  const formSection = createSection('div');
  const contactTitle = formSection.appendChild(createEl('h1', 'title-complement', 'contact-title'));
  contactTitle.innerHTML = 'Contact Us';
  formSection.id = 'contact';
  const form = formSection.appendChild(createEl('form'));
  form.id = 'contactForm';
  form.setAttribute('action', '/');
  form.setAttribute('method', 'post');


  simpleInput({ form, text: 'Name:', placeholder: 'Enter Your Name' });
  simpleInput({
    form, text: 'Email:', type: 'email', placeholder: 'Enter your email',
  });
  const descriptionLabel = form.appendChild(createEl('label'));
  const descriptionTextArea = document.createElement('textarea');

  descriptionTextArea.setAttribute('placeholder', 'Enter your message...');
  descriptionTextArea.setAttribute('required', '');
  descriptionLabel.innerHTML = 'Message:';
  descriptionLabel.appendChild(createEl('br'));
  descriptionLabel.appendChild(descriptionTextArea);

  const submitButton = form.appendChild(createEl('button'));
  submitButton.innerHTML = 'Submit';

  submitButton.addEventListener('click', (e) => {
    if (document.forms.contactForm.checkValidity()) {
      e.preventDefault();
    }
  });

  return formSection;
};

export default contact;