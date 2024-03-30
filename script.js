const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("Login");

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
  
    if (usernameValue === '') {
      alert('Please enter your username.');
      return;
    }
  
    if (passwordValue === '') {
      alert('Please enter your password.');
      return;
    }
  
    console.log(`Username: ${usernameValue}, Password: ${passwordValue}`);
  });