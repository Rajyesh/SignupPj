const users = {};

const showAlert = (message) => alert(message);

const signUp = () => {
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  if (!username || !password) {
    showAlert("Please fill in all fields.");
    return;
  }

  if (users[username]) {
    showAlert("Username already exists. Try another.");
    return;
  }

  users[username] = password;
  showAlert("Sign up successful! Please sign in.");
  document.getElementById("signup-username").value = "";
  document.getElementById("signup-password").value = "";
};

const signIn = () => {
  const username = document.getElementById("signin-username").value.trim();
  const password = document.getElementById("signin-password").value.trim();

  if (!username || !password) {
    showAlert("Please fill in all fields.");
    return;
  }

  if (users[username] && users[username] === password) {
    window.location.href = "welcome.html";
  } else {
    showAlert("Invalid username or password. Please try again.");
  }
};

document.getElementById("signup-btn").addEventListener("click", signUp);
document.getElementById("signin-btn").addEventListener("click", signIn);
