const loginForm = document.querySelector(".login-form");

const validateInput = (inputObj) => {
  const { username, password } = inputObj;

  const usernameWithoutSpaces = username.trim();
  const passwordWithoutSpaces = password.trim();

  let valid = true;

  if (usernameWithoutSpaces === '' || passwordWithoutSpaces === '' ||
      username.includes(' ') || password.includes(' ')) {
    valid = false;
  }

  if (usernameWithoutSpaces.length <= 3 || /^\d/.test(usernameWithoutSpaces)) {
    valid = false;
  }

  if (passwordWithoutSpaces.length <= 4) {
    valid = false;
  }

  if (valid) {
    
    window.location.href = "https://www.example.com";

    const users = [
      { username: "example", password: "password123" },
      { username: "user", password: "pass456" },
    ];

    const foundUser = users.find(
      (user) => user.username === usernameWithoutSpaces && user.password === passwordWithoutSpaces
    );

    if (foundUser) {
      console.log("Login successful!");
    }
  } else {

    const inputs = document.querySelectorAll('.login-form input');
    inputs.forEach(input => {
      input.style.borderColor = 'red';
    });
  }
};

const hdlLogin = (e) => {
  e.preventDefault();
  let inputObj = {};

  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }

  validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);
