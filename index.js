const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //validateInputs();
  username.setCustomValidity("");
  if (!username.checkValidity()) {
    if (username.validity.valueMissing) {
      username.setCustomValidity("Username is required");
    } else if (username.validity.tooShort) {
      username.setCustomValidity("Username must be at least 4 characters long");
    } else if (username.validity.tooLong) {
      username.setCustomValidity(
        "username cant be more than 12 characters long"
      );
    }
  }
  if (!username.checkValidity()) {
    username.reportValidity();
  }

  email.setCustomValidity("");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.checkValidity()) {
    if (email.validity.valueMissing) {
      email.setCustomValidity("Email is required.");
    } else if (!emailRegex.test(email.value)) {
      email.setCustomValidity("Please provide a valid email address.");
    }
  }
  if (!email.checkValidity()) {
    email.reportValidity();
  }

  password.setCustomValidity("");
  if (!password.checkValidity()) {
    if (password.validity.valueMissing) {
      password.setCustomValidity("Password is required.");
    } else if (password.value.length < 8) {
      password.setCustomValidity(
        "Password must be at least 8 characters long."
      );
    }
  }
  if (!password.checkValidity()) {
    password.reportValidity();
  }

  password2.setCustomValidity("");
  if (!password2.checkValidity()) {
    if (password2.validity.valueMissing) {
      password2.setCustomValidity("Please confirm your password.");
    } else if (password2.value !== password.value) {
      password2.setCustomValidity("Passwords do not match.");
    }
  }
  if (!password2.checkValidity()) {
    password2.reportValidity();
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required.");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required.");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address.");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "password must be at least 8 characters.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password.");
  } else if (password2Value !== passwordValue) {
    setError(password2, "password doesn't match");
  } else {
    setSuccess(password2);
  }
};

console.log(password.checkValidity);
