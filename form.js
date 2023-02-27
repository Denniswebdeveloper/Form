const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (name === '' || email === '' || message === '') {
    alert('All fields are required');
    return;
  }

  const data = { name, email, message };

  // Submit the data to the server or display a thank-you message
  console.log(data);
});
