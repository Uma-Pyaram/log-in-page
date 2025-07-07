document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Stop page from refreshing

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const correctUsername = "admin";
  const correctPassword = "12345";

  const message = document.getElementById('message');

  if (username === correctUsername && password === correctPassword) {
    message.style.color = "green";
    message.textContent = "Login successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});
