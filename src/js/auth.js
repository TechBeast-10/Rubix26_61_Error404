function signup() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
  
    if (!u || !p) return alert("Please fill in all fields!");
  
    localStorage.setItem("user", JSON.stringify({ u, p }));
    alert("Account created! Please login now.");
  }
  
  function login() {
    const saved = JSON.parse(localStorage.getItem("user"));
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (!saved) return alert("No account found. Please sign up first.");
  
    if (saved.u === username && saved.p === password) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "home.html";
    } else {
      alert("Wrong credentials. Try again.");
    }
  }
  