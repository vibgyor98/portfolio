function validate() {
  let name = document.querySelector('.username');
  let email = document.querySelector('.email');
  let msg = document.querySelector('.message');
  let btn = document.querySelector('.submit');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == '' || email.value == '' || msg.value == '') {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
      resetForm();
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send('contact_service', 'template_gvbfvta', {
    to_name: 'Sourav',
    from_name: email,
    name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    icon: 'error',
    title: 'Oops...',
    text: 'Fields cannot be empty!',
  });
}

function error() {
  swal({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  });
}

function success() {
  swal({
    icon: 'success',
    title: 'Success...',
    text: 'Successfully sent message',
  });
}

//Reset form
function resetForm() {
  document.getElementById('contact-form').reset();
}
