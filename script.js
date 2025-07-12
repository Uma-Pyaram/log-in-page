document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const message = document.getElementById("message");

  if (username === "admin" && password === "1234") {
    message.textContent = "Login successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid credentials.";
    message.style.color = "red";
  }
});

