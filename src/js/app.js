if (!localStorage.getItem("loggedIn")) {
    window.location.href = "index.html";
  }
  
  const container = document.getElementById("plants");
  
  plants.forEach(p => {
    const div = document.createElement("div");
    div.className = "plant";
    div.innerHTML = `<h3>${p.name}</h3><p>${p.uses}</p>`;
    container.appendChild(div);
  });
  
  function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  }
  