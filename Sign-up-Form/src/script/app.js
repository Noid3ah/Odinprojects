const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const errOutput = password.nextElementSibling;

let root = document.documentElement;
let colors = getComputedStyle(root);
console.log(colors.getPropertyValue("--_error-input"));

// Case: password is editted after passing or failing the test.

password.addEventListener("change", () => {
  if (!password.validity.valid) {
    handleInvalidInput(password.value);
  } else {
    handleValidInput(password.value);
  }
});

function throwCompareError() {
  password.classList.add("error");
  confirmPassword.classList.add("error");
  errOutput.textContent = "*Passwords do not match";
}

function throwCompareSuccess() {
  password.classList.remove("error");
  confirmPassword.classList.remove("error");
  errOutput.textContent = "";
}

function handleValidInput(pass) {
  password.classList.remove("error");
  errOutput.textContent = "";

  if (confirmPassword.value) {
    if (pass !== confirmPassword.value) {
      throwCompareError();
    } else {
      throwCompareSuccess();
    }
  }

  confirmPassword.addEventListener("change", () => {
    const confirm = confirmPassword.value;

    if (confirm && confirm !== pass) {
      throwCompareError();
    } else {
      throwCompareSuccess();
    }
  });
}

function handleInvalidInput(pass) {
  password.classList.add("error");
  errOutput.textContent = "*Password length must be greater than 6";
}
