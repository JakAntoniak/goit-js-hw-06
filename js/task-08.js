const form = document.querySelector(".login-form");

const loginData = {};
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Fill all the fields!");
  }

  loginData["email"] = email.value;
  loginData["password"] = password.value;
  console.log(loginData);
  event.currentTarget.reset();
}
